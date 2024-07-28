import React from "react";

const CardItem: React.FC<{
    children: React.ReactNode;
    label: string;
    size?: 'small' | 'large'
}> = ({
    children,
    label,
    size = 'small'
}) => {

        if (size === 'small') return (
            <div className="flex w-full">
                <div className="w-[30%]">
                    <p className="font-semibold text-sm">{label}</p>
                </div>
                <div className="w-[70%]">{children}</div>
            </div>
        );

        return (
            <div className="flex w-full ">
                <div className="w-[30%] flex items-center">
                    <p className="font-semibold text-sm">{label}</p>
                </div>
                <div className="w-[70%]">{children}</div>
            </div>
        );
    };

export default CardItem;
