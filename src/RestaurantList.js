import React from 'react';
const axios = require('axios');

export default class RestaurantList extends React.Component {
    state = {
        Restaurants: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/Restaurants')
            .then(res => {
                const Restaurants = res.data;
                this.setState({Restaurants});
            })
    }

    render() {
        return(
            <ol>
                { this.state.Restaurants.map(restaurant => <li>{restaurant.Name}</li>) }
            </ol>
        );
    }
}