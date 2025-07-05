import React, {useRef, useCallback} from "react";

const useDeBounce = (callback) =>{
    const timerRef = useRef(null);
    const debouncedMethod = useCallback((...args)=>{
        console.log(args);
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            callback();
        },1000 )

    })

    return debouncedMethod;
    
}

export default useDeBounce;