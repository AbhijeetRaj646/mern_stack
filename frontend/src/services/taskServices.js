import axios from "axios";
console.log(process.env);
const apiUrl = process.env.REACT_APP_BACKEND_URL //"http://localhost:3500/api/tasks";
// const apiUrl=axios.get(`${process.env.REACT_APP_BACKEND_URL}`)
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
