// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import moment from 'moment'


// ** Third Party Components

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.names || 'Client Name'} initials />
  }
}

const getItemNames = items => {
  const arr = []
  items.forEach(item => {
    arr.push(item.name)
  })
  const string = arr.join(', ')
  if (string.length < 35) return string
  return `${string.substring(0, 35)}...`
}

export const columns = [
  {
    name: 'Order Id',
    width: '150px',
    selector: 'orderNumber',
    sortable: true,
    cell: row => (
      <Link
      to={`/order/preview/${row.id}`}
      >
        <span>#{row.orderNumber}</span>
      </Link>
    )
  },
  {
    name: 'Order Amount',
    width: '150px',
    selector: 'amount',
    sortable: true,
    cell: row => <span className="text-capitalize">{row?.amount?.toLocaleString('en-US', {style: 'currency', currency: 'NGN'})}</span>
  },
  // {
  //   name: 'Products ',
  //   minWidth: '150px',
  //   selector: 'products',
  //   sortable: true,
  //   cell: row => <span className="text-capitalize">{getItemNames(row.products)}</span>
  // },
  {
    name: 'Client',
    minWidth: '200px',
    selector: 'client',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row.client)}
        <div className='d-flex flex-column'>
          <Link
            to={`/client/view/${row.client.id}`}
            className='user-name text-truncate mb-0'
          >
            <span className='font-weight-bold'>{row.client.names}</span>
          </Link>
        </div>
      </div>
    )
  },
  {
    name: 'Order Date',
    minWidth: '150px',
    selector: 'createdAt',
    sortable: true,
    cell: row => moment(row.createdAt).format('lll')
  },
  {
    name: 'Initiated By',
    minWidth: '200px',
    selector: 'admin',
    sortable: true,
    cell: row => <span className='font-weight-bold'>{row.user.firstName} {row.user.lastName}</span>
  }
]
