import React from 'react';
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';
function PlaceList(props) {
    if (props.items.length === 0) {
        return (
            <div className='container mt-5'>
                <Card>
                    <h2>No Places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        )
    }
    return (
        <div className="container mt-2">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 justify-content-center d-md-flex row-cols-lg-4 gap-md-4 gap-lg-5">
                {props.items.map(place => (
                    <PlaceItem
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.title}
                        address={place.address}
                        description={place.description}
                        creatorId={place.creator}
                        coordinates={place.location}
                    />
                ))}
            </div>
        </div>
    );
}

export default PlaceList;