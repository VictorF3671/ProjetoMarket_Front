import axios from '@/plugins/axios'; 


export interface IUsuarios{
    id?: number,
    name: string,
    email: string,
    phonenumber: string,
    group: number
}

export const getAllUsers = async () => {
    const response = await axios.get('/Users')
    return response.data;
}

export const getUserById = async (id: number) => {
    const response = await axios.get(`/User/${id}`)
    return response.data;
}

export const createUser = async (user: IUsuarios) =>{
    const response = await axios.post('/User', user)
    return response.data;
}

// export const updateUser = async (user: IUsuarios) => {
//     const response = await axios.put('/User', user)
//     return response.data;
// }
