// ** Navigation sections imports
import dashboards from './dashboards'
import shops from './shops'
import vendors from './vendors'
import customers from './customers'
import products from './products.js'
import orders from './orders'
import utilities from './utilities'

// ** Merge & Export
export default [...dashboards, ...customers, ...products, ...shops, ...vendors, ...orders, ...utilities]
