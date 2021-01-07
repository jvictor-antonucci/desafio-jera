import React, { useState } from "react";
import apiTMDB from "../services/api-tmdb";
import { Form, InputGroup, Button, FormControl, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const SearchInput = () => {

    const [query, setQuery] = useState("");
    const [search, setSearch] = useState([]);
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    async function handleSearching(e) {
        e.preventDefault();

        await apiTMDB.get(`search/movie/?query=${query}`).then(response => {
            setSearch(response.data.results);
        });
    }

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
            <Form className="my-5" onSubmit={handleSearching}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Digite o nome do filme"
                        aria-label="Nome do filme"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <InputGroup.Append>
                        <Button className="primary" type="submit">Procurar</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {search.map(item => {
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

export default SearchInput;