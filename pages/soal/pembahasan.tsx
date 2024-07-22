import NomorSoal, {Jawaban} from "../components/NomorSoal";
import Soal from "../components/Soal";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Pembahasan from '../components/Pembahasan';

interface PembahasanPageProps {
    flagged: boolean;
}

export default function PembahasanPage({ flagged }: PembahasanPageProps) {

    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-center p-4 md:flex-row md:items-start gap-8 md:justify-center">
                <NomorSoal jawaban={[Jawaban.Benar, Jawaban.Benar, Jawaban.Salah, Jawaban.Kosong]} flaggedNum={[1, 2]} />
                <div className="flex flex-col gap-4">
                    <Soal flagged />
                    <Slider />
                    <Pembahasan />
                </div>
            </div>
        </main>
    )
}