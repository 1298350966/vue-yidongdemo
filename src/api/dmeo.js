import axios from 'axios'

export function duanzi(params) {
        
    return axios.get('https://api.apiopen.top/getJoke', {params})
}
