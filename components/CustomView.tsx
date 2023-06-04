import React from 'react';
import { View } from 'react-native';

type Props = {
    style?: any;
    className?: string;
    children?: React.ReactNode;
};

const CustomView: React.FC<Props> = ({ style, className, children }) => {
    return (
        <View style={style} className={className}>
            {children}
        </View>
    );
};

export default CustomView;