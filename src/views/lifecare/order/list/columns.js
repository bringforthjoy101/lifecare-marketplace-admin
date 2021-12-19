// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import moment from 'moment'

// ** Third Party Components

// ** Renders Client Columns
const renderClient = (row) => {
	const stateNum = Math.floor(Math.random() * 6),
		states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
		color = states[stateNum]

	if (row.avatars) {
		return <Avatar className="mr-1" img={row.avatar} width="32" height="32" />
	} else {
		return <Avatar color={color || 'primary'} className="mr-1" content={row.names || 'Client Name'} initials />
	}
}

const getItemNames = (items) => {
	const arr = []
	items.forEach((item) => {
		arr.push(item.name)
	})
	const string = arr.join(', ')
	if (string.length < 35) return string
	return `${string.substring(0, 35)}...`
}

export const columns = [
	{
		name: 'Order Id',
		minWidth: '50px',
		selector: 'trackingNumber',
		sortable: true,
		cell: (row) => (
			<Link to={`/order/preview/${row.trackingNumber}`}>
				<span>#{row.trackingNumber}</span>
			</Link>
		),
	},
	{
		name: 'Order Amount',
		minWidth: '150px',
		selector: 'total',
		sortable: true,
		cell: (row) => <span className="text-capitalize">{row?.total?.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>,
	},
	{
		name: 'Customer',
		minWidth: '250px',
		selector: 'user',
		sortable: true,
		cell: (row) => (
			<div className="d-flex justify-content-left align-items-center">
				{renderClient(row.user)}
				<div className="d-flex flex-column">
					<Link to={`/customers/view/${row.userId}`} className="user-name text-truncate mb-0">
						<span className="font-weight-bold">{row.user.names.length < 35 ? row.user.names : `${row.user.names.substring(0, 35)}...`}</span>
					</Link>
				</div>
			</div>
		),
	},
	{
		name: 'Delivery Schedule',
		minWidth: '150px',
		selector: 'deliverySchedule.name',
		sortable: true,
		cell: (row) => <span className="text-capitalize">{row.deliverySchedule.description}</span>,
	},
	{
		name: 'Payment Method',
		minWidth: '50px',
		selector: 'paymentMethod',
		sortable: true,
		cell: (row) => <span className="text-capitalize">{row.paymentMethod}</span>,
	},
	{
		name: 'Order Status',
		minWidth: '100px',
		selector: 'orderStatus.name',
		sortable: true,
		cell: (row) => <span className="text-capitalize">{row.orderStatus.name}</span>,
	},
	{
		name: 'Order Date',
		minWidth: '150px',
		selector: 'createdAt',
		sortable: true,
		cell: (row) => moment(row.createdAt).format('lll'),
	},
]
