import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className="App">
            <Container className={styles.Navbar}>
                <Row>
                    <Col>
                        <NavLink className={styles.NavLinks} to="/">Home</NavLink>
                        <NavLink className={styles.NavLinks} to="/blocks">Blocks</NavLink>
                        <NavLink className={styles.NavLinks} to="/transactions">Transactions</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Navigation;