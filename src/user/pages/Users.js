import React from 'react';
import UserList from './components/UserList';
const Users = (props) => {
    const USERS = [
        {
            id: 'u1',
            name: 'Honorine Igiraneza',
            image: 'https://images.pexels.com/photos/2643815/pexels-photo-2643815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 3
        },
        {
            id: 'u2',
            name: 'Honorine Igiraneza',
            image: 'https://images.pexels.com/photos/2643815/pexels-photo-2643815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 3
        },
        {
            id: 'u3',
            name: 'Honorine Igiraneza',
            image: 'https://images.pexels.com/photos/2643815/pexels-photo-2643815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 3
        },
        {
            id: 'u4',
            name: 'Honorine Igiraneza',
            image: 'https://images.pexels.com/photos/2643815/pexels-photo-2643815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 3
        }
    ]
    return <UserList items={USERS} />
}

export default Users;