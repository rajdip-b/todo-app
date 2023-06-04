import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {IStoreState, ITodo} from "../types";
import {FlatList, Image, ScrollView, Text, TouchableOpacity} from "react-native";
import AddTodoModal from "../components/AddTodoModal";
import {StatusBar} from "expo-status-bar";
import CustomView from "../components/CustomView";
import Avatar from "../components/Avatar";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import {todoActions, todoReducer} from "../store/todo-slice";

const avatars = [
    require('../assets/avatar-1.png'),
    require('../assets/avatar-2.png'),
    require('../assets/avatar-3.png'),
    require('../assets/avatar-4.png'),
]

export default function Root() {
    const dispatch = useDispatch();
    const oldTodos = useSelector((state: IStoreState) => state.todo.todos) as ITodo[];
    const [todos, setTodos] = React.useState<ITodo[]>([]);
    const [selectedTodos, setSelectedTodos] = React.useState<Set<string>>(new Set());
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    React.useEffect(() => setTodos(oldTodos), []);

    const toggleModal = React.useCallback(() => {
        setModalOpen(prevState => !prevState);
    }, []);

    const toggleTodoStatus = React.useCallback((id: string) => {
        setTodos(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
        dispatch(todoActions.toggleTodoState(id))
    }, []);

    const toggleTodoSelection = React.useCallback((id: string) => {
        if (selectedTodos.has(id)) {
            selectedTodos.delete(id);
        } else {
            selectedTodos.add(id);
        }
        setSelectedTodos(new Set(selectedTodos));
    }, [selectedTodos]);

    const handleDeleteTodos = React.useCallback(() => {
        setTodos(prevState => prevState.filter(todo => !selectedTodos.has(todo.id)));
        setSelectedTodos(new Set());
        dispatch(todoActions.removeTodos(Array.from(selectedTodos)));
    }, [selectedTodos]);

    const handleAddTodo = React.useCallback((todo: string) => {
        const id = Math.random().toString();
        const t: ITodo = {
            id,
            title: todo,
            isCompleted: false
        }
        setTodos(prevState => [...prevState, t])
        dispatch(todoActions.addTodo(t));
    }, []);

    return (
        <ScrollView className={'flex flex-col gap-y-6 h-full mt-10 px-5'}>
            <AddTodoModal onAddTodo={handleAddTodo} toggleVisible={toggleModal} visible={modalOpen} />
            <StatusBar style="light" />
            <Text className={'text-xl text-black mx-auto'}>Task Details</Text>
            <CustomView className={'flex flex-col'}>
                <Text className={'text-light-blue'}>Task Title</Text>
                <Text className={'text-2xl'}>NFT Web App prototype</Text>
            </CustomView>
            <CustomView className={'flex flex-col'}>
                <Text className={'text-light-blue'}>Description</Text>
                <Text className={''}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..</Text>
            </CustomView>
            <CustomView className={'flex flex-row'}>
                {avatars.map((avatar, index) => <Avatar source={avatar} index={index} key={index} />)}
            </CustomView>
            <CustomView className={'w-full justify-between items-center flex flex-row'}>
                <Text className={'text-light-blue justify-self-start'}>Task List</Text>
                <TouchableOpacity disabled={selectedTodos.size === 0} className={`${selectedTodos.size !== 0 ? 'opacity-100' : 'opacity-0'} transition-all ease-out duration-300`} onPress={handleDeleteTodos}>
                    <Image source={require('../assets/bin.png')} className={'w-[16px] h-[21px]'} />
                </TouchableOpacity>
            </CustomView>
            <CustomView className={'flex flex-col w-full'}>
                <FlatList
                    data={todos}
                    renderItem={({item}) => <TodoItem
                        onTodoClick={toggleTodoStatus}
                        onTodoLongClick={toggleTodoSelection}
                        todo={item}
                        selectionMode={selectedTodos.size !== 0}
                        isSelected={selectedTodos.has(item.id)}
                    />}
                    keyExtractor={item => item.id}
                />
                <AddTodo onPress={toggleModal} className={'mx-auto mb-5'} />
            </CustomView>
        </ScrollView>
    )
}