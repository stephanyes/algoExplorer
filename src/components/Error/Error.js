import React from 'react';
import styles from './Error.module.css'
const Error = () => {
    return (
        <div className={styles.Error}>
            <p>Error: Page does not exist!</p>
        </div>
    );
}

export default Error;