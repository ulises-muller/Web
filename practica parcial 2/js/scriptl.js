const URL = 'https://665e417b1e9017dc16ef7651.mockapi.io/products'
const formHTML = document.querySelector("#user-form")
const bodyHTML = document.querySelector("#tbody")

async function renderUsers(){
    try {
        bodyHTML.innerHTML = ''
        const getUsers = await axios.get(URL)
        const users = getUsers.data
        console.log(users);
        users.forEach(user => {
            bodyHTML.innerHTML +=
                                    ` <tr>
                                            <td>${user.nombre}</td>
                                            <td>${user.edad}</td>
                                            <td>${user.ciudad}</td>
                                            <td>
                                            <button onclick="deleteUser('${user.id}')">Borrar</button>
                                      <tr>
                                    
                                     `
        });
    } catch { 
        console.log(error);
    }
}

formHTML.addEventListener("submit", escucho =>{
    escucho.preventDefault()
    const user = escucho.target.elements
    const nuevoUsuario = {
        id: crypto.randomUUID(),
        nombre: user.fullname.value,
        edad: user.edad.value,
        ciudad: user.ciudad.value
    }
    cargarUsuario(nuevoUsuario)
})

async function cargarUsuario(user){
    await axios.post(URL, user)
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error))
    renderUsers()
}
renderUsers()

async function deleteUser(user) {
    await axios.delete(`${URL}/${user}`)
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error))
    renderUsers()
}
