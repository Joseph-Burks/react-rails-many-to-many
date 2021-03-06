import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const PlantCard = ({plant}) => (
	<Card>
		<Image src={plant.image} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{plant.name}</Card.Header>
		</Card.Content>
		<Card.Content extra>
			<Button>
				<Icon name='remove' />
				Remove
			</Button>
		</Card.Content>
	</Card>
);

export default PlantCard