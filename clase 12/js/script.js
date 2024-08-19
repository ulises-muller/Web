const baseURL = 'https://665e417b1e9017dc16ef7651.mockapi.io'
const listaHTML= document.querySelector(".lista-usrs")
console.log(listaHTML);

async function obtenerUsuarios() {
    try {
        const respuesta = await axios.get(`${baseURL}/users`)
        const usuarios = respuesta.data
    } catch (error) {
        alert(error)
    }
}
 