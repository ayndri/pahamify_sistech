import {BiArrowBack, BiCoin} from "react-icons/bi";
import {BsCashCoin} from "react-icons/bs";
import {GiCoins} from "react-icons/gi";
import {RiCoinFill} from "react-icons/ri";
import {RxAvatar} from "react-icons/rx";
import {SiGravatar} from "react-icons/si";

export default function Navbar() {
    return (
        <nav className="h-[4.5rem] flex justify-center items-center mb-6 px-4 bg-blue-500 text-white">

         <div className="grow flex justify-start">
            <div className="flex cursor-pointer justify-center items-center p-[0.375rem] border-2 rounded-full border-white">
                <BiArrowBack size={20}/>
            </div>
         </div>
            <div>
                <h1 className="text-2xl font-bold">
                    Pra PAS Matematika Wajib Kelas X Sem 1 - Paket 3
                </h1>
            </div>
            <div className="flex gap-8 items-center grow justify-end">
                <span className="flex gap-2 items-center">
                    <RiCoinFill size={20} className="text-yellow-400" />
                    <p className="text-sm">1300</p>
                </span>
                <RxAvatar size={45} />
            </div>
        </nav>
    )
}