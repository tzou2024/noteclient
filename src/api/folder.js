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