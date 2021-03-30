const TOKEN_KEY = 'user';
const users = [{
    "email": "test@test.com",
    "name": "testUser",
    "psw": "1234",
    "type": "admin",
}, {
    "email": "test1@test.com",
    "name": "testUser1",
    "psw": "1234",
    "type": "regular",
}]
var loginUser = {};
export const login = (email, password) => {
    var valid = false;
    localStorage.removeItem(TOKEN_KEY);
    loginUser = {};

    var prueba = { "cliente": JSON.stringify(cliente) };
    await fetch("https://envios-api-service.herokuapp.com/api/clientes", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prueba)
    }).then(data => {
        console.log(cliente);
    });
    users.forEach((user) => {
        if (user.email === email && user.psw === password) {
            valid = true;
            loginUser = user;
        }
    })
    if (valid) {
        localStorage.setItem(TOKEN_KEY, loginUser.name);
        localStorage.setItem("type", loginUser.type);
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}