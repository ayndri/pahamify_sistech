import NomorSoal, {Jawaban, Mode} from "../../components/NomorSoal";
import Soal from "../../components/Soal";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Pembahasan from '../../components/Pembahasan';
import {useEffect, useState} from "react";

interface PembahasanPageProps {
    flagged: boolean;
}

export interface Question {
    judul_materi:    string;
    pertanyaan:      string;
    pilihan_jawaban: string[];
    jawaban:         number;
    pembahasan:      string;
}


export default function PembahasanPage() {
    const [activeQuestion, setActiveQuestion] = useState(1);
    const [questions, setQuestions] = useState<Question[]>([] as Question[]);
    const [jawaban, setJawaban] = useState<Jawaban[]>([] as Jawaban[]);
    const [kodeJawaban, setKodeJawaban] = useState<number[]>([] as number[]);
    const [flagged, setFlagged] = useState<number[]>([] as number[]);

    useEffect(() => {
        const getQuestions = async () => {
            const res = await fetch('http://localhost:3000/api/bank-soal')
            const data = await res.json();
            console.log(data.soal);

            setQuestions(data.soal);

            const res_ = await fetch('http://localhost:3000/api/jawaban')
            const data_ = await res_.json();

            setJawaban(data_.jawaban.map((j: number, index: number) => {
                if (j === -1) {
                    return Jawaban.Kosong;
                } else if (j === data.soal[index].jawaban) {
                    return Jawaban.Benar;
                } else {
                    return Jawaban.Salah;
                }
            }));
            setKodeJawaban(data_.jawaban);
            setFlagged(data_.flagged)
        }

        getQuestions()
    }, [])

    return (
        (questions.length !== 0 && jawaban.length !== 0) ?
        <main>
            <Navbar />
            <div className="flex flex-col items-center p-4 md:flex-row md:items-start gap-8 md:justify-center">
                <NomorSoal
                    jawaban={jawaban}
                    flaggedNum={flagged}
                    curSoal={activeQuestion}
                    setSoal={setActiveQuestion}
                    mode={Mode.Pembahasan}
                />
                <div className="flex flex-col gap-4">
                    <Soal
                        question={questions[activeQuestion - 1]}
                        flagged={flagged.includes(activeQuestion)}
                        activeQuestion={activeQuestion}
                        waktuSisa={""}
                        jawaban={jawaban[activeQuestion - 1]}
                        kodeJawaban={kodeJawaban[activeQuestion - 1]}
                    />
                    <Slider curSoal={activeQuestion} setSoal={setActiveQuestion} soalLength={questions.length}/>
                    <Pembahasan pembahasan={questions[activeQuestion - 1].pembahasan} />
                </div>
            </div>
        </main> : <></>
    )
}