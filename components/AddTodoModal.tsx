import React from 'react';
import {Alert, Modal, Pressable, Text} from "react-native";
import CustomView from "./CustomView";
import CustomInput from "./CustomInput";
import { EvilIcons } from '@expo/vector-icons';
import CustomButton from "./CustomButton";

type Props = {
    visible: boolean;
    toggleVisible: () => void;
    onAddTodo: (todo: string) => void;
}

const AddTodoModal: React.FC<Props> = (props) => {
    const [todo, setTodo] = React.useState<string>('');

    const handleAddTodo = React.useCallback(() => {
        if (todo.length > 0) {
            props.onAddTodo(todo);
            setTodo('');
        } else {
            Alert.alert('Todo cannot be empty');
        }
    }, [todo]);

    return (
        <Modal transparent={true} visible={props.visible} animationType={"fade"} >
            <CustomView className={'w-screen h-screen bg-gray-800/40 px-5 flex flex-col items-center justify-center'}>
                <CustomView className={'bg-white py-5 px-8 rounded-xl w-full flex flex-col gap-y-5'}>
                    <CustomView className={'flex flex-row w-full justify-between items-center'}>
                        <Text className={'text-xl text-gray-600'}>Add to your list</Text>
                        <Pressable onPress={props.toggleVisible}>
                            <EvilIcons name="close" size={24} color="black" />
                        </Pressable>
                    </CustomView>
                    <CustomInput
                        value={todo}
                        onChangeText={text => setTodo(text)}
                        placeholder={'Make coffee'}
                    />
                    <CustomButton onPress={handleAddTodo} title={'Add'} />
                </CustomView>
            </CustomView>
        </Modal>
    );
};

export default AddTodoModal;