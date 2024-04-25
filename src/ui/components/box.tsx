import React from 'react';
import "./styles/box.css";

type BoxProps = {
    children: React.ReactNode;
    classes?: string;
};

export default function Box({ children, classes = '' }: BoxProps) {
    return (
        <>
            <div className={'container' + (classes && ' ' + classes)}>
                {children}
            </div>
        </>
    );
}