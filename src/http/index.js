import axios from "axios";

const $host = axios.create({
    baseURL: `https://touchip.ru` || process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: `https://touchip.ru` || process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}