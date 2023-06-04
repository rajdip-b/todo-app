import React from 'react';
import {ITodo} from "../types";
import {Pressable, Text} from "react-native";
import CustomView from "./CustomView";
import { Feather } from '@expo/vector-icons';

type Props = {
    todo: ITodo;
    style?: any;
    className?: string;
    onTodoClick: (id: string) => void;
    onTodoLongClick: (id: string) => void;
    selectionMode: boolean;
    isSelected: boolean;
}

const TodoItem: React.FC<Props> = (props) => {
    return (
        <Pressable
            onLongPress={() => props.onTodoLongClick(props.todo.id)}
            onPress={() => props.selectionMode ? props.onTodoLongClick(props.todo.id) : props.onTodoClick(props.todo.id)}
            style={props.style}
            className={`${props.className} w-full rounded-2xl border-2 border-transparent ${props.todo.isCompleted ? props.isSelected ? 'border-purple-500 bg-gray-100' : 'bg-purple-500' : 'bg-gray-100'} flex flex-row items-center py-5 px-8 mb-3 items-center`} >
            {props.selectionMode && (
                <CustomView className={` w-[25px] h-[25px] rounded-full ${props.isSelected ? 'bg-purple-500' : 'bg-white border-[1px] border-gray-500'} mr-3 flex items-center justify-center`}>
                    <Feather name={'check'} size={16} color={'#fff'} />
                </CustomView>
            )}
            <Text className={`text-[16px] ${props.todo.isCompleted && !props.isSelected ? 'text-white' : 'text-gray-700'}`}>{props.todo.title}</Text>
        </Pressable>
    );
};

export default TodoItem;