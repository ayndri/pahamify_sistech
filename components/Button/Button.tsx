import React, { Children, ReactNode } from "react";

type ButtonProps = {
    title: string;
    isFull?: boolean;
    isMain?: boolean;
    onClick?: () => void;
}

function Button ({title, isFull, onClick, isMain}: ButtonProps) {
    return (
        <button className={isFull ? "btn-full" : isFull == false ? "btn-outline" : isMain ? "btn-main" : ""} onClick={onClick}>{title}</button>
    )
}

export { Button };