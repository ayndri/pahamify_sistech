import {BiFlag, BiSolidFlag, BiTimer} from "react-icons/bi";
import {AiFillFlag, AiOutlineFlag} from "react-icons/ai";
import {Question} from "../pages/soal/pembahasan";
import {Dispatch, SetStateAction, useEffect} from "react";
import {Jawaban} from "./NomorSoal";

interface SoalProps {
    question: Question;
    waktuSisa: string;
    flagged: boolean;
    activeQuestion: number;
    jawaban?: number | undefined;
    kodeJawaban?: number | undefined;
    setPengerjaanJawaban?: Function;
    setFlag?: Function;
}

export default function Soal({
                                 question,
                                 waktuSisa,
                                 flagged,
                                 activeQuestion,
                                 jawaban,
                                 kodeJawaban,
                                 setPengerjaanJawaban,
                                 setFlag
                             }: SoalProps) {
    const colorMapper = (index: number) => {
        if (!jawaban) {
            if (index === kodeJawaban) {
                return "bg-blue-400";
            }
            return ""
        }
        if (index === kodeJawaban && jawaban === Jawaban.Salah) {
            return "bg-red-300";
        } else if (index === question.jawaban) {
            return "bg-green-300";
        } else {
            return "";
        }
    }

    const indexToLetter = (index: number) => {
        switch (index) {
            case 0:
                return 'A';
            case 1:
                return 'B';
            case 2:
                return 'C';
            case 3:
                return 'D';
            case 4:
                return 'E';
        }
    }

    return (
        <div className="max-w-2xl border border-black rounded-2xl py-3 px-5">
            <div className="w-full flex items-center gap-3 border-b-black border border-transparent p-3">
                <h3 className="text-xl font-bold">Pertanyaan no {activeQuestion} - {question.judul_materi}</h3>
                <div onClick={() => setFlag ? setFlag() : ""}>
                    {!flagged ?
                        <BiFlag size={25} className="text-yellow-500"/>
                        : <BiSolidFlag size={25} className="text-yellow-500"/>}
                </div>
                {jawaban ? <></> :
                    <span className="flex gap-2 items-center grow justify-end">
                        <BiTimer size={25}/>
                        <span className="text-sm">{waktuSisa}</span>
                    </span>
                }
            </div>
            <div className="w-full border-b-black border border-transparent pt-5 pb-7 px-4">
                <p className="text-md">
                    {question.pertanyaan}
                </p>
            </div>
            <div className="px-2 py-3">
                <span className="text-xl font-bold mb-5 block">Pilihan Jawaban</span>
                <ul className="flex flex-col gap-2">
                    {question.pilihan_jawaban.map((p, index) => (
                        <li
                            key={index}
                            className={"rounded cursor-pointer py-2 px-5 bg-blue-200 " + colorMapper(index)}
                            onClick={() => setPengerjaanJawaban ? setPengerjaanJawaban(index) : ""}
                        >{indexToLetter(index)}. {p}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}