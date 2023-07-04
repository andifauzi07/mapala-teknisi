import React from 'react';

const Title = ({ title, subtitle, mt }) => {
	return (
		<div className="text-white text-shadow pt-10">
			<h1 className="text-center text-3xl lg:text-5xl font-bold">{title}</h1>
			<p className={`italic text-xl text-center ${mt} px-10 lg:text-xl font-semibold`}>{subtitle}</p>
		</div>
	);
};

export default Title;
