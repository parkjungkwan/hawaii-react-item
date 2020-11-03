import React, { useCallback } from 'react'
import { Item } from '../../templates'
import { useDispatch, useSelector } from "react-redux";
import { Counter } from '../../components/Counter'
import { increase, decrease } from '../../modules/counter.action'
import { useEffect } from 'react';

export default function CounterContainer(){

    const number = useSelector(state => (state.counterReducer.number))
    
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (<Item>
                <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </Item>)
}
