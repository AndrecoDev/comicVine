import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../Config'
import './styles.css'
import Comic from '../Comic/Comic';

const LandingPage = () => {
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(true)
    const [listStyle, setListStyle] = useState("landingPage__comics")

    useEffect(() => {
        const endPoint = `${API_URL}/issues/?api_key=${API_KEY}&filter=issue_number:10&format=json`
        fetchComics(endPoint)
    }, [])

    const fetchComics = async (url) => {
        await fetch(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "max-age=0, must-revalidate, private",
            }
        })
            .then(response => response.json())
            .then(response => {
                setComics(response.results)
                console.log(response.results)
                setLoading(false)
            })
    }
    const handleClickList = (param) => {
        param === 1 ? setListStyle("landingPage__comics") : setListStyle("landingPage__comics2")
    }
    return (
        <>
            <div className="landingPage">
                <div className="landingPage__options">
                    <p>Lastest Issues</p>
                    <ul>
                        <li onClick={() => handleClickList(2)}>List</li>
                        <li onClick={() => handleClickList(1)}>Grid</li>
                    </ul>
                </div><hr />
                <div className={listStyle}>
                    {loading ? "Loading..." :
                        comics.map((comic, index) =>
                            <React.Fragment key={index}>
                                <Comic id={comic.id} image={comic.image.original_url} date={comic.date_added} name={comic.name} issue={comic.issue_number} url={comic.api_detail_url} />
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default LandingPage;