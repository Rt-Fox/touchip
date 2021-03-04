import {$authHost, $host} from "./index";

export const login = async (username, password) => {
    const {data} = await $host.post('api/accounts/token', {username, password})
    $host.defaults.headers.Authorization = `Bearer ${data.access}`
    localStorage.setItem('token', JSON.stringify(data))
    return data.token
}

export const refresh = async () => {
    const {data} = await $authHost.post('api/accounts/token/refresh', {refresh: JSON.parse(localStorage.getItem(`token`))?.refresh})
    $host.defaults.headers.Authorization = `Bearer ${data.access}`
    return data.token
}

export const getId = async () => {
    const {data} = await $authHost.get('api/accounts/page-path')
    return data.page_path
}
