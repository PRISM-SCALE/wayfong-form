import {CircleX} from "lucide-react";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

const ThankYou = () => {
	const {state} = useLocation();
	const {t} = useTranslation();

	let message: string;

	if (state.status !== 200) {
		message = t("Uh-oh your form submission has failed, Please try again.");
	} else {
		message = t("Our sales associate will get back to you.");
	}

	return (
		<div className="flex flex-col gap-2 items-center mt-4">
			<div
				className={`rounded-full h-40 w-40 ${
					state.status !== 200 ? `bg-[#E3FBE3]` : ``
				} flex items-center justify-center`}
			>
				{state.status !== 200 ? (
					<CircleX className="text-[#FF4842] h-24 w-24" />
				) : (
					<img className="text-[#00AA5C] h-40 w-40" src="/way-fong.webp" />
				)}
			</div>
			<h1 className="text-3xl font-semibold mb-6">
				{state.status !== 200 ? t("Something went wrong") : t("Thank you for your interest!")}
			</h1>
			<p>{message}</p>
		</div>
	);
};

export default ThankYou;
