import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import News from '../components/News/News';

const Home = () => {
	return (
		<div>
			<nav>
				<Navbar />
			</nav>
			<section className="hero">
				<Hero
					title="Mapala Teknisi"
					subtitle="Cintai CiptaanNya, Tunduk Pada PenciptaNya">
					"Mapala Teknisi merupakan salah satu Unit Kegiatan Mahasiswa di bawah panji Fakultas Teknik. Mapala Teknisi merupakan wadah bagi mahasiswa Fakultas Teknik Universitas Negeri Makassar untuk berkegiatan di alam bebas, berkontribusi
					bagi masyarakat, serta peduli terhadap pelestarian lingkungan"
				</Hero>
			</section>
			<section>
				<News />
			</section>
			<footer></footer>
		</div>
	);
};

export default Home;
