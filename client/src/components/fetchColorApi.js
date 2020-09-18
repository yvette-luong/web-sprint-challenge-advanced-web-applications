import axiosWithAuth from '../utils/axiosWithAuth'

export const fetchColorApi = () =>{
    return axiosWithAuth()
    .get("/api/colors")
    .then(res => {
        return res
    })
    .catch(err =>{
        return err
    })
}