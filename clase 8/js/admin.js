const usersStart = [{
    fullname: 'John Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'La Luna',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
  },
  {
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
    role: 'CLIENT_ROLE'
  },
  {
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325'
  },
  {
    fullname: 'Michael Smith',
    age: 40,
    email: 'michael.smith@example.com',
    id: '4',
    active: false,
    password: 'password101',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'San Luis',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280'
  },
  {
    fullname: 'Emily Johnson',
    age: 28,
    email: 'emily.johnson@example.com',
    id: '5',
    active: true,
    password: 'password202',
    bornDate: new Date('1995-02-15').getTime(),
    location: 'Córdoba',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325'
  },
  {
    fullname: 'Daniel Lee',
    age: 34,
    email: 'daniel.lee@example.com',
    id: '6',
    active: false,
    password: 'password303',
    bornDate: new Date('1989-07-07').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325'
  },
];
let isEditing
let userButtonEdit
const tableHTMl = document.getElementById("table-container")

// obtengo el body de la tabla

var tableboydyHtml = document.getElementById("table-body")

const  userFormHTML = document.querySelector('#user-form')
//const btnSubmitHTML = userFormHTML.querySelector('button[type="summit"')


function renderUsers(arrayUser){
    tableboydyHtml.innerHTML = ''
    arrayUser.forEach((user) => {
        tableboydyHtml.innerHTML += `<tr>
                                        <td class="user-image">
                                            <img src="${user.image}" alt="${user.fullname} avatar"></td>
                                        <td class="user-name">
                                            ${user.fullname} </td>
                                        <td class = "user-mail">
                                            ${user.email} </td>
                                        <td class="user-location">
                                            ${user.location} </td>
                                        <td class = "user-actions">
                                            <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button class="btn btn-primary btn-sm" data-edit="${user.id}">
                                                <i class="fa-solid fa-pencil"></i>
                                            </button>
                                        </td>
                                    </tr>
            `
    })
    updateEditButtons()
}
userFormHTML.addEventListener("submit", evento => {
    evento.preventDefault() //!para que lo retenga
    const el = evento.target.elements
    if (el["password-repeat"].value !== el.password.value){
        Swal.fire("error", "Las contraseñas no coinciden","warning")
        return
    };
    const nuevoUsurio = {
        id: isEditing ? isEditing : crypto.randomUUID(),
        fullname:el.fullname.value,
        email: el.email.value,
        password: el.password.value,
        location: el.location.value,
        image: el.image.value,
        bornDate: new Date(el.bornDate.value).getTime(),
        active: el.active.checked
    }
    if (isEditing) {
        const userIndex = usersStart.findIndex(user => {
            return user.id === isEditing;
        })
        usersStart[userIndex] = nuevoUsurio
    } else {
        usersStart.push(nuevoUsurio)
    }
    renderUsers(usersStart)
    isEditing = undefined
    userFormHTML.reset()
    el.fullname.focus()
})
function updateEditButtons(){
    userButtonEdit = document.querySelectorAll('button[data-edit]')
    userButtonEdit.forEach((boton) => {
        boton.addEventListener('click', (evento) =>{
            const id = evento.currentTarget.dataset.edit

            completeUserForm(id)
        })
    })
}
function completeUserForm(idUser){
    isEditing = idUser;
    const user = usersStart.find(usurio =>{
        if (usurio.id == idUser) {
            return true
        }
    })
    const el = userFormHTML.elements
    el.fullname.value = user.fullname
    el.email.value = user.email
    el.password.value = user.password
    el["password-repeat"].value = user.password
    el.location.value = user.location
    el.image.value = user.image
    el.active.value = user.active
    el.id.value = user.id
    el.bornDate.value = user.bornDate
}

renderUsers(usersStart)
function deleteUser(idUser){
    const indice = usersStart.findIndex((usr)=>{
        if (usr.id === idUser) {
            return true    
        }
    })
    if (indice === -1) {
        SwalFire({title:"error al borrar", text:"no se puedo econtrar el usuario", icon:"error"})
    }
    usersStart.splice(indice, 1)
    renderUsers(usersStart)
}


function inputSearch(a){
    console.log(a.target.value);
    //tengo que tomar los datos del usuario escrito en el input
    const search = a.target.value.toLowerCase()
    //recorrer el array y ver si coincide alguno con el filtro
    const finterUsers = usersStart.filter((usuarios) => {
        if(usuarios.fullname.toLowerCase().includes(search)){
            return true
        }
        return false
    })
    //pinto la tabla con resuktadis en la busqueda
    renderUsers(finterUsers)
}
function sortDesc(){
const collator = new Intl.Collator(undefined, {sensitivity: 'base'})
    usersStart.sort((a, b)=>{
     //metodo 1
//         if(a.fullname.toLowerCase()< b.fullname.toLowerCase()){
//             return 1
//         }
//         if (a.fullname.toLowerCase()> b.fullname.toLowerCase()){
//             return -1
//         }
//         return 0
        return collator.compare(b.fullname, a.fullname)
})
    renderUsers(usersStart)
}

function sortAsc(){
    const collator = new Intl.Collator(undefined, {sensitivity : 'base'})
    usersStart.sort((a, b)=>{
        return collator.compare(a.fullname, b.fullname)

    })
    renderUsers(usersStart)
}