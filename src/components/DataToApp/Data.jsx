import { useEffect, useState } from "react";

function Data({ dataSetter }) {
    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userId, setUserId] = useState();
    const [logged, setLogged] = useState(false);
    const [registrered, setRegistrered] = useState(false);
    
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
                registercheck: registrered,
                loggedcheck: logged,
            })
            
        },
        [userName, userPassword, userId, registrered, logged]
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
                setLogged(true)
                
                
             }
            
        }
        
    }
    function showRegistrer() {
        setRegistrered(true)
    }

    return (
        <>
            <div className='crt'>
            <div className="logpag">
                <h1>Entrar al chat</h1>
                <p>Usuario</p>
                <input placeholder="Username" onChange={setUserNameHandler}/>
                <p>Contraseña</p>
                <input type="password" placeholder="Password" onChange={setPasswordHandler} />
                <input type="button" value="Entrar" onClick={getData} />
                <p>No tienes una cuenta?</p>
                <input type="button" value="Registrarse" onClick={showRegistrer}/>
                </div>
            </div>
        </>
    );
}

export default Data;