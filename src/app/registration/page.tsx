import PaymentDetails from "@/components/PaymentDetails";
import RegistrationCard from "@/components/RegistrationCard";

const page: React.FC = () => {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10 items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center text-white">
				<h1 className="text-center w-full text-6xl font-semibold">Registration</h1>
				<br />
				<p className="text-center lg:w-1/2 w-full px-5">
					The maximum allowable pages in the camera-ready paper are 5 pages (min 3 pages). The additional payment required for extra pages is Rs1000/page for Indian authors of all categories
					and USD20/page for all categories of foreign authors.
				</p>
			</div>

			<div className="flex w-full flex-col items-center justify-center lg:px-28 px-5 lg:py-20 py-5 gap-10 rounded-3xl bg-white/40">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
					<RegistrationCard title="Faculty/Industrial Person" price="4000" currency="Rupees" isClosed={true} href="#" buttonText="Closed Now" />
					<RegistrationCard title="UG/PG/Research Scholar" price="3500" currency="Rupees" isClosed={true} href="#" buttonText="Closed Now" />
					<RegistrationCard title="International Authors" price="100" currency="USD" isClosed={true} href="#" buttonText="Closed Now" />
					<RegistrationCard title="Participants" price="500" currency="Rupees" isClosed={false} href="#" buttonText="Click for Registration" />
				</div>

				<PaymentDetails />
			</div>
		</div>
	);
};

export default page;
