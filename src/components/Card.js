import React from 'react';

const Card = ({ children, url }) => {
	return (
		<div>
			<div className="card card-compact lg:w-96 bg-base-100 text-shadow text-white font-bold shadow-xl border-2 border-black">
				<figure>
					<img
						src={url}
						alt={url}
					/>
				</figure>
				<div className="card-body">{children}</div>
			</div>
		</div>
	);
};

const Body = ({ title, children }) => {
	return (
		<>
			<h2 className="card-title font-bold text-center">{title}</h2>
			<p className=" italic"> {children} </p>
			{/* <div className="card-actions justify-center">
				<button className="btn bg-modal text-white hover:text-slate-400">Selengkapnya</button>
			</div> */}
		</>
	);
};

Card.Body = Body;

export default Card;
