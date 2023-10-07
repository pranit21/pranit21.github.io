import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByCount, selectCount } from './todoSlice';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    console.log(count);

    return (
        <div>
            <button onClick={() => dispatch(increment())}>+1</button>
            {count}
            <button onClick={() => dispatch(incrementByCount(3))}>+3</button>
        </div>
    )
}
