import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
class Home extends Component {

    render() {
        return (
            <div>
                <div className={styles.Container}>
                    <div>
                        <h1>Algoexplorer App</h1>
                    </div>
                </div>
                <div className={styles.Container}>
                    <div>
                        <Link className={styles.Buttons} to="/blocks">Latest Blocks</Link>
                        <Link className={styles.Buttons} to="/transactions">Latest Transactions</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;