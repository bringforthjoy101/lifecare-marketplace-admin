// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedClient: null,
  clientDetails: null,
  track: null,
  selectedClientAllTransactions: [],
  selectedClientTransactions: [],
  selectedClientTotalTransactions: 1,
  selectedClientTransactionParams: {},
  selectedClientAllOrders: [],
  selectedClientOrders: [],
  selectedClientTotalOrders: 1,
  selectedClientOrderParams: {}
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_KITCHEN_STAFF_DATA':
      console.log(action.data)
      return { ...state, allData: action.data }
    case 'GET_FILTERED_KITCHEN_STAFF_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_KITCHEN_STAFF':
      return { ...state, selectedClient: action.selectedClient }
    case 'GET_KITCHEN_STAFF_DETAILS':
      return { ...state, clientDetails: action.clientDetails }
    case 'GET_KITCHEN_STAFF_ALL_TRANSACTIONS':
      return { 
        ...state, 
        selectedClientAllTransactions: action.data
      }
    case 'GET_KITCHEN_STAFF_TRANSACTIONS':
      return {
        ...state,
        selectedClientTransactions: action.data,
        selectedClientTotalTransactions: action.totalPages,
        selectedClientTransactionParams: action.params
      }
    case 'GET_KITCHEN_STAFF_ALL_ORDERS':
      return { 
        ...state, 
        selectedClientAllOrders: action.data
      }
    case 'GET_KITCHEN_STAFF_ORDERS':
      return {
        ...state,
        selectedClientOrders: action.data,
        selectedClientTotalOrders: action.totalPages,
        selectedClientOrderParams: action.params
      }
    default:
      return { ...state }
  }
}
export default users
