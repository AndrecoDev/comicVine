import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

const Comic = ({ image, date, name, issue, url }) => {
    return (
        <div className="comic">
            <Link to={{ pathname: `/comic`, state: { url: url } }}>
                <div className="comic_image">
                    <img src={image} alt="" />
                </div>
            </Link>
            <div className="comic_details">
                <strong>{name}: #{issue}</strong>
                <div className="text">{date}</div>
            </div>
        </div >
    )
}

export default Comic;