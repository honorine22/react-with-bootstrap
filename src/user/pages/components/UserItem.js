import React from 'react';
import Card from '../../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';
import Avatar from '../../../shared/components/UIElements/Avatar';
function UserItem(props) {
    return (
        <div className="col">
            <Card>
                <div className='d-flex'>
                    <Avatar src={props.image}
                        alt="Billybobjoe" width="100px" height="100px" className="img-fluid rounded-circle" />
                    <Link to={`/${props.id}/places`} className="text-black">
                        <div className="card-body d-flex flex-column align-self-end">
                            <p className="card-text">{props.name}</p>
                            <p className="card-text">{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</p>
                        </div>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default UserItem;