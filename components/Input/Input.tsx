import Image from "next/image";
import React, { Children, ReactNode } from "react";

function Input() {
    return (
        <>
            <input className="input-search" type="text" placeholder="Cari judul soal..."></input>
            <button>
                <Image src="/images/search.png" width={22} height={22} alt="Logo" />
            </button>
        </>
    )
}

export { Input };