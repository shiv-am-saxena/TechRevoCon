import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Robot from "@/components/Robot";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>TECHREVOCON-24</title>
			</head>
			<body className={`antialiased bg-gradient-to-b from-sky-600 to-sky-200`}>
				<Navbar/>
				<Robot/>
				{children}
				<Footer/></body>
		</html>
	);
}
