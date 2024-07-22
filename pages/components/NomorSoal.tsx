import {BiFlag, BiSolidFlag, BiTimer} from "react-icons/bi";

export enum Jawaban {
    Benar = 1,
    Salah = 2,
    Kosong = 3,
    Diisi = 4,
}

interface NomorSoalProps {
    jawaban: Jawaban[];
    flaggedNum: number[];
}

export default function NomorSoal({ jawaban, flaggedNum }: NomorSoalProps) {
    const jawabanBgMapper = (jawaban: Jawaban) => {
        switch (jawaban) {
            case Jawaban.Benar: return "bg-green-200"
            case Jawaban.Diisi: return "bg-blue-200"
            case Jawaban.Kosong: return "bg-gray-300"
            case Jawaban.Salah: return "bg-red-300"
            default: return "bg-gray-200"
        }
    }

    return (
        <div className="max-w-2xl md:max-w-[16rem] border border-black rounded-2xl p-2">
            <div className="w-full flex items-center gap-3 border-b-black border border-transparent p-1 pb-2">
                <h3 className="text-lg font-bold">Nomor Soal</h3>
            </div>
            <div className="px-1 py-4 grid grid-cols-12 md:grid-cols-6 gap-1 flex-wrap">
                { jawaban.map((j, index) => (
                    <div
                        key={index}
                        className={"relative p-1 border border-slate-400 aspect-square flex justify-center items-center rounded-full " + jawabanBgMapper(j)}>
                        {index+1}
                        {flaggedNum.includes(index+1) ? <div className="absolute w-2 h-2 top-0 right-0 rounded-full bg-yellow-500"></div> : <></>}
                    </div>
                ))}
            </div>
            <p className="text-sm block px-2 text-gray-600">
                Total waktu pengerjaan: 22:00:55
            </p>
            <button className="p-1/2 mt-4 mb-2 w-full bg-orange-500 rounded-full text-white font-semibold">
                Selesai Review
            </button>
        </div>
    )
}