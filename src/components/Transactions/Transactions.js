import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Transactions.module.css'

function Transactions() {
    const [transaction, setTransaction] = useState([]);
    const [countdown, setCountdown] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('https://api.betanet.algoexplorer.io/v1/transaction/latest/10')
                .then(obtained => {
                    setTransaction(obtained.data)
                    setCountdown(countdown + 1)
                })
                .catch(err => console.log(err))
        }, 3000)
        return () => clearInterval(interval)
    }, [transaction, countdown]);

    return (
        <div>
            <h1 className={styles.Title}>Latest Transactions</h1>
            <div className={styles.Interval}>
                <div className={styles.Circle}>
                    <h3 style={{ textAlign: 'center', paddingTop: "4px" }}>{countdown}</h3>
                </div>
            </div>
            <p className={styles.Text}>This component is refreshing <br />every 3 seconds</p>
            <Container>
                <Row >
                    {transaction.map((item, index) => (
                        <Col md="4" key={index}>
                            <div className={styles.Card}>
                                <h3>Transaction N#: {index + 1}</h3>
                                <p><b>Index:</b> {item.index}</p>
                                <p><b>Fee:</b> {item.fee}</p>
                                <p><b>Round:</b> {item.round}</p>
                                <p><b>First Round:</b> {item.firstRound}</p>
                                <p><b>Last Round:</b> {item.lastRound}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    );

}

export default Transactions;