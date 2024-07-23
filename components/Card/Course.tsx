import Image from "next/image";
import React, { Children, ReactNode } from "react";

type CourseProps = {
    img: string;
    title: string;
    onClick?: () => void;
}

function Course({ img, title, onClick }: CourseProps) {
    return (
        <div onClick={onClick}>
            <Image src={img} width={220} height={183} alt={title} />
            <span>{title}</span>
        </div>
    )
}

export { Course };
export type { CourseProps };