import React from 'react';

const Card = ({ children, id }) => {
	return (
		<div>
			<div className="card card-compact lg:w-96 bg-base-100 text-shadow text-white font-bold shadow-xl pt-10 border-2 border-black">
				<figure>
					<img
						src={`https://picsum.photos/id/${id}/320/200`}
						alt="News"
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
			<h2 className="card-title font-bold">{title}</h2>
			<p className=" italic"> {children} </p>
			{/* <div className="card-actions justify-center">
				<button className="btn bg-modal text-white hover:text-slate-400">Selengkapnya</button>
			</div> */}
		</>
	);
};

Card.Body = Body;

export default Card;
