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

const tableHTMl = document.getElementById("table-container")

// obtengo el body de la tabla

var tableboydyHtml = document.getElementById("table-body")
function renderUsers(arrayUser){
    tableboydyHtml.innerHTML = ''
    arrayUser.forEach((user) => {
        tableboydyHtml.innerHTML += `<tr>
                                        <td class="user-image">
                                            <img src="${user.image}" alt="${user.fullname} avatar">
                                        </td>
                                        <td class="user-name">
                                            ${user.fullname}
                                        </td>
                                        <td class = "user-mail">
                                            ${user.email}
                                        </td>
                                        <td class="user-location">
                                         ${user.location}
                                        </td>
                                        <td class = "user-actions">
                                            <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                            <button class="btn btn-primary btn-sm" onclick="deleteUser()">
                                                <i class="fa-solid fa-pencil"></i>
                                            </button>
                                        </td>
                                    </tr>
            `
    })
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