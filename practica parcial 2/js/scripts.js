const URL = 'https://665e417b1e9017dc16ef7651.mockapi.io/products'
const tbodyHTML = document.querySelector("#tbody")
const formHTML = document.querySelector("#user-form")
let isEditing

async function renderUsers(){
    try{
        tbodyHTML.innerHTML = ''
        const getUsers = await axios.get(URL)
        const users = getUsers.data
        users.forEach(user => {
            tbodyHTML.innerHTML += `
                                    <tr>
                                        <td>${user.nombre}</td>
                                        <td>${user.edad}</td>
                                        <td>${user.ciudad}</td>
                                        <td>
                                            <button type="button" onclick=deleteUser(${user.id})>Borrar</button>
                                            <button type="button" onclick=modificarUser(${user.id})>Modificar</button>
                                        </td>       
                                    `
        });
    } catch
    {
        console.log(error);
    }
}

formHTML.addEventListener("submit", escucha =>{
    escucha.preventDefault() //! IMPORTANTE
    const user = escucha.target.elements //! IMPORTANTE
    const nuevoUser = {
        nombre: user.fullname.value,
        edad: user.edad.value,
        ciudad: user.ciudad.value,
    }
    if (isEditing) {
        cargarUsuarioMod(nuevoUser)
        isEditing = undefined
    } else {
    cargarUsuario(nuevoUser)
    isEditing = undefined
}
})

async function cargarUsuario(user){
    try {
        await axios.post(URL, user)
        renderUsers()
    } catch (error) {
        console.log(error);
    }
}
async function cargarUsuarioMod(user){
    try {
        await axios.put(`${URL}/${isEditing}`, user)
        renderUsers()
    } catch (error) {
        console.log(error);
    }
}
async function deleteUser(id){
    try {
        await axios.delete(`${URL}/${id}`)
        renderUsers()
    } catch (error) {
        console.log(error);
    }
}
async function modificarUser(getId){
    try {
        isEditing = getId
        const usersGet = await axios.get(`${URL}/${getId}`)
        const userEdit = usersGet.data
        const el = formHTML.elements
        el.fullname.value = userEdit.nombre
        el.edad.value = userEdit.edad
        el.ciudad.value = userEdit.ciudad
    } catch (error) {
        console.log(error);
    }
}
renderUsers()