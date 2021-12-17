// ** React Imports
import moment from 'moment'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Send, CheckCircle, Save, ArrowDownCircle, Info, PieChart } from 'react-feather'

const getItemNames = (items) => {
	const arr = []
	console.log(items)
	items.forEach((item) => {
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
		selector: 'trackingNumber',
		cell: (row) => <span>{`#${row.trackingNumber}`}</span>,
	},
	{
		name: 'Amount',
		selector: 'total',
		sortable: true,
		minWidth: '150px',
		cell: (row) => <span>{(row.total || 0).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>,
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
		name: 'Date',
		selector: 'createdAt',
		sortable: true,
		minWidth: '200px',
		cell: (row) => moment(row.createdAt).format('lll'),
	},
]
