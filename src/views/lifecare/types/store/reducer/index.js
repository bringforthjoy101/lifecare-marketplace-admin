// ** Initial State
const initialState = {
	allData: [],
	data: [],
	total: 1,
	params: {},
	selectedType: null,
}

const Type = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_TYPES':
			return { ...state, allData: action.data }
		case 'GET_FILTERED_TYPES':
			return {
				...state,
				data: action.data,
				total: action.totalPages,
				params: action.params,
			}
		case 'GET_TYPE':
			return { ...state, selectedType: action.selectedType }
		default:
			return { ...state }
	}
}
export default Type
