import React from 'react';
import PlantCard from './PlantCard'
import { Card, Segment, Header } from 'semantic-ui-react';

const Bed = ({ bed }) => (
	<Segment>
		<Header>{bed.name}</Header>
		<h4>Space: {bed.space_remaining}</h4>
		<Card.Group>
			{bed.plants.map(plant => {
				return <PlantCard key={plant.id} plant={plant} />;
			})}
		</Card.Group>
	</Segment>
);

export default Bed;
