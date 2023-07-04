import React from 'react';

const CTA = ({ text, title, name, children }) => {
	return (
		<div>
			{/* You can open the modal using ID.showModal() method */}
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
			</dialog>
		</div>
	);
};

export default CTA;
