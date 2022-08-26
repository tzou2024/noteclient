import apiUrl from '../apiConfig'
import axios from 'axios'

export const getFolders = (user) => {
	return axios({
		url: apiUrl + '/folders/',
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`
		},
	})
}

export const getFolder = (user, folderId) => {
	return axios({
		url: apiUrl + `/folders/${folderId}/`,
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`
		},
	})
}

export const createFolder = (user, name, desc) => {
	return axios({
		url: apiUrl + '/folders/',
		method: 'POST',
		headers: {
			Authorization: `Token ${user.token}`
		},
		data: {
			folder: {
				name: name || "",
				description: desc || ""
			}	
		}
	})
} 

export const editFolder = (user, folderId, name, desc) => {
	console.log("name: ", name, "description: ", desc)
	return axios({
		url: apiUrl + `/folders/${folderId}/`,
		method: 'PATCH',
		headers: {
			Authorization: `Token ${user.token}`
		},
		data: {
			folder: {
				name: name,
				description: desc
			}	
		}
	})
} 