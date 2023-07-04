import React from 'react';

const CTA = ({ text, title, name, children }) => {
	return (
		<div>
			{/* You can open the modal using ID.showModal() method
			<button
				className="btn bg-modal mt-5 text-white hover:text-slate-400"
				onClick={() => window.my_modal_3.showModal()}>
				{name}
			</button>
			<dialog
				id="my_modal_3"
				className="modal">
				<form
					method="dialog"
					className="modal-box">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					<h3 className="font-bold text-lg">{title}</h3>
					<p className="py-4">{children}</p>
				</form>
			</dialog> */}
			{/* The button to open modal */}
			<label
				htmlFor="my_modal_6"
				className="btn mt-5 text-white hover:text-slate-400">
				{name}
			</label>

			{/* Put this part before </body> tag */}
			<input
				type="checkbox"
				id="my_modal_6"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">{title}</h3>
					<p className="py-4">{children}</p>
					<div className="modal-action">
						<label
							htmlFor="my_modal_6"
							className="btn">
							Close!
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
