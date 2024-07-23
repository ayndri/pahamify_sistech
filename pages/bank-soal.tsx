import { Benefit, Hero, Soal } from "../components/Section";
import { Header } from "../components/Section/Header";

export default function BankSoal () {
    return (
        <>
            <Header />
            <Hero 
                title="Latih dan Ukur Pemahamanmu dengan Bank Soal Pahamify!" 
                description="Dapetin ratusan bank soal lengkap untuk latih pemahamanmu hadapi PTS, PAS, dan UTBK. Kamu bisa tau pemahaman materi mana yang perlu kamu tingkatin dan siap bersaing dengan siswa di seluruh penjuru Indonesia."
                img="/images/bank-soal.png"
                btnTitle="Kerjain Bank Soal Sekarang"
                width={350}
                height={290}
            />
            <Soal title="Cari Soalmu" description="Udah gak sabar latihan? Cari soal yang mau kamu latih disini!" />
            <Benefit title="Dapet apa aja sih di Bank Soal Pahamify?" />
        </>
    )
}