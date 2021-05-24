import React from 'react'
import Bed from './Bed'
import NewPlantForm from './NewPlantForm'
import { Container } from 'semantic-ui-react';

export default class MainContainer extends React.Component{

    state = {
        beds: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/beds')
        .then(res => res.json())
        .then(beds => this.setState({beds}))
    }

    addNewPlant = plant => {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                planted: {
                    name: plant.name,
                    image: plant.image,
                    bed_id: plant.bed_id
                }
            })
        }
        fetch('http://localhost:3000/planteds', options)
        .then(res => res.json())
        .then(bed => {
            let beds = this.state.beds.map(oldBed => {
                if(oldBed.id === bed.id){
                    return bed
                } else {
                    return oldBed
                }
            })
            this.setState({beds})
        })
    }

    render(){
        return(
            <Container>
                <h1>My Garden</h1>
                {this.state.beds.map(bed => {
                    return(<Bed key={bed.id} bed={bed} />)
                })}
                <NewPlantForm beds={this.state.beds} addNewPlant={this.addNewPlant} />
            </Container>
        )
    }
}