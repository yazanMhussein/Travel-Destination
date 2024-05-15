import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toursData from '../../data/db.json';
import './TourDetails.css';

function TourDetails() {
    let { id } = useParams();
    const [city, setCity] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const result = toursData.find(item => item.id === id);
        setCity(result);
    }, [id]);


    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <>
            <div className="card">
                {city && (
                    <>
                        <img src={city.image} alt={city.name} className="card-image" />
                        <div className="card-content">
                            <h2>{city.name}</h2>
                            <p>
                                {showFullDescription ? city.info : `${city.info.substring(0, 180)}...`}
                                {!showFullDescription && (
                                    <button onClick={toggleDescription}>See more</button>
                                )}
                            </p>
                            {showFullDescription && (
                                <button onClick={toggleDescription}>See less</button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default TourDetails;
