import React from 'react';
import styles from './Result.module.css'

const Result = ({ result }) => {
   
    return(
        <div>
               
    
            <div className={styles.result}>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default Result;