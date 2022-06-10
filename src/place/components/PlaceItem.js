import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

function PlaceItem({ image, title, address, description, id }) {
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => {
        console.log("Modal Opening");
        setShowMap(true);
    }

    const closeMapHandler = () => {
        setShowMap(false);
    }
    return (
        <>
            <Modal showMap={showMap} closeMapHandler={closeMapHandler} content={address} />
            <div className="col">
                <Card>
                    <Avatar src={image} width="100%"
                        height="250px" alt={title} className="img-fluid" />
                    <div className="card-body border-top border-1 border-dange">
                        <p className="card-title">{title}</p>
                        <p className="card-title">{address}</p>
                        <p className="card-text">{description}</p>
                        <div className='flex-lg-wrap'>
                            <Link to={`/places/${id}`} className="btn d-flex float-end btn-primary">edit</Link>
                            <Link to={'/'} className="btn btn-danger">delete</Link>
                        </div>
                        <div className='d-flex align-content-center justify-content-center'>
                            <button type="button" onClick={openMapHandler} className="btn mt-1 w-100 btn-secondary">
                                View on map
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default PlaceItem;