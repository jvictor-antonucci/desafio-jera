import React, { useEffect, useState } from "react";
import apiTMDB from "../services/api-tmdb";
import { Row, Col, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const PopularMovies = () => {
    
    const [movies, setMovies] = useState([]);
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    
    useEffect(() => { apiTMDB.get("discover/movie?sort_by=popularity.desc").then( response => {
            setMovies(response.data.results);
        });
        console.log("oi");
    }, []);

    function handleWatch(e) {
        e.preventDefault();

        if(isAuthenticated) {
            //marcar como 'para assistir'
        } else {
            loginWithRedirect({
                prompt: 'login'
            });
        }
    }
    
    return (
        <>
            <h1 className="text-center my-5">
                Veja os filmes mais populares do momento
            </h1>
            {movies.map(item => {
                return (
                    <Row className="mb-5">
                        <Col sm={3}>
                            <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                        </Col>
                        <Col sm={6} className="align-self-center">
                            <h1>{item.original_title}</h1>
                            <h6>{item.release_date}</h6>
                            <p>{item.overview}</p>
                        </Col>
                        <Col sm={3} className="align-self-center">
                            <Button className="primary" onClick={handleWatch}>Assistir</Button>
                        </Col>
                    </Row>
                );
            })}
        </>
    );
}

export default PopularMovies;