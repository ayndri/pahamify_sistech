import {BiFlag, BiSolidFlag, BiTimer} from "react-icons/bi";
import {AiFillFlag, AiOutlineFlag} from "react-icons/ai";

interface SoalProps {
    flagged: boolean;
}

export default function Soal({ flagged }: SoalProps) {
    return (
        <div className="max-w-2xl border border-black rounded-2xl py-3 px-5">
            <div className="w-full flex items-center gap-3 border-b-black border border-transparent p-3">
                <h3 className="text-xl font-bold">Pertanyaan no 2 - Perbandingan</h3>
                { !flagged ?
                <BiFlag size={25} className="text-yellow-500" />
                : <BiSolidFlag size={25} className="text-yellow-500" />}
                <span className="flex gap-2 items-center grow justify-end">
                    <BiTimer size={25}/>
                    <span className="text-sm">00:22:55</span>
                </span>
            </div>
            <div className="w-full border-b-black border border-transparent pt-5 pb-7 px-4">
                <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam aliquid animi assumenda atque consequatur cum cumque cupiditate debitis dolorem enim eum eveniet exercitationem fuga id illo laboriosam maiores modi neque, nisi nostrum omnis praesentium quas quidem quos rerum sed sequi sit suscipit ullam voluptate voluptatem voluptatum! Asperiores aspernatur in labore laudantium nesciunt obcaecati quidem saepe suscipit? Consectetur doloribus harum ipsum iste, nam numquam perferendis quos vel? Autem commodi consequuntur culpa dignissimos doloribus ea eos, eum iste nesciunt nobis reiciendis repellendus soluta tempore vel voluptatem. Blanditiis commodi consequatur debitis eligendi est repellat sit unde ut! Perferendis quidem repellat sequi.
                </p>
            </div>
            <div className="px-2 py-3">
                <span className="text-xl font-bold mb-5 block">Pilihan Jawaban</span>
                <ul className="flex flex-col gap-2">
                    <li className="rounded bg-red-400 py-2 px-5">A. Lorem ipsum dolor.</li>
                    <li className="rounded bg-blue-200 py-2 px-5">A. Lorem ipsum dolor.</li>
                    <li className="rounded bg-green-400 py-2 px-5">A. Lorem ipsum dolor.</li>
                    <li className="rounded bg-blue-200 py-2 px-5">A. Lorem ipsum dolor.</li>
                    <li className="rounded bg-blue-200 py-2 px-5">A. Lorem ipsum dolor.</li>
                </ul>
            </div>
        </div>
    )
}