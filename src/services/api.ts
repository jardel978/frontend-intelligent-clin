import axios from 'axios';

export function setupApiClient() {

    let cookies = '';

    const api = axios.create({
        baseURL: '',
        headers: {
            Authorization: `Bearer ${cookies['intelligent.clin.token']}`
        }
    });
}