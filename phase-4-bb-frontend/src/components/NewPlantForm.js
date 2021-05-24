import React from 'react';
import { Button, Dropdown, Form, Segment, Header } from 'semantic-ui-react';

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

	bedOptions = () => {
		let beds = [];
		if (this.props.beds.length > 0) {
			this.props.beds.forEach(bed => {
				let bedObj = {
					key: bed.name,
					text: bed.name,
					value: bed.id,
				};
				beds.push(bedObj);
			});
		}
		return beds;
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
						<label>Bed</label>
						<Dropdown
							placeholder='Select Bed'
							name='bed'
							fluid
							selection
							options={this.bedOptions()}
						/>
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>
			</Segment>
		);
	}
}
