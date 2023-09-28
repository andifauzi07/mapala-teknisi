import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import Card from '../Card';
import ContentLayout from '../Layout/ContentLayout';

const News = () => {
	const [urlPicture, setUrlPicture] = useState([]);

	useEffect(() => {
		const getApi = async () => {
			const token = process.env.REACT_APP_ACCES_TOKEN;
			const data = await api(token);
			setUrlPicture(data);
		};
		getApi();
	}, []);

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
				{urlPicture.map((data) => (
					<Card
						url={data.media_url}
						key={data.id}>
						<Card.Body title={data.caption}></Card.Body>
					</Card>
				))}
			</ContentLayout.Body>
		</ContentLayout>
	);
};

export default News;
