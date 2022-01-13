export function redirect(navigate) {
    const URL = process.env.REACT_APP_BACKEND_URL
    const accessToken = localStorage.getItem('accessToken')
    
    fetch(`${URL}/auth`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.code !== 200) {
            navigate('/login')
        }
    })
}