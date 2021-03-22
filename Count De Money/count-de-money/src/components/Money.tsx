import React from 'react';
import Control from './Control';

interface MoneyProps {
    moneyType: string;
    imgString: string;
}

function Money (props: MoneyProps) {
    return (
        <div>
            <div>{props.moneyType}</div>
            <div>
                <img src={props.imgString} alt="money"/>
            </div>
            <Control></Control>
        </div>
    )
}

export default Money;