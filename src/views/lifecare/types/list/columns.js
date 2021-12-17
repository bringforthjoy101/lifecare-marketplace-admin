// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getPlan } from '../store/action'
import moment from 'moment'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

export const columns = [
	{
		name: 'Type Id',
		minWidth: '160px',
		selector: 'id',
		sortable: true,
		cell: (row) => row.id,
	},
	{
		name: 'Name',
		minWidth: '138px',
		selector: 'name',
		sortable: true,
		cell: (row) => row.name,
	},
	{
		name: 'Title',
		minWidth: '172px',
		selector: 'title',
		sortable: true,
		cell: (row) => row.title,
	},
	{
		name: 'Description',
		minWidth: '172px',
		selector: 'description',
		sortable: true,
		cell: (row) => (row.description.length < 35 ? row.description : `${row.description.substring(0, 35)}...`),
	},
	{
		name: 'Layout',
		minWidth: '172px',
		selector: 'typeSetting',
		sortable: true,
		cell: (row) => row.typeSetting.layoutType,
	},
	{
		name: 'Date',
		minWidth: '200px',
		selector: 'createdAt',
		sortable: true,
		cell: (row) => moment(row.createdAt).format('lll'),
	},
]
