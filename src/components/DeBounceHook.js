import React,{useRef, useCallback} from "react";

const useDeBounce = (callback) =>{
    const timeRef = useRef(null);
    const useDeb = useCallback((...args)=>{
        console.log(args);
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(()=>{
            callback();
        },500)
    })

    return useDeb;
}
export default useDeBounce;