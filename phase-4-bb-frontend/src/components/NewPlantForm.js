import React from 'react';
import { Button, Form, Segment, Header } from 'semantic-ui-react';

export default class NewPlantForm extends React.Component {
	state = {
		name: '',
        image: '',
		bed_id: null,
	};

	handleChange = e => {
		
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addNewPlant(this.state);
	};

	render() {
		return (
			<Segment>
				<Header>Add New Plant</Header>
				<Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Plant Name</label>
						<input name='name' placeholder='Plant Name' />
					</Form.Field>
					<Form.Field>
						<label>Plant Image</label>
						<input name='image' placeholder='Plant Image' />
					</Form.Field>
					<Form.Field>
						<select name='bed_id'>
							{this.props.beds.map(bed => {
								return <option value={bed.id}>{bed.name}</option>
							})}
						</select>
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>
			</Segment>
		);
	}
}
