import { useState } from "react";

function SendMessage({ id, secret }) {
    async function authPost(url, token, data) {
        const response = await fetch(
            url,
            {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            }
        );
        const responseData = await response.json();
        return responseData;
    }
    //Funcion para obtener el token de autenticacion
    function authToken(id, secret) {
        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${secret}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }

    const tokenMessage = authToken(id, secret)
    console.log(tokenMessage);
    const [messageContent, setMessageContent] = useState()
    const messageContentWrite= (event) => {
        const preMessageContent = event.target.value;
        setMessageContent(JSON.stringify({ content: preMessageContent }));
    }
    const urlMessage ="https://web-develop-react-express-chat.herokuapp.com/message/"
    function postMessage() {
        authPost(urlMessage, tokenMessage, messageContent);
    }

    return (
        <>
            <p>Contenido del mensaje:</p>
            <input type="text" onChange={messageContentWrite} />
            <input type="button" value="Send message" onClick={postMessage}/>
        </>
    );
}
export default SendMessage;