"use client";
import React, { useState } from "react";
import logo_nav from "@/../public/nav-logo.png";
import srmu from "@/../public/srmu.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [open, setOpen] = useState(true);
	const pathname = usePathname();
	const navLinks = [
		{ name: "Home", slug: "/", isActive: true },
		{ name: "About Us", slug: "/about", isActive: true },
		{ name: "Call For Paper", slug: "/call-for-paper", isActive: true },
		{ name: "Committee", slug: "/committee", isActive: true },
		{ name: "Tracks", slug: "/tracks", isActive: true },
		{ name: "Speakers", slug: "/speakers", isActive: true },
		{ name: "Guidelines", slug: "/guidelines", isActive: true },
		{ name: "Registration", slug: "/registration", isActive: true },
		{ name: "Gallery", slug: "/gallery", isActive: true },
		{ name: "Contact Us", slug: "/contact-us", isActive: true },
	];

	return (
		<div
			className={`w-full z-10 py-5 px-10 lg:px-16 sticky top-0 backdrop-blur-sm left-0 flex flex-row  items-center justify-between duration-500 flex-wrap lg:flex-nowrap overflow-hidden gap-5 lg:gap-28  ${open ? "h-28" : "h-auto"}`}>
			<Image src={logo_nav} width={60} height={60} alt="Techrevocon" className="order-1" />
			<div className="h-full p-10 flex lg:p-0 2xl:px-2 w-full backdrop-blur-md lg:flex-row flex-col order-4 lg:order-2 items-center justify-evenly gap-2">
				{navLinks.map((elem, index) => (
					<Link
						key={index}
						href={elem.slug}
						className={`${index === 9 ? "border-2 rounded-[50px] px-4 py-2 hover:border-black duration-500" : ""} ${
							pathname === elem.slug ? "text-black border-black" : "text-white border-white"
						} font-semibold hover:text-black text-lg  flex-shrink-0 duration-500`}>
						{elem.name}
					</Link>
				))}
			</div>
			<svg width="60" height="60" viewBox="0 0 90 90" fill="none" className={`order-2 cursor-pointer lg:hidden`} xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)}>
				<rect width="60" height="60" />
				<path d="M11.25 45H78.75" stroke={`${open ? "white" : "black"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M11.25 22.5H78.75" stroke={`${open ? "white" : "black"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M11.25 67.5H78.75" stroke={`${open ? "white" : "black"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			<Image src={srmu} width={60} height={40} alt="Shri Ramswaroop Memorial University" className="order-3" />
		</div>
	);
}
