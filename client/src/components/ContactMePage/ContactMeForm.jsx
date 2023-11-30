import { useDispatch, useSelector } from "react-redux";

import Spinner from "../Spinner";
import Message from "../Message";

import { usePostMessageMutation } from "../../services/messagesApiSlice";
import {
	setFormData,
	resetFormData,
	selectFormData,
} from "../../services/messageSlice";

const ContactMeForm = () => {
	const dispatch = useDispatch();
	const formData = useSelector(selectFormData);

	const { name, email, message } = formData;

	const [postMessage, { isLoading, error }] = usePostMessageMutation();

	const resetForm = () => {
		dispatch(resetFormData());
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await postMessage(formData).unwrap();
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(setFormData({ ...formData, [name]: value }));
	};

	if (error) {
		return <Message variant="red">{error.data.message}</Message>;
	}

	return (
		<div className="text-slate-500 text-sm justify-center m-12 xl:m-24">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label htmlFor="name" className="pb-1">
						_name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email" className="pt-4 pb-1">
						_email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message" className="pt-4 pb-1">
						_message
					</label>
					<textarea
						id="message"
						name="message"
						value={message}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<button
					type="submit"
					className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
				>
					{isLoading ? <Spinner /> : "submit-message"}
				</button>
			</form>
		</div>
	);
};

export default ContactMeForm;
