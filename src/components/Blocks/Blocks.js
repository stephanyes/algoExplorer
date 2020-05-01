import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './Blocks.module.css'

function Blocks() {
    const [info, setInfo] = useState([]);
    const [testing, setTesting] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {

            axios.get('https://api.betanet.algoexplorer.io/v1/block/latest/10')
                .then(obtained => {
                    setInfo(obtained.data)
                    setTesting(testing + 1)
                })
                .catch(err => console.log(err))
        }, 3000)
        return () => clearInterval(interval)
    }, [info, testing]);

    return (
        <div>
            <h1 className={styles.Title}>Latest Blocks</h1>
            <div className={styles.Interval}>
                <div className={styles.Circle}>
                    <h3 style={{ textAlign: 'center', paddingTop: "4px" }}>{testing}</h3>
                </div>
            </div>
            <p className={styles.Text}>This component is refreshing <br />every 3 seconds</p>
            <Container>
                <Row >
                    {info.map((item, index) => (
                        <Col md="4" key={index}>
                            <div className={styles.Card}>
                                <h3>Block N#: {index + 1}</h3>
                                <p><b>Round:</b> <Link to={`/block/${item.round}`}> {item.round} </Link></p>
                                {/* <p><b>Hash:</b> {item.hash}</p>
                                <p><b>Reward:</b> {item.reward}</p>
                                <p><b>Seed:</b> {item.seed}</p>
                                <p><b>Timestamp:</b> {item.timestamp}</p> */}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    );

}

export default Blocks;