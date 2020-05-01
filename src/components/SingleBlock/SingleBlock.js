import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SingleBlock.module.css'

function Singleblock(props) {
    const [block, setBlock] = useState([]);
    const [clockdown, setClockdown] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {

            axios.get(`https://api.betanet.algoexplorer.io/v1/block/${props.match.params.id}`)
                .then(obtained => {
                    setBlock(obtained.data)
                    setClockdown(clockdown + 1)
                })
                .catch(err => console.log(err))
        }, 3000)
        return () => clearInterval(interval)
    }, [block, clockdown, props]);
    return (
        <div>
            <h1 className={styles.Title}>Block Round: {props.match.params.id}</h1>
            <div className={styles.Interval}>
                <div className={styles.Circle}>
                    <h3 style={{ textAlign: 'center', paddingTop: "4px" }}>{clockdown}</h3>
                </div>
            </div>
            <p className={styles.Text}>This component is refreshing <br />every 3 seconds</p>
            <Container>
                <Row >
                    {block.round ?
                        (<Col md="12" key={block.round}>
                            <div className={styles.Card}>
                                <p><b>Round:</b>{block.round}</p>
                                <p><b>Hash:</b> {block.hash}</p>
                                <p><b>Reward:</b> {block.reward}</p>
                                <p><b>Seed:</b> {block.seed}</p>
                                <p><b>Timestamp:</b> {block.timestamp}</p>
                            </div>
                        </Col>) : null}
                </Row>
            </Container>
        </div >
    );

}

export default Singleblock;


