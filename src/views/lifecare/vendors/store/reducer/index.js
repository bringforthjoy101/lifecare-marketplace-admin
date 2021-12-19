// ** Initial State
const initialState = {
	allData: [],
	data: [],
	total: 1,
	params: {},
	selectedVendor: null,
	vendorDetails: null,
	track: null,
	selectedVendorAllTransactions: [],
	selectedVendorTransactions: [],
	selectedVendorTotalTransactions: 1,
	selectedVendorTransactionParams: {},
	selectedVendorAllOrders: [],
	selectedVendorOrders: [],
	selectedVendorTotalOrders: 1,
	selectedVendorOrderParams: {},
}

const vendors = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_VENDOR_DATA':
			console.log(action.data)
			return { ...state, allData: action.data }
		case 'GET_FILTERED_VENDOR_DATA':
			return {
				...state,
				data: action.data,
				total: action.totalPages,
				params: action.params,
			}
		case 'GET_VENDOR':
			return { ...state, selectedVendor: action.selectedVendor }
		case 'GET_VENDOR_DETAILS':
			return { ...state, vendorDetails: action.vendorDetails }
		case 'GET_VENDOR_ALL_TRANSACTIONS':
			return {
				...state,
				selectedVendorAllTransactions: action.data,
			}
		case 'GET_VENDOR_TRANSACTIONS':
			return {
				...state,
				selectedVendorTransactions: action.data,
				selectedVendorTotalTransactions: action.totalPages,
				selectedVendorTransactionParams: action.params,
			}
		case 'GET_VENDOR_ALL_ORDERS':
			return {
				...state,
				selectedVendorAllOrders: action.data,
			}
		case 'GET_VENDOR_ORDERS':
			return {
				...state,
				selectedVendorOrders: action.data,
				selectedVendorTotalOrders: action.totalPages,
				selectedVendorOrderParams: action.params,
			}
		default:
			return { ...state }
	}
}
export default vendors
