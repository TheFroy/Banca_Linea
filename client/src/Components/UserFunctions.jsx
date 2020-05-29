import axios from 'axios'

export const login = user => {
    return axios
    .post('user/login', {
        Usuario: user.Usuario,
        Contraseña: user.Contraseña
    })
    .then((res) => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    }).catch((err) => {
        console.log(err);
    });
}