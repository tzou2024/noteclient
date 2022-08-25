import apiUrl from '../apiConfig'
import axios from 'axios'

export const getNotes = (user) => {
	return axios({
		url: apiUrl + '/notes/',
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`
		},
	})
}

export const getNote = (user, NoteId) => {
	return axios({
		url: apiUrl + `/notes/${NoteId}/`,
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`
		},
	})
}