import React from 'react';

const Result = () => {
    const  { result } = props;
    return(
        <div>
               
    
            <div className="result">
                <p>{result}</p>
            </div>
        </div>
    )
}

export default Result;