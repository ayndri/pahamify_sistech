import React, { Children, ReactNode } from "react";
import { BenefitCard, BenefitCardProps } from "../Card";

type BenefitProps = {
    title: string;
}

const chooseUs = [
    {
        image: "/images/Benefit/lengkap.png",
        title: "Soal Lengkap",
        description: "Kumpulan soal lengkap untuk kelas 10 hingga 12 dari semua mata pelajaran. Dapatkan juga akses ke soal UTBK tahun-tahun sebelumnya"
    },
    {
        image: "/images/Benefit/leaderboard.png",
        title: "Leaderboard",
        description: "Peringkat nasional yang bisa bikin kamu makin semangat untuk jadi yang terbaik"
    },
    {
        image: "/images/Benefit/grafik.png",
        title: "Grafik Progres",
        description: "Pantau perkembanganmu lewat grafik progres dan ketahui materi yang perlu kamu tingkatin"
    },
    {
        image: "/images/Benefit/download.png",
        title: "Download Soal",
        description: "Mau kerjain sambil coret-coret? Bank Soal Pahamify bisa kamu download dan cetak, lho!"
    },
]

function Benefit({ title }: BenefitProps) {
    return (
        <section className="benefit">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {
                    chooseUs.map((item: any, index: any) => (
                        <div key={index}>
                            <BenefitCard img={item.image} title={item.title} description={item.description} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export { Benefit };