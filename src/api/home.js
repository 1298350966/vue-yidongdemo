import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"

export function swipeList(params) {
    return axios.get('/swipe/list', params)
}
export function swipeUpload(params) {
    return axios.post('/swipe/upload', params)
}
export function swipeAddList(params) {
    return axios.post('/swipe/addList', params)
}
export function swipeDeleteList(params) {
    return axios.post('/swipe/deleteList', params)
}
export function swipeUpdateList(params) {
    return axios.post('/swipe/updateList', params)
}



export function noticeList(params) {
    return axios.get('/notice/list', params)
}
export function noticeUpload(params) {
    return axios.post('/notice/upload', params)
}
export function noticeAddList(params) {
    return axios.post('/notice/addList', params)
}
export function noticeDeleteList(params) {
    return axios.post('/notice/deleteList', params)
}
export function noticeUpdateList(params) {
    return axios.post('/notice/updateList', params)
}



export function gridList(params) {
    return axios.get('/grid/list', params)
}
export function gridUpload(params) {
    return axios.post('/grid/upload', params)
}
export function gridAddList(params) {
    return axios.post('/grid/addList', params)
}
export function gridDeleteList(params) {
    return axios.post('/grid/deleteList', params)
}
export function gridUpdateList(params) {
    return axios.post('/grid/updateList', params)
}



export function grid2List(params) {
    return axios.get('/grid2/list', params)

}
export function grid2Upload(params) {
    return axios.post('/grid2/upload', params)
}
export function grid2AddList(params) {
    return axios.post('/grid2/addList', params)
}
export function grid2DeleteList(params) {
    return axios.post('/grid2/deleteList', params)
}
export function grid2UpdateList(params) {
    return axios.post('/grid2/updateList', params)
}






export function tabList(params) {
    return axios.get('/tab/list', params)
}
export function tabUpload(params) {
    return axios.post('/tab/upload', params)
}
export function tabAddList(params) {
    return axios.post('/tab/addList', params)
}
export function tabDeleteList(params) {
    return axios.post('/tab/deleteList', params)
}
export function tabUpdateList(params) {
    return axios.post('/tab/updateList', params)
}




export function tabTwoList(params) {
    return axios.get('/tabTwo/list', params)
}
export function tabTwoUpload(params) {
    return axios.post('/tabTwo/upload', params)
}
export function tabTwoAddList(params) {
    return axios.post('/tabTwo/addList', params)
}
export function tabTwoDeleteList(params) {
    return axios.post('/tabTwo/deleteList', params)
}
export function tabTwoUpdateList(params) {
    return axios.post('/tabTwo/updateList', params)
}