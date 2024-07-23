import React, { Children, ReactNode } from "react";
import Image from "next/image";
import { Menu } from "../Menu";
import { Button } from "../Button";

const menu = [
    { title: "Produk", link: "" },
    { title: "Paket Belajar", link: "" },
    { title: "Orang Tua & Guru", link: "" },
    { title: "Mitra", link: "" },
    { title: "Panduan", link: "" },
    { title: "Blog", link: "" }
];

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <Image src="/images/logo.png" width={90} height={40} alt="Logo" />
                </div>
                <div>
                    <ul>
                        {
                            menu.map((item: any, index: number) => (
                                <Menu title={item.title} link={item.link} />
                            ))
                        }
                    </ul>
                </div>
                <div className="btn-header">
                    <Button title="Download" isFull={false} />
                    <Button title="Masuk/Daftar" isFull={true} />
                </div>
            </nav>
        </header>
    )
}

export { Header };