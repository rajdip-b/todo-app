import React from 'react';
import {TextInput} from "react-native";

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    style?: any;
}

const CustomInput: React.FC<Props> = (props) => {
    return (
        <TextInput
            style={props.style}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={text => props.onChangeText?.(text)}
            className={'w-full py-2 rounded-md bg-gray-100 px-3 text-gray-600'}
        />
    );
};

export default CustomInput;