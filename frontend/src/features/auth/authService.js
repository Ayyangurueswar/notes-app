const register = async (userData) => {
    const req = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const res = await req.json();
    if(res){
        localStorage.setItem('user', JSON.stringify(res));
    }
    return res;
}

const login = async (userData) => {
    const req = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const res = await req.json();
    if(res){
        localStorage.setItem('user', JSON.stringify(res));
    }
    return res;
}

const authService = {
    register, login
}

export default authService;