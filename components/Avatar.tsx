import React from 'react';
import {Image} from "react-native";
import CustomView from "./CustomView";

type Props = {
    source: any;
    index: number;
}

const Avatar: React.FC<Props> = ({source, index}) => {
    return (
        <CustomView style={{
            transform: [{translateX: index > 0 ? -(index*5) : 0}]
        }} className={`rounded-full bg-white w-[25px] h-[25px]`}>
            <Image className={'w-[25px] h-[25px]'} key={index} source={source} />
        </CustomView>
    );
};

export default Avatar;