import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title';
import Alamat from '../components/Alamat';
import ContentLayout from '../components/Layout/ContentLayout';
import ContactForm from '../components/ContactForm';

const Kontak = () => {
	return (
		<div className="kontak">
			<Navbar />
			<section className="flex justify-center items-center min-h-screen kontak_hero bg-cover bg-no-repeat bg-center">
				<Title
					title="Alamat"
					subtitle={<Alamat />}
				/>
			</section>
			<section>
				<ContentLayout>
					<ContentLayout.Header>
						<h1 className="text-3xl lg:text-5xl font-bold">Hubungi Kami</h1>
					</ContentLayout.Header>

					<div className="flex justify-center">
						<ContactForm />
					</div>
				</ContentLayout>
				<ContentLayout>
					<ContentLayout.Header>
						<h1 className="text-3xl lg:text-5xl font-bold">Sosial Media</h1>
					</ContentLayout.Header>
					<ContentLayout.Body>
						<div>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</ContentLayout.Body>
				</ContentLayout>
			</section>
		</div>
	);
};

export default Kontak;
