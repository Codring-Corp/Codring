import { request } from './request'

export async function redirect(navigate) {
    const res = await request.get('/auth')
    
    if (res.status !== 200) {
        navigate('/login')
    }
}