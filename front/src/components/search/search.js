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

const Search = () => {
    const [text, setText] = useState();
    const [suggestions, setSuggestions] = useState([]);

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

    const [doctor, setDoctor] = useState([]);

    const fetchDoctor = () => {
            fetch("/api/specialists")
                .then(res => {
                    // console.log(res);
                    return res.json()
                })
                .then(res => {
                    // console.log(res)
                    setDoctor(res)
                })
                .catch(err =>
                    console.log(err))
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
                        <div className="col-6 mb-5" key={doc._id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-info">
                                        <h6 className="text-uppercase">
                                             {doc.name + " " + doc.surname}
                                        </h6>
                                    </div>
                                    <div className="job">Спеціалізація : {doc.specialization}</div>
                                    <div className="job">{doc.jobTitle}</div>
                                    <div className="row mb-0 pb-0">
                                        <div
                                            className=" col align-self-end col-md-2 offset-md-3 inline"
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
        </div>
    );
};

export default Search;
