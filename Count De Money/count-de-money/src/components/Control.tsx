import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function Control () {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <span>{count}</span>
            <Button onClick={() => setCount(count + 1)}>
                +1
            </Button>
            <Button onClick={() => setCount(count + 5)}>
                +5
            </Button>
            <Button onClick={() => setCount(count - 1)}>
                -1
            </Button>
            <Button onClick={() => setCount(count - 5)}>
                -5
            </Button>
        </div>
    )
}

export default Control;