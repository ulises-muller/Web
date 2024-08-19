
const baseURL = 'https://665e417b1e9017dc16ef7651.mockapi.io'


const user = {
    fullname: "Usuario Test",
    email: 'test@gmail.com',
    bornDate: 2123412,
    phone: '11-1234-1234'
}
const userUpdate ={
    fullname: "Usuario Modificado",
    email: 'test@Modificado.com',
    bornDate: 2123412,
    phone: '11-1234-1234'
}

//? Get

axios.get(`${baseURL}/users`)
    .then(respuesta => console.log(respuesta.data))
    .catch(error =>{alert(error)})

//?   Post

axios.post(`${baseURL}/users`, user)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

//? Delete

axios.delete(`${baseURL}/users/1`)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

//? Put

axios.put(`${baseURL}/users/11`, userUpdate)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

//!Fetch
//* Post
// fetch(baseURL+ "/users", {
//     method:"POST",
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
// })
//     .then(body => body.json())
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//* Get
// fetch(baseURL+ "/users", {method:"GET"})
//     .then(body => body.json())
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => console.log(error))