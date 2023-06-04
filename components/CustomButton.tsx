import React from 'react';
import {Text, TouchableOpacity} from "react-native";

type Props = {
    style?: any;
    className?: string;
    onPress: () => void;
    title: string;
}

const CustomButton: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style} className={`${props.className} py-3 px-3 bg-purple-500 rounded-lg`}>
            <Text className={'text-white mx-auto'}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;