// ** Navigation sections imports
import dashboards from './dashboards'
// import stores from "./stores"
import clients from './clients'
import products from './products.js'
import orders from './orders'

// ** Merge & Export
export default [...dashboards, ...products, ...clients, ...orders]
