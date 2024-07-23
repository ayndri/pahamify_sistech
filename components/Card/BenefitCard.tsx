import Image from "next/image";
import React, { Children, ReactNode } from "react";

type BenefitCardProps = {
    img: string;
    title: string;
    description: string;
}

function BenefitCard({ img, title, description }: BenefitCardProps) {
    return (
        <>
            <div>
                <Image src={img} width={80} height={80} alt="title" />
            </div>
            <div>
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </>
    )
}

export { BenefitCard };
export type { BenefitCardProps };