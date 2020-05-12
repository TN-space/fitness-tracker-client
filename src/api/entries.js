import apiUrl from '../apiConfig'
import axios from 'axios'

export const entryCreate = (user, entryObj) => {
  return axios({
    url: apiUrl + '/entries',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      entry: entryObj
    }
  })
}

export const entryIndex = (user) => {
  return axios({
    url: apiUrl + '/entries',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const entryShow = (id, user) => {
  return axios({
    url: apiUrl + '/entries/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const entryUpdate = (id, user, entryObj) => {
  return axios({
    url: apiUrl + '/entries/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      entry: entryObj
    }
  })
}

export const entryDelete = (id, user) => {
  return axios({
    url: apiUrl + '/entries/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
