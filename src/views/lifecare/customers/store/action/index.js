import { paginateArray, sortCompare, apiRequest, swal } from '@utils'
import moment from 'moment'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all Customer Data
export const getAllData = (role) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: '/users', method: 'GET' }, dispatch)
		if (response && response.data.data && response.data.status) {
			await dispatch({
				type: 'GET_ALL_DATA',
				data: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// All Customers Filtered Data
export const getFilteredData = (users, params) => {
	return async (dispatch) => {
		const { q = '', perPage = 10, number = '', page = 1, status = null, className = null, level = null, group = null } = params

		/* eslint-disable  */
		const queryLowered = q.toLowerCase()
		const filteredData = users.filter(
			(user) =>
				(user.names.toLowerCase().includes(queryLowered) ||
					user.email.toLowerCase().includes(queryLowered) ||
					user.phone?.toString().toLowerCase().includes(queryLowered)) &&
				user.status === (status || user.status)
		)

		/* eslint-enable  */

		dispatch({
			type: 'GET_FILTERED_CUSTOMER_DATA',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

// get user details
export const getCustomerDetails = (id) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: `/users/get-detail/${id}`, method: 'GET' }, dispatch)
		console.log(response)
		if (response && response.data && response.data.status) {
			await dispatch({
				type: 'GET_CUSTOMER_DETAILS',
				customerDetails: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// Add Funds
export const creditOrDebitCustomerWallet = ({ customerId, narration, amount, type }) => {
	return async (dispatch) => {
		const body = JSON.stringify({ customerId, narration, amount, type })
		const response = await apiRequest({ url: `/users/wallet`, method: 'POST', body }, dispatch)
		console.log({ response })
		if (response && response.data.status) {
			swal('Good!', `Funds of ${amount} was successfully ${type === 'credit' ? 'added' : 'deducted'}!.`, 'success')
		} else {
			console.log(response)
			swal('Oops!', 'Somthing went wrong with your network.', 'error')
		}
	}
}

// Delete Customer
export const deleteCustomer = (customerId) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: `/users/delete/${customerId}`, method: 'GET' }, dispatch)
		if (response && response.data.status) {
			return response.data
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// ALl Transactions
export const getCustomerAllTransactions = (user_id) => {
	return async (dispatch) => {
		const body = JSON.stringify({ user_id })
		const response = await apiRequest({ url: '/admin/users/transactions/all', method: 'POST', body }, dispatch)
		if (response && response.data.data && response.data.success) {
			await dispatch({
				type: 'GET_CUSTOMER_ALL_TRANSACTIONS',
				data: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Somthing went wrong with your network.', 'error')
		}
	}
}

// Filtered Transactions
export const getFilteredCustomerTransactions = (userTransactions, params) => {
	return async (dispatch) => {
		const { q = '', perPage = 10, page = 1 } = params
		/* eslint-enable */

		const queryLowered = q?.toLowerCase()
		const filteredData = userTransactions?.filter(
			(transaction) =>
				transaction?.transactionId?.toLowerCase()?.includes(queryLowered) ||
				moment(transaction.createdAt).format('lll')?.toLowerCase()?.includes(queryLowered)
		)
		/* eslint-enable  */
		await dispatch({
			type: 'GET_CUSTOMER_TRANSACTIONS',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

// Filtered Utility Transactions
export const getFilteredCustomerOrders = (orders, params) => {
	return async (dispatch) => {
		const { q = '', perPage = 10, page = 1 } = params
		/* eslint-enable */

		const queryLowered = q.toLowerCase()
		const filteredData = orders.filter(
			(order) =>
				order.trackingNumber.toLowerCase().includes(queryLowered) || moment(order.createdAt).format('lll').toLowerCase().includes(queryLowered)
		)
		/* eslint-enable  */
		await dispatch({
			type: 'GET_CUSTOMER_ORDERS',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

// update customer status
export const updateCustomerStatus = (customerId, status) => {
	return async (dispatch) => {
		const body = JSON.stringify({ status })
		const response = await apiRequest({ url: `/users/update/${customerId}`, method: 'POST', body }, dispatch)
		if (response) {
			console.log(response)
			if (response.data.status) {
				await dispatch(getAllData())
				await dispatch(getCustomerDetails(customerId))
				swal('Good!', `${response.data.message}.`, 'success')
			} else {
				swal('Oops!', `${response.data.message}.`, 'error')
			}
		} else {
			swal('Oops!', 'Something went wrong with your network.', 'error')
		}
	}
}
