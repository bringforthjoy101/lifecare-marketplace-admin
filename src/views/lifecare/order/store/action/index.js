import { paginateArray, sortCompare, apiRequest, swal } from '@utils'
import moment from 'moment'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all User Data
export const getAllData = () => {
	return async (dispatch) => {
		const response = await apiRequest({ url: '/orders', method: 'GET' }, dispatch)
		console.log(response)
		if (response && response.data.data && response.data.status) {
			await dispatch({
				type: 'GET_ALL_ORDERS_DATA',
				data: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// All Users Filtered Data
export const getFilteredData = (orders, params) => {
	return async (dispatch) => {
		const { q = '', perPage = 100, page = 1 } = params

		/* eslint-disable  */
		const queryLowered = q?.toLowerCase()
		const filteredData = orders?.filter(
			(order) =>
				order?.trackingNumber?.toLowerCase()?.includes(queryLowered) ||
				order?.user.names?.toLowerCase()?.includes(queryLowered) ||
				moment(order.createdAt).format('lll').includes(q)
		)

		/* eslint-enable  */
		dispatch({
			type: 'GET_FILTERED_ORDER_DATA',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

//  Get User
export const getOrder = (id) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: `/orders/get-detail/${id}`, method: 'GET' }, dispatch)
		if (response && response.data.data && response.data.status) {
			await dispatch({
				type: 'GET_ORDER',
				selectedOrder: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

export const updateOrderStatus = (orderId, statusId) => {
	return async (dispatch) => {
		const body = JSON.stringify({ statusId })
		console.log(body)
		const response = await apiRequest({ url: `/orders/update/${orderId}`, method: 'POST', body }, dispatch)
		if (response) {
			if (response.data.status) {
				swal('Good!', `${response.data.message}.`, 'success')
				dispatch(getOrder(orderId))
			} else {
				swal('Oops!', `${response.data.message}.`, 'error')
			}
		} else {
			console.log(response.error)
			swal('Oops!', 'Somthing went wrong with your network.', 'error')
		}
	}
}
