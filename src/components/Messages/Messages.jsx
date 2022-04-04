function Messages(id, secret) {
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
    async function getMessages() {
        const obtainMessages = await authGetMessages(token);
        const stringMessage = JSON.stringify(obtainMessages);
        return stringMessage;
    };
    return (
        <>
            <a>{id}":"{getMessages}</a>
        </>
    );
}

export default Messages