import Link from "next/link";
import React from "react";

interface RegistrationCardProps {
	title: string;
	price: string;
	currency: string;
	isClosed: boolean;
	buttonText: string;
	href: string;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ title, price, currency, isClosed, buttonText, href }) => {
	return (
		<div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg text-center border border-gray-200">
			<h3 className="text-lg font-semibold text-purple-600">{title}</h3>
			<p className="text-3xl font-bold mt-2 text-gray-900">
				{price} <span className="text-sm">{currency}</span>
			</p>
			<hr className="w-full border-t my-2" />
			<Link href={href} className={`text-sm font-medium ${isClosed ? "text-gray-400 cursor-not-allowed" : "text-purple-500 hover:underline"}`}>
				{buttonText}
			</Link>
		</div>
	);
};

export default RegistrationCard;
