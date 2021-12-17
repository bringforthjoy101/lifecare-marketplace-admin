import { paginateArray, sortCompare, apiRequest, swal } from '@utils'
import moment from 'moment'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all User Data
export const getAllData = (role) => {
  return async dispatch => {
    const response = await apiRequest({ url: '/clients', method: 'GET' }, dispatch)
    if (response && response.data.data && response.data.status) {
      await dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data
      })
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

// All Users Filtered Data
export const getFilteredData = (clients, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, number = '', page = 1, status = null, className = null, level = null, group = null } = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = clients.filter(client => (client.names.toLowerCase().includes(queryLowered) && client.status === (status || client.status)))

    /* eslint-enable  */

    dispatch({
      type: 'GET_FILTERED_CLIENT_DATA',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

// get user details
export const getClientDetails =  (id) => {
  return async dispatch => {
    const response = await apiRequest({ url: `/clients/get-detail/${id}`, method: 'GET' }, dispatch)
    console.log(response)
    if (response && response.data && response.data.status) {
      await dispatch({
        type: 'GET_CLIENT_DETAILS',
        clientDetails: response.data.data
      })
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

// Delete Client
export const deleteClient = (clientId) => {
  return async dispatch => {
    const response = await apiRequest({url:`/clients/delete/${clientId}`, method:'GET'}, dispatch)
    if (response && response.data.status) {
        return response.data
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}


// Filtered Utility Transactions
export const getFilteredClientOrders = (orders, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1 } = params
    /* eslint-enable */

    const queryLowered = q.toLowerCase()
    const filteredData = orders.filter(
      order => (order.orderNumber.toLowerCase().includes(queryLowered) || moment(order.createdAt).format('lll').toLowerCase().includes(queryLowered)))
    /* eslint-enable  */
    await dispatch({
      type: 'GET_CLIENT_ORDERS',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

// Filtered Books
export const getFilteredClientBooks = (books, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1 } = params
    /* eslint-enable */

    const queryLowered = q.toLowerCase()
    const filteredData = books.filter(
      book => (book.name.toLowerCase().includes(queryLowered)))
    /* eslint-enable  */
    await dispatch({
      type: 'GET_CLIENT_ORDERS',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}


// update client status
export const updateClientStatus = (clientId, status) => {
  return async dispatch => {
    const body = JSON.stringify({status})
    const response = await apiRequest({ url: `/clients/update/${clientId}`, method: 'POST', body }, dispatch)
    if (response) {
      console.log(response)
      if (response.data.status) {
        await dispatch(getAllData())
        await dispatch(getClientDetails(clientId))
        swal('Good!', `${response.data.message}.`, 'success')
      } else {
        swal('Oops!', `${response.data.message}.`, 'error')
      }
    } else {
      swal('Oops!', 'Something went wrong with your network.', 'error')
    }

  }
}

// deactivate User account
export const deactivateUser = (users, id) => {
  const user = users.find(i => i.user_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/admin/users/deactivate/${user.user_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_USER',
          selectedUser: { ...user, status: "Inactive" }
        })
        swal('Good!', `${response.data.message}.`, 'success')
        dispatch(getAllData())
      } else {
        swal('Oops!', `${response.data.message}.`, 'error')
      }
    } else {
      swal('Oops!', 'Something went wrong with your network.', 'error')
    }

  }
}

//  Reset User Password
export const passwordReset = ({ user_id }) => {
  return async dispatch => {
    const body = JSON.stringify({ user_id })
    const response = await apiRequest({ url: `/admin/users/reset/`, method: 'POST', body }, dispatch)
    if (response && response.data.success) {
      swal('Good!', `User password reset Sucessfully.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}
