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
    users.forEach((user) => {
        if (user.email === email && user.psw === password) {
            valid = true;
            loginUser = user;
        }
    })
    if (valid) {
        localStorage.setItem(TOKEN_KEY, loginUser.name);
    }
}

export const getUser = () => {
    return loginUser;
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