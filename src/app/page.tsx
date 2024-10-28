import Image from "next/image";
import Logo from "@/../public/logo (1).png";
import Link from "next/link";
export default function page() {
	return (
		<div className="flex flex-col lg:flex-row w-full">
			<div className="w-full lg:w-1/2 p-10 flex items-center justify-center">
				<Image src={Logo} height={200} width={200} className="lg:scale-[1.15] lg:hover:scale-[1.25] h-fit w-fit duration-300" alt="Tech Revolution Conference" />
			</div>
			<div className="flex p-5 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start flex-col gap-6 font-semibold">
				<h6 className="font-semibold tracking-wider text-xl">#CYBERCOM24 (IEEE Record. 63683)</h6>
				<h1 className="text-xl tracking-widest font-semibold"><span className="font-bold text-5xl lg:text-6xl uppercase">International Conference</span><br /> on Tech Revolution</h1>
				<h2 className="text-xl">15-16, November, 2024</h2>
				<h3 className="text-xl text-red-500">HYBRID MODE</h3>
				<div className="w-fit flex-nowrap gap-10 pr-5 flex text-white justify-between items-center">
					<Link href="/about" className="px-5 hover:text-black hover:bg-white duration-300 text-semibold py-3 rounded-[25px] bg-sky-700">About</Link>
					<Link href="/tracks"  className="px-5 w-fit py-3 hover:translate-x-5 hover:text-black duration-300">Tracks →</Link>
				</div>
				<p className="w-full text-xl">
					Article Submission Link (CMT): <a className="text-blue-900" href="https://cmt3.research.microsoft.com/CYBERCOM2024/Submission/Index">Link</a>
				</p>
				<p className="text-red-600 font-semibold text-xl">Extended Submission Deadline: 30, September, 2024</p>
			</div>
		</div>
	);
}
