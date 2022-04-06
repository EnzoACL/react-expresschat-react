import { useEffect, useState } from "react";

function Data({ dataSetter }) {
    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userId, setUserId] = useState();
    
    const setUserNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const setPasswordHandler = (event) => {
        setUserPassword(event.target.value);
    }
    
    useEffect(
        () => {
            dataSetter({
                user: userName,
                id: userId,
                password: userPassword,
            })
        },
        [userName, userPassword, userId]
    )

    //Obtener ID con nombre de usuario:
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
      
    async function getData() {
        const users = await get("https://web-develop-react-express-chat.herokuapp.com/users/");
        const usersString = JSON.stringify(users);
        console.log(usersString)
        // Bucle para obtener el ID del usuario usando su nombre
        for (let idx = 0; idx < users.length; idx++) {
            if (userName === users[idx].name) {
                setUserId(users[idx].id)
                
             }
            
        }
    }


    return (
        <>
            <h1>Datos:</h1>
            <p>Usuario:</p>
            <input placeholder="Username" onChange={setUserNameHandler}/>
            <p>{userName}</p>
            <p>Contraseña:</p>
            <input placeholder="Password" onChange={setPasswordHandler} />
            <p>{userPassword}</p>
            <input type="button" value="Set Data" onClick={getData}/>
        </>
    );
}

export default Data;