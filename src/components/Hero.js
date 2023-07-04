import React from 'react';
import CTA from './CTA/CTA';
import logo from '../assets/logo.png';
import Title from './Title';

const Hero = ({ title, subtitle, children }) => {
	return (
		<div className="min-h-screen flex justify-center items-center flex-col">
			<img
				src={logo}
				alt="Logo"
				className="my-3"
			/>
			<Title
				title={title}
				subtitle={subtitle}
				mt="mt-5"
			/>
			<CTA
				title="Mapala Teknisi"
				name="Selengkapnya">
				{children}
			</CTA>
		</div>
	);
};

export default Hero;
