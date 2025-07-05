import React,{useState, useEffect} from "react";
import ErrorBoundary from "../../components/ErrorBoundary"; // If we did in same component itselt it won't work
import useDeBounce from "../../components/DeBounceHook";
const CreateFormComponent = () =>{
    const [name,setName] = useState("");

    const myMethod = () =>{
        console.log("my method calling")
    }
    const myDebounce = useDeBounce(myMethod);
    const handleChange = (e) =>{
        setName(e.target.value);
        myDebounce();
        // myDebounce(e.target.value); passing value is optional
    }
    return(
        <div>
            Create component
            <div>
                <label>User Name</label>
                <input value={name} onChange={(e) => {
                    handleChange(e)
                } }/>
            </div>
                            
        </div>
    )
}

const CreateForm = React.memo(CreateFormComponent);
export default CreateForm;
