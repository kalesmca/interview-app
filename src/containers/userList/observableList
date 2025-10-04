import React,{useState, useEffect} from "react";

const UserList = () =>{
    const [userList, setUserList] =useState([]);
    const [filtereList, setFiltereList] = useState([]);
    const [name, setName] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data) =>{
            console.log(data);
            setUserList(data);
            setFiltereList(data);
        }).catch((err) =>{
            console.log("Error =", err);
        })
    },[])
    const getFilteredList = () =>{
        const list = userList.filter((data) =>{
            return data.name.toLowerCase().includes(name.toLowerCase());
        })
        setFiltereList(list);

    }
    useEffect(()=>{
        if(name){
            const ownTime = setTimeout(()=>{
            getFilteredList();
        },300)
        return ()=>{
            clearTimeout(ownTime);
        }

        }else{
            setFiltereList(userList);
        }
        
    },[name])
    return(
        <div>
            <div><b>Users</b></div>
            <div >
                <input 
                style={{width:"80%", margin:"25px"}} 
                value={name} onChange={(e)=>{setName(e.target.value)}}
                placeholder="Filter by Name"
            />
            </div>
            <ul>
                {
                    filtereList?.length ? filtereList.map((data, index) =>{
                        return(
                            <div key={index} style={{margin:"10px", padding:"5px", float:"left"}}>
                                <div>{data.name}</div>
                                <div>{data.email}</div>
                                <div>{data.phone}</div>
                            </div>
                        )
                    }) : (<div>No data Found</div>)
                }
            </ul>
            
        </div>
    )
}

export default UserList;
