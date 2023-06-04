import React from 'react';
import {Image, Text, TouchableOpacity} from "react-native";

type Props = {
    style?: any;
    className?: string;
    onPress: () => void;
}

const AddTodo: React.FC<Props> = ({style, className, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style} className={`${className} w-full rounded-2xl bg-gray-100 flex flex-row px-8 items-center py-5`}>
            <Image className={'w-[16px] h-[16px] mr-5'} source={require('../assets/plus.png')} />
            <Text className={'text-[16px] text-gray-400'}>Add Task</Text>
        </TouchableOpacity>
    );
};

export default AddTodo;