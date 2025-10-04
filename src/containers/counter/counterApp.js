import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
const CounterApp = () =>{
    const appState = useSelector((state)=> state);
    //   const count = useSelector((state) => state.counter.value);
// console.log("cou=",count)
    console.log(appState);
    return(
        <div>Counter</div>
    )
}

export default CounterApp;