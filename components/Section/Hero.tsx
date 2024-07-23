import Image from "next/image";
import React, { Children, ReactNode } from "react";
import { Button } from "../Button";

type HeroProps = {
    title: string;
    description: string;
    img: string;
    width: number;
    height: number;
    btnTitle: string;
}

function Hero ({title, description, img, width, height, btnTitle}: HeroProps) {
    return (
        <section className="hero">
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <Button title={btnTitle} isMain={true} />
            </div>
            <div>
                <Image src={img} width={width} height={height} alt={title} />
            </div>
        </section>
    )
}

export {Hero};