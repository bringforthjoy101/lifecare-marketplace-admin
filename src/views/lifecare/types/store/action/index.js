import { paginateArray, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
	return async (dispatch) => {
		const response = await apiRequest({ url: '/types', method: 'GET' }, dispatch)
		if (response) {
			if (response.data.data && response.data.status) {
				await dispatch({
					type: 'GET_ALL_TYPES',
					data: response.data.data,
				})
			} else {
				console.log(response.error)
			}
		} else {
			swal('Oops!', 'Somthing went wrong with your network.', 'error')
		}
	}
}

// ** Get filtered data on page or row change
export const getFilteredData = (types, params) => {
	return async (dispatch) => {
		const { q = '', perPage = 10, page = 1 } = params

		/* eslint-disable  */
		const queryLowered = q.toLowerCase()
		const filteredData = types.filter(
			(type) =>
				type.name.toLowerCase().includes(queryLowered) ||
				type.title.toLowerCase().includes(queryLowered) ||
				type.description.toLowerCase().includes(queryLowered)
		)
		/* eslint-enable  */

		dispatch({
			type: 'GET_FILTERED_TYPES',
			data: paginateArray(filteredData, perPage, page),
			totalPages: filteredData.length,
			params,
		})
	}
}

export const getPlan = (types, id) => {
	return async (dispatch) => {
		const type = types.find((i) => i.id === id)
		dispatch({
			type: 'GET_TYPE',
			selectedPlan: type,
		})
	}
}
