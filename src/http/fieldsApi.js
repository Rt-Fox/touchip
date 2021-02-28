import {$authHost, $host} from "./index";


export const createFields = async (type) => {
    const {data} = await $authHost.post('api/fields', type)
    return data
}

export const updateFields = async (id) => {
    const {data} = await $authHost.put('api/fields/' + id)
    return data
}
export const partialUpdateFields = async (id) => {
    const {data} = await $authHost.patch('api/fields/' + id)
    return data
}

export const retrieveCard = async (id) => {
    const {data} = await $authHost.get('api/cards/' + id)
    return data
}

export const updateCard  = async (id) => {
    const {data} = await $authHost.put('api/fields/' + id)
    return data
}
export const partialUpdateCard  = async (id) => {
    const {data} = await $authHost.patch('api/fields/' + id)
    return data
}
