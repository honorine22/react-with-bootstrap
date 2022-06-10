import React from 'react';
import UserItem from './UserItem';
import Card from '../../../shared/components/UIElements/Card';
function UserList(props) {
    if (props.items.length === 0) {
        return (
            <div className='container mt-5'>
                <Card>
                    <h2>No users found</h2>
                </Card>
            </div>
        )
    }
    return (
        <div className='container mt-2'>
            <div className="d-flex align-content-center justify-content-center d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-md-4 gap-lg-5">
                {props.items.map(user => (
                    <UserItem key={user.id} image={user.image} id={user.id} name={user.name} placeCount={user.placeCount} />
                ))}
            </div>
        </div>
    );
}

export default UserList;