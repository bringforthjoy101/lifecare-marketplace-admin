// ** React Imports
import moment from 'moment'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import {
  Send,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'

const getItemNames = items => {
  const arr = []
  console.log(items)
  items.forEach(item => {
    arr.push(item.name)
  })
  const string = arr.join(', ')
  if (string.length < 35) return string
  return `${string.substring(0, 35)}...`
}

// ** Table columns
export const columns = [
  {
    name: 'Order ID',
    minWidth: '180px',
    selector: 'orderNumber',
    cell: row => <span>{ `#${row.orderNumber}` }</span>
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    minWidth: '150px',
    cell: row => <span>{(row.amount || 0).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>
  },
  // {
  //   name: 'Products ',
  //   minWidth: '150px',
  //   selector: 'products',
  //   sortable: true,
  //   cell: row => <span className="text-capitalize">{getItemNames(row.products)}</span>
  // },
  {
    name: 'Date',
    selector: 'createdAt',
    sortable: true,
    minWidth: '200px',
    cell: row => moment(row.createdAt).format('lll')
  },
  {
    name: 'Initiated By',
    minWidth: '200px',
    selector: 'admin',
    sortable: true,
    cell: row => <span className='font-weight-bold'>{row.user.firstName}</span>
  }
]
