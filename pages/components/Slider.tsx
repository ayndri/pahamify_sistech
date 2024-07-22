import {BiArrowBack, BiLeftArrow, BiRightArrow} from "react-icons/bi";

export default function Slider() {
    return (
        <div className="w-full border flex justify-between items-center border-black rounded-2xl px-6 py-4">
            <span className="cursor-pointer">
                <BiLeftArrow />
            </span>
            <span>
                2/10
            </span>
            <span className="cursor-pointer">
                <BiRightArrow />
            </span>
        </div>
    )
}