// ** Initial State
const initialState = {
	allData: [],
	data: [],
	total: 1,
	params: {},
	selectedShop: null,
	shopDetails: null,
	track: null,
	selectedShopAllTransactions: [],
	selectedShopTransactions: [],
	selectedShopTotalTransactions: 1,
	selectedShopTransactionParams: {},
	selectedShopAllOrders: [],
	selectedShopOrders: [],
	selectedShopTotalOrders: 1,
	selectedShopOrderParams: {},
}

const shops = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_SHOP_DATA':
			console.log(action.data)
			return { ...state, allData: action.data }
		case 'GET_FILTERED_SHOP_DATA':
			return {
				...state,
				data: action.data,
				total: action.totalPages,
				params: action.params,
			}
		case 'GET_SHOP':
			return { ...state, selectedShop: action.selectedShop }
		case 'GET_SHOP_DETAILS':
			return { ...state, shopDetails: action.shopDetails }
		case 'GET_SHOP_ALL_TRANSACTIONS':
			return {
				...state,
				selectedShopAllTransactions: action.data,
			}
		case 'GET_SHOP_TRANSACTIONS':
			return {
				...state,
				selectedShopTransactions: action.data,
				selectedShopTotalTransactions: action.totalPages,
				selectedShopTransactionParams: action.params,
			}
		case 'GET_SHOP_ALL_ORDERS':
			return {
				...state,
				selectedShopAllOrders: action.data,
			}
		case 'GET_SHOP_ORDERS':
			return {
				...state,
				selectedShopOrders: action.data,
				selectedShopTotalOrders: action.totalPages,
				selectedShopOrderParams: action.params,
			}
		default:
			return { ...state }
	}
}
export default shops
