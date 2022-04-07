import { useState } from "react";

function Messages({ id, secret }) {
    const [userMessage, setUserMessage] = useState([])
    
    // Funcion asincrona para get con autorizacion
    //Funcion para obtener el token de autenticacion
    function authToken(id, secret) {
        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${secret}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }
    const token = authToken(id, secret)
    async function authGetMessages(token) {
        const response = await fetch(
            "https://web-develop-react-express-chat.herokuapp.com/messages",
            { 
                headers: {
                    Authorization: token
                }
            }
        );
        const data = await response.json();
        return data;
    }
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
   

    async function getMessages() {
        const obtainMessages = await authGetMessages(token);
        //Mensaje final vacio:
        const arrayMessage=[]
        //var finalMessage=""
        //Obtener usuarios
        const users = await get("https://web-develop-react-express-chat.herokuapp.com/users/");        
        for (let item of obtainMessages) {
            for (let things of users) {
                if (item.source === things.id) {
                    console.log(item.source)
                    console.log(things.id)
                    const date = new Date(item.time * 1000)
                    arrayMessage.push([`Nuevo mensaje a las ${date} de ${things.name}: ${item.content}`])
                   // finalMessage += things.name + " ha dicho: " + item.content + " "
                }
            }
        }
        console.log(arrayMessage);
       // const stringToArray = JSON.stringify(arrayMessage);
        setUserMessage(arrayMessage);
    }
    
    //gtsetInterval(getMessages, )

    return (
        <>
            <p>Mensajes:</p>
            <ul>
                {userMessage}
            </ul>
            <input type="button" value="Show new messages" onClick={getMessages} />

        </>
    );
}

export default Messages