import React from 'react';
import Card from '../Card';
import ContentLayout from '../Layout/ContentLayout';
import proker1 from '../../assets/proker1.jpg';
import proker2 from '../../assets/proker2.jpg';
import proker3 from '../../assets/proker3.jpg';
import proker4 from '../../assets/proker4.jpg';
import proker5 from '../../assets/proker5.jpg';
import proker6 from '../../assets/proker6.jpg';

const News = () => {
	return (
		<ContentLayout>
			<ContentLayout.Header>
				<h1 className="text-3xl lg:text-5xl font-bold">Dewan Pengurus Harian</h1>
				<h2 className="text-xl lg:text-3xl font-bold py-5">
					Mapala <i>Teknisi</i> FT-UNM
				</h2>
				<h3 className="text-xl lg:text-3xl font-bold">Periode 2022 - 2023</h3>
			</ContentLayout.Header>
			<ContentLayout.Body gap="gap-6">
				<Card url={proker2}>
					<Card.Body title="RAPAT KERJA DEWAN PENGURUS HARIAN MAPALA Teknisi Periode 2022-2023" />
				</Card>
				<Card url={proker3}>
					<Card.Body title="ANGGOTA MUDA DIKSAR XXVII REINCARNATION MAPALA Teknisi FT-UNM" />
				</Card>
				<Card url={proker1}>
					<Card.Body title="PELANTIKAN MAPALA Teknisi FT-UNM PERIODE 2022-2023" />
				</Card>
				{/* <Card url={proker4}>
					<Card.Body title="Pencemaran Mata Air" />
				</Card>
				<Card url={proker5}>
					<Card.Body title="Daerah Gersang Sulawesi" />
				</Card>
				<Card url={proker6}>
					<Card.Body title="Limbah Merusak Pantai" />
				</Card>
				<Card id="166">
					<Card.Body title="Keindahan Alam Yang Tersembunyi" />
				</Card> */}
			</ContentLayout.Body>
		</ContentLayout>
	);
};

export default News;
