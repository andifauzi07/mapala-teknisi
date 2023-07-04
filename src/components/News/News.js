import React from 'react';
import Card from '../Card';
import ContentLayout from '../Layout/ContentLayout';

const News = () => {
	return (
		<ContentLayout>
			<ContentLayout.Header>
				<h1 className="text-3xl lg:text-5xl font-bold">Berita Terkini</h1>
			</ContentLayout.Header>
			<ContentLayout.Body gap="gap-6">
				<Card id="34">
					<Card.Body title="Penumpukan Sampah">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
				<Card id="62">
					<Card.Body title="Pembakaran hutan">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
				<Card id="16">
					<Card.Body title="Reklamasi pantai">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
				<Card id="15">
					<Card.Body title="Pencemaran Mata Air">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
				<Card id="46">
					<Card.Body title="Daerah Gersang Sulawesi">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
				<Card id="47">
					<Card.Body title="Limbah Merusak Pantai">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
				<Card id="166">
					<Card.Body title="Keindahan Alam Yang Tersembunyi">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi reprehenderit ullam! Vitae, voluptatum eaque. At blanditiis beatae autem quibusdam dolore unde facilis. Atque, odit perspiciatis! Illo eum ipsa tempore!
					</Card.Body>
				</Card>
			</ContentLayout.Body>
		</ContentLayout>
	);
};

export default News;
