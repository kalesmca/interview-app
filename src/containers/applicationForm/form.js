import React,{useState, useEffect} from "react";
import ErrorBoundary from "../../components/ErrorBoundary"; // If we did in same component itselt it won't work

const CreateFormComponent = () =>{
    const [name,setName] = useState("")
    return(
        <div>
            Create component
            <div>
                <label>User Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <ErrorBoundary> 
                <div>
                    {name.value.length}

            </div>

            </ErrorBoundary>
            
        </div>
    )
}

const CreateForm = React.memo(CreateFormComponent);
export default CreateForm;
