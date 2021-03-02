import {$authHost, $host} from "./index";

export const retrieveCard = async (id) => {
    const {data} = await $authHost.get('api/cards/' + id)
    return data
}

export const updateCard  = async (id, body) => {
    const {data} = await $authHost.put('/api/cards/' + id, body)
    return data
}
export const partialUpdateCard  = async (id, body) => {
    const {data} = await $authHost.patch('/api/cards/' + id, body)
    return data
}

export const createFields = async (body) => {
    const {data} = await $authHost.post('api/fields', body)
    return data
}

export const updateFields = async (id) => {
    const {data} = await $authHost.put('api/fields/' + id).catch(error => {
        return alert('ошибка');
    });
    return data
}
export const partialUpdateField = async (id, body) => {
    const {data} = await $authHost.patch('api/fields/' + id, body)
    return data
}
export const destroyFields = async (id) => {
    await $authHost.delete('api/fields/' + id)
    return null
}
