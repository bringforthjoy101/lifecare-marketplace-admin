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
    case 'GET_ALL_DATA':
      console.log(action.data)
      return { ...state, allData: action.data }
    case 'GET_FILTERED_CLIENT_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_CLIENT':
      return { ...state, selectedClient: action.selectedClient }
    case 'GET_CLIENT_DETAILS':
      return { ...state, clientDetails: action.clientDetails }
    case 'GET_CLIENT_ALL_TRANSACTIONS':
      return { 
        ...state, 
        selectedClientAllTransactions: action.data
      }
    case 'GET_CLIENT_TRANSACTIONS':
      return {
        ...state,
        selectedClientTransactions: action.data,
        selectedClientTotalTransactions: action.totalPages,
        selectedClientTransactionParams: action.params
      }
    case 'GET_CLIENT_ALL_ORDERS':
      return { 
        ...state, 
        selectedClientAllOrders: action.data
      }
    case 'GET_CLIENT_ORDERS':
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
