"use client";
import Image from "next/image";
import React from "react";
import logo from '@/../public/nav-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
	const pathname = usePathname();
	return (
		<div className="w-full text-white p-10 flex flex-wrap md:flex-row">
			<div className="w-full lg:w-1/3 flex-shrink-0 text-center flex flex-col gap-5 order-1">
				<div className="flex-shrink-0 w-full flex flex-row flex-nowrap items-center justify-center gap-2 uppercase font-bold">
					<Image src={logo} height={35} width={35} alt="Tech Revolution Conference" layout="fixed" />
					<h1 className="text-2xl">TechRevoCon-24</h1>
				</div>
				<p className="text-xl font-semibold">International Conference on Tech Revolution </p>
				<div className="flex flex-row-reverse items-center justify-center gap-5 p-2">
					<a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank">
						<FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4 text-white duration-500 bg-[#740fd6e6] p-2 hover:bg-transparent hover:border-white border border-[#740fd6e6] rounded-lg"/>
					</a>
					<a href="https://www.instagram.com" aria-label="Instagram" target="_blank">
						<FontAwesomeIcon icon={faInstagram} className="h-4 w-4 text-white duration-500 bg-[#740fd6e6] p-2 hover:bg-transparent hover:border-white border border-[#740fd6e6] rounded-lg"/>
					</a>
					<a href="https://www.facebook.com" aria-label="LinkedIn" target="_blank">
						<FontAwesomeIcon icon={faFacebookF} className="h-4 w-4 text-white duration-500 bg-[#740fd6e6] p-2 hover:bg-transparent hover:border-white border border-[#740fd6e6] rounded-lg"/>
					</a>
				</div>
			</div>
			<div className="w-full lg:w-2/3 text-lg flex flex-row flex-wrap flex-shrink-0 order-2 items-center justify-evenly">
				<div className="flex flex-col gap-3">
					<Link href="/about" className={`flex-shrink-0 font-medium capitalize ${pathname == '/about' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>About Us</Link>
					<Link href="/call-for-paper" className={`flex-shrink-0 font-medium capitalize ${pathname == '/call-for-paper' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Call For Paper</Link>
					<Link href="/committee" className={`flex-shrink-0 font-medium capitalize ${pathname == '/committee' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Committee</Link>
					<Link href="/tracks" className={`flex-shrink-0 font-medium capitalize ${pathname == '/tracks' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Tracks</Link>
				</div>
				<div className="flex flex-col gap-3">
					<Link href="/speakers" className={`flex-shrink-0 font-medium capitalize ${pathname == '/speakers' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Speakers</Link>
					<Link href="/guidelines" className={`flex-shrink-0 font-medium capitalize ${pathname == '/guidelines' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Guidelines</Link>
					<Link href="/registration" className={`flex-shrink-0 font-medium capitalize ${pathname == '/registration' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Registration</Link>
					<Link href="/gallery" className={`flex-shrink-0 font-medium capitalize ${pathname == '/gallery' ? 'text-black' : 'text-white'} hover:text-black duration-500`}>Gallery</Link>
				</div>
			</div>
			<div className="w-full order-3 flex flex-col mt-10 items-center justify-center flex-shrink-0">
				<p className="text-center">©2024 <a href="https://srmu.ac.in/" target="_blank" className="font-semibold">Shri Ramswaroop Memorial University.</a> All rights reserved.</p>
				<p>Developed with ❤️ by <a href="https://shiv-am-saxena.vercel.app/" target="_blank" className="font-bold">Shivam Saxena</a></p>
			</div>
		</div>
	);
}
