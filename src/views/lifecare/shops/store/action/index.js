import { paginateArray, sortCompare, apiRequest, swal } from '@utils'
import moment from 'moment'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all Shop Data
export const getAllData = (role) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: '/shops', method: 'GET' }, dispatch)
		if (response && response.data.data && response.data.status) {
			await dispatch({
				type: 'GET_ALL_SHOP_DATA',
				data: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// All Shops Filtered Data
export const getFilteredData = (users, params) => {
	return async (dispatch) => {
		const { q = '', perPage = 10, number = '', page = 1, status = null, className = null, level = null, group = null } = params

		/* eslint-disable  */
		const queryLowered = q.toLowerCase()
		const filteredData = users.filter(
			(user) =>
				(user?.name?.toLowerCase().includes(queryLowered) ||
					user?.address?.toLowerCase().includes(queryLowered) ||
					user?.location?.toLowerCase().includes(queryLowered) ||
					user?.phone?.toString().toLowerCase().includes(queryLowered)) &&
				user.status === (status || user.status)
		)

		/* eslint-enable  */

		dispatch({
			type: 'GET_FILTERED_SHOP_DATA',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

// get user details
export const getShopDetails = (id) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: `/shops/get-detail/${id}`, method: 'GET' }, dispatch)
		console.log(response)
		if (response && response.data && response.data.status) {
			await dispatch({
				type: 'GET_SHOP_DETAILS',
				shopDetails: response.data.data,
			})
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// Add Funds
export const creditOrDebitShopWallet = ({ shopId, narration, amount, type }) => {
	return async (dispatch) => {
		const body = JSON.stringify({ shopId, narration, amount, type })
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

// Delete Shop
export const deleteShop = (shopId) => {
	return async (dispatch) => {
		const response = await apiRequest({ url: `/shops/delete/${shopId}`, method: 'GET' }, dispatch)
		if (response && response.data.status) {
			return response.data
		} else {
			console.log(response)
			swal('Oops!', 'Something went wrong.', 'error')
		}
	}
}

// Filtered Transactions
export const getFilteredShopTransactions = (userTransactions, params) => {
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
			type: 'GET_SHOP_TRANSACTIONS',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

// Filtered Utility Transactions
export const getFilteredShopOrders = (orders, params) => {
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
			type: 'GET_SHOP_ORDERS',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

// update shop status
export const updateShopStatus = (shopId, status) => {
	return async (dispatch) => {
		const body = JSON.stringify({ status })
		const response = await apiRequest({ url: `/users/update/${shopId}`, method: 'POST', body }, dispatch)
		if (response) {
			console.log(response)
			if (response.data.status) {
				await dispatch(getAllData())
				await dispatch(getShopDetails(shopId))
				swal('Good!', `${response.data.message}.`, 'success')
			} else {
				swal('Oops!', `${response.data.message}.`, 'error')
			}
		} else {
			swal('Oops!', 'Something went wrong with your network.', 'error')
		}
	}
}
