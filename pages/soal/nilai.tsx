import Navbar from "../../components/Navbar";
import {Jawaban} from "../../components/NomorSoal";
import {IoReload} from "react-icons/io5";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function NilaiPage() {
    const router = useRouter();
    const [nama, setNama] = useState("");
    const [nilai, setNilai] = useState(0);
    const [jawaban, setJawaban] = useState<Jawaban[]>([] as Jawaban[]);
    const [flagged, setFlagged] = useState<number[]>([] as number[]);

    useEffect(() => {
        const getJawaban = async () => {
            const response = await fetch(`http://localhost:3000/api/jawaban`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const res_ = await fetch(`http://localhost:3000/api/bank-soal`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            const data_kj = await res_.json();
            setJawaban(data.jawaban.map((j: number, index: number) => {
                if (j === -1) {
                    return Jawaban.Kosong;
                } else if (j === data_kj.soal[index].jawaban) {
                    return Jawaban.Benar;
                } else {
                    return Jawaban.Salah;
                }
            }));
            setFlagged(data.flagged);
            setNama(data.nama)
        }

        getJawaban();
    }, [])

    useEffect(() => {
        setNilai(jawaban.reduce((prev: number, cur: Jawaban) => ( prev + (cur === Jawaban.Benar ? 1 : 0)), 0));
    }, [jawaban])

    const jawabanBgMapper = (jawaban: Jawaban) => {
        switch (jawaban) {
            case Jawaban.Benar: return "bg-green-300"
            case Jawaban.Kosong: return "bg-gray-300"
            case Jawaban.Salah: return "bg-red-300"
            default: return "bg-gray-200"
        }
    }

    const kembaliMengerjakan = async () => {
        await router.push("/soal/latihan");
        return;
    }

    const kePembahasan = async () => {
        await router.push("/soal/pembahasan");
        return;
    }

    return (jawaban ?
        <main>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="border w-[40rem] p-5 bg-blue-200 rounded-2xl border-black">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-start gap-1">
                            <h3 className={"text-2xl font-bold"}>{nama}</h3>
                            <p>Jawaban benar: {nilai}/10</p>
                        </div>
                        <div className="rounded-2xl w-20 bg-blue-500 aspect-square flex flex-col justify-center items-center">
                            <span>Nilai</span>
                            <span className="text-4xl font-bold">{nilai * 10}</span>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex flex-col gap-2 items-center">
                        <span className="font-semibold">Pembahasan Soal</span>
                        <div className="cursor-pointer py-4 px-6 grid grid-cols-5 gap-3 rounded-2xl bg-blue-500" onClick={kePembahasan}>
                            {jawaban.map((j, index) => (
                                <span key={index} className={"cursor-pointer font-semibold p-2 border border-slate-400 aspect-square flex justify-center items-center rounded-full " + jawabanBgMapper(j) } >{index + 1}
                                    {flagged.includes(index+1) ? <div className="absolute w-2 h-2 top-0 right-0 rounded-full bg-yellow-500"></div> : <></>}

                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-[80%] m-auto mt-14">
                        <p className="text-sm">Belum puas dengan hasil ujian Bank Soal ini?</p>
                        <button
                            className="w-full mt-2 rounded-2xl p-1 flex justify-center bg-orange-500 text-white items-center gap-2"
                            onClick={kembaliMengerjakan}
                        >
                            <IoReload size={20}/>
                            <span className="font-bold">Kerjakan Ulang</span>
                        </button>
                    </div>
                </div>
            </div>
        </main> : <></>
    )
}