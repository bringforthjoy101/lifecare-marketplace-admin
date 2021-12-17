import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all User Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({url:'/services', method:'GET'}, dispatch)
    if (response && response.data.data && response.data.status) {
        await dispatch({
          type: 'GET_ALL_PRODUCTS_DATA',
          data: response.data.data
        })
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

// All Users Filtered Data
export const getFilteredData = (services, params) => {
  return async dispatch => {
    const { category = null, q = '', perPage = 10,  page = 1 } = params

    /* eslint-disable  */
    const queryLowered = q?.toLowerCase()
    const filteredData = services?.filter(
      service => 
        (service?.name?.toLowerCase()?.includes(queryLowered))
      )
  
    /* eslint-enable  */

    dispatch({
      type: 'GET_FILTERED_PRODUCT_DATA',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

//  Get User
export const getService = (serviceId) => {
  return async dispatch => {
    const response = await apiRequest({url:`/services/get-detail/${serviceId}`, method:'GET'}, dispatch)
    if (response && response.data.data && response.data.status) {
        await dispatch({
          type: 'GET_A_PRODUCT',
          selectedService: response.data.data
        })
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

export const deleteService = (serviceId) => {
  return async dispatch => {
    const response = await apiRequest({url:`/services/delete/${serviceId}`, method:'GET'}, dispatch)
    if (response && response.data.status) {
        return response.data
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

