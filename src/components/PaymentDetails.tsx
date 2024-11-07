import React from "react";

const PaymentDetails: React.FC = () => {
	return (
		<div className="p-5 bg-white shadow-lg rounded-lg text-center border border-gray-200">
			<h3 className="text-xl font-semibold text-gray-800 mb-2">PAYMENT DETAIL</h3>
			<p className="text-gray-600">
				<strong>Acc. No.:</strong> 56800100007756
			</p>
			<p className="text-gray-600">
				<strong>Name of the Account:</strong> Director GITM Lucknow
			</p>
			<p className="text-gray-600">
				<strong>Bank name and Branch:</strong> BANK OF BARODA GOEL INSTITUTE BRANCH
			</p>
			<p className="text-gray-600">
				<strong>IFSC Code:</strong> BARB0GOELUC (Fifth Letter is Zero)
			</p>
		</div>
	);
};

export default PaymentDetails;
