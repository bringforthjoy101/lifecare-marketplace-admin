// ** Initial State
const initialState = {
	allData: [],
	data: [],
	total: 1,
	params: {},
	selectedCategory: null,
}

const Category = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_CATEGORIES':
			return { ...state, allData: action.data }
		case 'GET_FILTERED_CATEGORIES':
			return {
				...state,
				data: action.data,
				total: action.totalPages,
				params: action.params,
			}
		case 'GET_CATEGORY':
			return { ...state, selectedCategory: action.selectedCategory }
		default:
			return { ...state }
	}
}
export default Category
