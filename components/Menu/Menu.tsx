import React, { Children, ReactNode } from "react";

type MenuProps = {
    title: string;
    link: string;
}

function Menu({title, link}: MenuProps) {
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    )
}

export { Menu };