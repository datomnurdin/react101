import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo(){
    return(
        <div>
            <h1>Mohammad Nurdin</h1>
            <p>The best of me yet to come</p>
            <ul>
                <li>Japan</li>
                <li>United Kingdom</li>
                <li>Thailand</li>
                <li>Indonesia</li>
            </ul>
        </div>
    
    )
}

ReactDOM.render(<MyInfo/>, document.getElementById('root'));