import { useState } from "react";

const AdminAboutsImgForm = () => {
	const [certificateFormData, setCertificateFormData] = useState({
		certificateCaption: "",
	});

	const { certificateCaption } = certificateFormData;

	const handleCertificateChange = (e) => {
		const { name, value } = e.target;
		setCertificateFormData({
			...certificateFormData,
			[name]: value,
		});
	};

	const handleCertificateSubmit = (e) => {
		e.preventDefault();
		console.log(certificateFormData);
	};

	return (
		<form
			className="border border-slate-800 rounded-md p-8 gap-4 flex flex-col"
			onSubmit={handleCertificateSubmit}
		>
			<div className="flex flex-col">
				<label
					htmlFor="file"
					className="p-2 mt-6 text-center bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer "
				>
					Upload Certificate Image
				</label>
				<input type="file" name="file" id="file" className="hidden" />
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="">Certificate caption: </label>
				<textarea
					id="certificateCaption"
					name="certificateCaption"
					value={certificateCaption}
					onChange={handleCertificateChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 h-60"
				></textarea>
			</div>

			<button
				type="submit"
				className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
			>
				Submit
			</button>
		</form>
	);
};

export default AdminAboutsImgForm;
