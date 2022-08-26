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

export const createNote = (user, title, body, folder) => {
	return axios({
		url: apiUrl + '/notes/',
		method: 'POST',
		headers: {
			Authorization: `Token ${user.token}`
		},
		data: {
			note: {
				title: title,
				body: body,
				folder: folder
			}	
		}
	})
} 

export const editNoteTitle = (user,noteId, title) => {
	return axios({
		url: apiUrl + `/notes/${noteId}/`,
		method: 'PATCH',
		headers: {
			Authorization: `Token ${user.token}`
		},
		data: {
			note: {
				title: title
			}	
		}
	})
}

export const editNoteBody = (user,noteId, body) => {
	return axios({
		url: apiUrl + `/notes/${noteId}/`,
		method: 'PATCH',
		headers: {
			Authorization: `Token ${user.token}`
		},
		data: {
			note: {
				body: body
			}	
		}
	})
}

export const deleteNote = (user, noteId) => {
	return axios({
		url: apiUrl + `/notes/${noteId}/`,
		method: 'DELETE',
		headers: {
			Authorization: `Token ${user.token}`
		}
	})
}
