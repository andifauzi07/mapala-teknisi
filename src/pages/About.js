import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title';
import ContentLayout from '../components/Layout/ContentLayout';
import struktur from '../assets/struktur-organisasi.jpg';
import Footer from '../components/Footer';

const About = () => {
	return (
		<div className="about ">
			<nav>
				<Navbar />
			</nav>
			<section className="about_hero bg-cover bg-no-repeat bg-center">
				<div className="min-h-screen flex justify-center items-center flex-col">
					<Title
						title="Tentang Kami"
						subtitle="Mapala Teknisi Fakultas Teknik Universitas Negeri Makassar"
						mt="my-10"
					/>
				</div>
			</section>
			<section>
				<ContentLayout>
					<ContentLayout.Body>
						<div className="lg:w-full text-center px-5">
							<h1 className="text-3xl py-5 font-bold">Visi</h1>
							<p className="text-center font-bold">Seabagai wahana intelektual untuk membentuk anggota yang berwawasan lingkungan sebagai manifestasi dari potensi kepecintaalaman dan disiplin ilmu kemahasiswaannya</p>
						</div>
						<div className="lg:w-full text-center px-5">
							<h1 className="text-3xl py-5 font-bold">Misi</h1>
							<p className="text-center font-bold pb-4">Membina dan mengembangkan ilmu keorganisasian dan kepecintaalaman</p>
						</div>
					</ContentLayout.Body>
				</ContentLayout>
				<ContentLayout>
					<ContentLayout.Header>
						<h1 className="text-3xl lg:text-5xl font-bold">Sejarah Singkat</h1>
					</ContentLayout.Header>
					<ContentLayout.Body>
						<p className="text-justify px-4 pb-4">
							Suatu waktu pertengahan tahun 1995. Kala itu Fakultas Pendidikan Teknologi dan Kejuruan yang disingkat FPTK masih dibawah naungan Institut Keguruan dan Ilmu Pendidikan atau IKIP adalah suatu fakultas yang juga memiliki lembaga
							ekstrakurikuler kemahasiswaan. Lembaga Kemahasiswaan antara lain ditingkat jurusan atau disebut dengan Himpunan mahasiswa jurusan terdiri dari 6 jurusan antara lain Elektro, Elektronika, Mesin, Otomotif, bangunan dan PKK atau
							(Pendidikan Kesejahtraan Keluarga). Ditingkat fakultas, terdapat lembaga kemahasiswaan yang dikenal dengan nama Senat Mahasiswa (SEMA) yang didalamnya terdapat utusan mewakili berbagai jurusan yang ada di Fakultas Teknik. Di
							dalam Lembaga Senat tersebut terdiri dari berbagai bidang atara lain penalaran, bakat dan minat serta kesejahteraan Mahasiswa. Ketiga bidang ini masing-masing mempunyai program yang sesuai dengan bidang masing-masing.
							Kehidupan berlembaga di kalangan Mahasiswa teknik saat itu sangat antusiatif beberapa mahasiswa teknik di pertengahan tahun 1995 dan 1998an tercatat sebagai ketua lembaga mahasiswa di tingkat Institut (sekarang: Universitas).
							Di tingkat Lembaga Institut terdapat pula Unit-unit lembaga kemahasiswaan atau yang sering disebut dengan UKM yang bergerak sesuai dengan bidang lembaga masing-masing. Terdapatlah UKM Pramuka, UKM Profesi, UKM Olah Raga, UKM
							Sintalaras, dan lain-lain. Selain lembaga intra kampus terdapat pula lembaga ekstra kampus diiantaranya HMI, PM11 dan lain-lain. Di Fakultas Teknik sendiri saat itu terdapat Kelompok Belajar Muslim (KBM). Saat itu, dinamika
							lembaga kemahasiswaan di Fakultas Teknik sedang “gerah” dengan kegiatan yang selalu digelar di dalam kampus. Beberapa mahasiswa yang mempunyai keinginan untuk bebas dan selalu berkeinginan untuk mengembangkan diri akhirnya
							memilih untuk masuk di organisasi kepecintaalaman di tingkat Institut sebagian lagi kemudian berinisiatif untuk keluar kampus (baca : naik Gunung) dengan tujuan untuk rekreasi menikmati alam bebas. Hingga suatu waktu akhirnya
							mahasiswa mahasiswa yang sering “gaul” itu berkumpul dan sepakat untuk membentuk lembaga kemahasiswaan yang bergerak di bidang kepecintaalaman. Ditetapkanlah waktu pertemuan untuk membicarakan hal tersebut. Akhir tahun 1995
							beberapa mahasiswa yang terdiri dari berbagai jurusan berkumpul atas undangan yang beredar dari mulut ke mulut di Gedung Teknologi lantai I saat itu bertempat HMJ Bangunan dan Mesin. Pertemuan itu difasilitasi oleh oleh
							Irwansyah mahasiswa Mesin Angkatan 92, Muliadi, mahasiswa Bangunan Angkatan 92 dan Herman Suardi mahasiswa mesin 92. Dalam diskusi itu kemudian disepakati untuk membentuk lembaga mahasiswa kepecintaalaman di tingkat fakultas
							untuk menampung bakat dan minat mahasiswa di bidang kepecintaalaman, dalam diskusi itu pula akhirnya disepakati nama Teknisi Cinta Alam (TCA) Fakultas Teknik yang sebelumnya sempat diperdebatkan kata Teknisi itu karena adanya
							jurusan PKK yang merupakan jurusan dengan orientasi non-teknik tetapi pada akhirnya peserta rapat kemudian sepakat untuk tetap memakai Teknisi Cinta Alam sebagai nama organisasi tersebut. Tindak lanjut dari pembicaraan itu
							dibentuklah panitia untuk medeklarasikan TCA di salah satu kawasan hutan di Maros tepatnya di Biseang Labboro. Perjalanan penelusuran ini berawal untuk melihat kawasan hutan yang di kenal dengan panorama yang indah. Dari hasil
							pembicaraan tersebut maka panitia inilah yang kemudian akan mengurus segala keperluan perjalanan dan saat itu terbentuklah panitia yang beranggotakan beberapa orang yang hadir di pertemuan itu. Ketua Panitia saat itu
							ditetapkan Asmar`A Mahasiswa jurusan Teknik Elektronika angkatan 95, Sekretaris Sapril, jurusan Elektro angkatan 95 dan bendahara adalah Titin Ratna Astuti mahasiswa 95 jurusan Elektronika dan beberapa orang dari berbagai
							fakultas. Disebarlah beberapa pengumuman di sudut-sudut kampus antara lain Teknolsatu di DH (sekarang FBS) dan Lab-lab Teknik serta PKK. Perjalanan penelusuran Hutan itu dilaksanakan pada tanggal 9 Oktober 1995 kemudian
							diabadikan sebagai hari lahirnya MAPALA Teknisi Fakultas Teknik UNM.
						</p>
					</ContentLayout.Body>
				</ContentLayout>
				<ContentLayout>
					<ContentLayout.Header>
						<h1 className="text-3xl lg:text-5xl font-bold">Struktur Organisasi</h1>
					</ContentLayout.Header>
					<ContentLayout.Body>
						<img
							src={struktur}
							alt="Struktur Orgnaisasi"
							className="border-2 border-black rounded-b-3xl"
						/>
					</ContentLayout.Body>
				</ContentLayout>
			</section>
			<Footer />
		</div>
	);
};

export default About;
