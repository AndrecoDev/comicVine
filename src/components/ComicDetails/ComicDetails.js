import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { API_URLC, API_KEY } from '../../Config'
import './styles.css'

const ComicDetails = () => {

    const data = useLocation().state.url
    const [comicDetail, setComicDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const endPoint = `${API_URLC}${data}?api_key=${API_KEY}&format=json`
        fetchComics(endPoint)
    }, [data])

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
                setComicDetail([response.results])
                setLoading(false)
            })
    }
    return (
        <>
            {loading ? "Loading..." :
                comicDetail.map((detail, index) =>
                    <div className="comicDetail" key={index}>
                        <div className="comicDetail__image">
                            <img src={detail.image.original_url} alt="" />
                        </div>

                        <div className="comicDetail__Characters" >
                            <h2>Characters</h2>
                            {detail.character_credits.map((character, id) =>
                                <ul key={id}>
                                    <li>{character.name}</li>
                                </ul>
                            )}
                        </div>
                        <div className="comicDetail__teams" >
                            <h2>Teams</h2>
                            {detail.team_credits.map((team, id) =>
                                <ul key={id}>
                                    <li>{team.name}</li>
                                </ul>
                            )}
                        </div>
                        <div className="comicDetail__locations" >
                            <h2>Locations</h2>
                            {detail.location_credits.map((location, id) =>
                                <ul key={id}>
                                    <li>{location.name}</li>
                                </ul>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ComicDetails;