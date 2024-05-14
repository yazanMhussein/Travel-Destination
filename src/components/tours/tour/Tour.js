import { Link } from 'react-router-dom';
import './Tour.css';

function Tour(props) {

    return (
        <>
            <div key={props.id} className="tour-container">
                <Link to={`/city/${props.id}`} style={{ textDecoration: 'none' }}>
                    <div className='container-card'>
                        <h3 className="tour-name">{props.name}</h3>
                        <img src={props.image} alt={props.name} className="tour-image" />
                    </div>
                    <div className="tour-separator"></div>
                </Link>
            </div>
        </>
    )
}

export default Tour;