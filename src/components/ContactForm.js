import React from 'react';

const ContactForm = () => {
	return (
		<form
			action=""
			className="lg:w-9/12 w-full px-10 pb-10">
			<div className="form-control py-5">
				<label for="email">Nama</label>
				<input
					type="text"
					placeholder="Nama"
					className="input w-full  text-white"
				/>
			</div>
			<div className="pb-5">
				<label for="email">Email</label>
				<input
					type="email"
					placeholder="Email"
					className="input w-full  text-white"
					id="Email"
				/>
			</div>
			<div className="pb-5">
				<label for="email">Pesan</label>
				<textarea
					className="textarea textarea-bordered w-full"
					placeholder="Pesan"></textarea>
			</div>
			<div className="flex justify-center pb-16">
				<button className="btn btn-wide text-white hover:text-slate-400">Kirim</button>
			</div>
		</form>
	);
};

export default ContactForm;
