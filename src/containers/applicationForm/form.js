import React,{useState, useEffect} from "react";

const CreateFormComponent = () =>{
    const [name,setName] = useState("")
    return(
        <div>
            Create component
            <div>
                <label>User Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
    )
}

const CreateForm = React.memo(CreateFormComponent);
export default CreateForm;
