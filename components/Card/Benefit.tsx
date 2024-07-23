import React, { Children, ReactNode } from "react";
import { Course, CourseProps } from "./Course";

type BenefitProps = {
    pelajaran: CourseProps[]
}

function Benefit({ pelajaran }: BenefitProps) {
    return (
        <>
            {
                pelajaran.map((item: any, index: number) => (
                    <Course title={item.title} img={item.image} />
                ))
            }
        </>
    )
}

export { Benefit };