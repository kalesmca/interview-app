import React,{useState, useEffect} from "react";

const Profile = () =>{
    const [userList, setUserList] = useState([]);
    console.log("profile")
    const fetchUser = async() =>{
        try{
            const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!userRes.ok){
                throw new Error("failed")
            }else{
                const list = await userRes.json();
                console.log(list);
            }


        }
        catch(err){
            console.log("error=", err);
        }finally{
            console.log("always calling");
        }
        

    }
    useEffect(()=>{
        fetchUser();
    },[])
    return(
        <div>
            Profile 
        </div>
    )
}

export default Profile;