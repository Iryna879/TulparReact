import React, { useState, useEffect, useMemo } from "react";
import Scrollbar from "react-scrollbars-custom";
import {
    Row,
    Col,
    Input,
    Button,
    InputGroup
} from "reactstrap";

import Trie from "./trie.js";
import specialization from "./specialization";
import { Link } from "react-router-dom";
import "../patient/style/searchDoctor.css";
import {Circles} from "react-loader-spinner";

const Search = () => {
    const [doctor, setDoctor] = useState([]);
    const [text, setText] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const memoized_trie = useMemo(() => {
        const trie = new Trie();

        // Insert
        for (let i = 0; i < specialization.length; i++) {
            trie.insert(specialization[i]);
        }

        return trie;
    }, []);

    function onTextChanged(e) {
        let value = e.target.value;
        setText(value);
        fetchDoctor();
        value = value.toLowerCase();
        if (value !== "") setSuggestions(memoized_trie.find(value));
        else setSuggestions([]);
    }

    function suggestionSelected(value) {
        setText(value);
        setSuggestions([]);
    }

    function renderSuggestions() {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <InputGroup>
                <ul className="list-group dropdown-menu pt-0 pb-0">
                    {suggestions.map((item) => (
                        <li
                            className="list-group-item list-group-item-action"
                            onClick={() => suggestionSelected(item)}
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </InputGroup>
        );
    }



    const fetchDoctor = () => {
            fetch("/api/specialists")
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    // console.log(res)
                    setDoctor(res)
                })
                .catch(err =>
                    console.log(err))

        setIsLoading(false)
        };


    const UpdateDisplay = (text) => {
        setDoctor((doctor) => {
            return doctor.filter(
                (doctor) => doctor.specialization.toLowerCase() === text.toLowerCase()
            );
        });
        console.log(doctor);
    };

    useEffect(() => {
        fetchDoctor();
    }, []);

    return (
        <>
        {isLoading && <h1><Circles/></h1>}
        {!isLoading &&
        <div>
            <Row className="mb-3">
                <Col>
                    <InputGroup className="inputGroup">
                        <Input
                            value={text}
                            type="text"
                            placeholder="Хірург"
                            onChange={onTextChanged}
                            className="search"
                        />
                        <div >
                                <Button
                                    className="h-10 d-inline-block buttonSearch"
                                    color="primary"
                                    onClick={() => UpdateDisplay(text)}
                                >
                                    Шукати лікаря
                                </Button>
                        </div>
                    </InputGroup>
                    {renderSuggestions()}
                </Col>
            </Row>
            
            <Scrollbar
                noScrollX
                style={{ position: "absolute", marginTop:"20px", maxHeight: "70%", width: "88%" }}
                className="col-12"
            >
                <div className="row">
                    {doctor.map((doc) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6
                        col-12 mb-5" key={doc._id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-info">
                                        <h6 className="text-uppercase">
                                             {doc.name + " " + doc.surname}
                                        </h6>
                                    </div>
                                    <div className="job">Спеціалізація : {doc.specialization}</div>
                                    <div className="job">{doc.jobTitle}</div>
                                    <div className="row mb-0 mt-2 pb-0">
                                        <div
                                            className=" col-12 justify-content-center inline"
                                            style={{ textAlign: "center" }}
                                        >
                                            <Link to="/profile/selectdate"
                                                  state={{doctor: doc}} >
                                            <button className="btn btn-sm btn-primary">
                                                Записатися</button> </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Scrollbar>
        </div> }
        </>
    );
};

export default Search;
