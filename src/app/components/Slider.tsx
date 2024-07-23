import {BiArrowBack, BiLeftArrow, BiRightArrow} from "react-icons/bi";
import {Dispatch, SetStateAction} from "react";
import {Jawaban} from "./NomorSoal";

interface SliderProps {
    curSoal: number;
    setSoal: Dispatch<SetStateAction<number>>;
    soalLength: number;
}

export default function Slider({ curSoal, setSoal, soalLength }: SliderProps) {

    const prevSoal = () => {
        if (curSoal > 1) {
            setSoal(curSoal - 1);
        }
    }

    const nextSoal = () => {
        if (curSoal < soalLength) {
            setSoal(curSoal + 1);
        }
    }

    return (
        <div className="w-full border flex justify-between items-center border-black rounded-2xl px-6 py-4">
            <span className="cursor-pointer" onClick={prevSoal}>
                <BiLeftArrow />
            </span>
            <span>
                {curSoal}/10
            </span>
            <span className="cursor-pointer" onClick={nextSoal}>
                <BiRightArrow />
            </span>
        </div>
    )
}