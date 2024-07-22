import NomorSoal, {Jawaban, Mode} from "../../components/NomorSoal";
import Soal from "../../components/Soal";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Pembahasan from '../../components/Pembahasan';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

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


export default function LatihanPage() {
    const router = useRouter();

    const [activeQuestion, setActiveQuestion] = useState(1);
    const [questions, setQuestions] = useState<Question[]>([] as Question[]);
    const [kodeJawaban, setKodeJawaban] = useState<number[]>([] as number[]);
    const [flagged, setFlagged] = useState<number[]>([] as number[]);
    const [time, setTime] = useState<number>(3600);

    useEffect(() => {
        const getQuestions = async () => {
            const res = await fetch('http://localhost:3000/api/bank-soal')
            const data = await res.json();
            console.log(data.soal);

            setQuestions(data.soal);

            setKodeJawaban(data.soal.map((q: any) => -1))
        }

        getQuestions()

        const timer = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    const setPengerjaanJawaban = (jawaban: number) => {
        setKodeJawaban((prev) => {
            const newArr = [...prev];
            if (newArr[activeQuestion - 1] === jawaban) {
                newArr[activeQuestion - 1] = -1;
                return newArr;
            }
            newArr[activeQuestion - 1] = jawaban;
            return newArr;
        })
    }

    const setFlag = () => {
        setFlagged((prev) => {
            const newArr = [...prev];
            if (newArr.includes(activeQuestion)) {
                newArr.splice(newArr.indexOf(activeQuestion), 1);
                return newArr;
            }
            return [...newArr, activeQuestion];
        })
    }

    const parseTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    const nilai = async () => {
        await fetch("http://localhost:3000/api/jawaban", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({jawaban: kodeJawaban, flagged: flagged})
        })
        await router.push("/soal/nilai")
    }

    return (
        (questions.length !== 0) ?
            <main>
                <Navbar />
                <div className="flex flex-col items-center p-4 md:flex-row md:items-start gap-8 md:justify-center">
                    <NomorSoal
                        jawaban={kodeJawaban}
                        flaggedNum={flagged}
                        curSoal={activeQuestion}
                        setSoal={setActiveQuestion}
                        mode={Mode.Pengerjaan}
                        waktuSisa={parseTime(time)}
                        gotoNilai={nilai}
                    />
                    <div className="flex flex-col gap-4">
                        <Soal
                            question={questions[activeQuestion - 1]}
                            flagged={flagged.includes(activeQuestion)}
                            waktuSisa={parseTime(time)}
                            activeQuestion={activeQuestion}
                            kodeJawaban={kodeJawaban[activeQuestion - 1]}
                            setPengerjaanJawaban={setPengerjaanJawaban}
                            setFlag={setFlag}
                        />
                        <Slider curSoal={activeQuestion} setSoal={setActiveQuestion} soalLength={questions.length}/>
                    </div>
                </div>
            </main> : <></>
    )
}