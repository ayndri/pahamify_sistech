import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

export default function Pembahasan() {
    return (
        <div className="w-full border max-w-2xl flex flex-col justify-between items-center border-black rounded-2xl p-6">
            <h3 className="text-lg font-semibold block w-full text-start">Pembahasan</h3>
            <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem consequuntur dolore eligendi et, explicabo fugit harum ipsum quasi ut?
            </p>
            <div className="flex gap-8 w-full items-center mt-3 mb-2">
                <div className="w-80 aspect-video bg-blue-200">

                </div>
                <button className="py-2 px-4 font-semibold bg-blue-400 text-white rounded-full">
                    Tonton penjelasan!
                </button>
            </div>
        </div>
    )
}