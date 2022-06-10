import React from 'react';
import PlaceList from '../components/PlaceList';

function UserPlaces(props) {
    console.log("address: " + props.address);
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrappers in the World!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location: {
                alt: 40.788778,
                lng: -73.984874
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrappers in the World!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location: {
                alt: 40.788778,
                lng: -73.984874
            },

            creator: 'u3'
        },
        {
            id: 'p3',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrappers in the World!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location: {
                alt: 40.788778,
                lng: -73.984874
            },
            creator: 'u1'
        },
        {
            id: 'p4',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrappers in the World!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location: {
                alt: 40.788778,
                lng: -73.984874
            },

            creator: 'u2'
        },
        {
            id: 'p5',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrappers in the World!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location: {
                alt: 40.788778,
                lng: -73.984874
            },
            creator: 'u1'
        },
        {
            id: 'p6',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrappers in the World!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001, United States',
            location: {
                alt: 40.788778,
                lng: -73.984874
            },

            creator: 'u2'
        },
    ]
    return (
        <PlaceList items={DUMMY_PLACES} />
    );
}

export default UserPlaces;