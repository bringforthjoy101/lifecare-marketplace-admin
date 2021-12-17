import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { apiRequest } from '../../../../utility/Utils'

// ** Third Party Components
import axios from 'axios'
import { Row, Col, Alert } from 'reactstrap'

// ** Invoice Preview Components
import PreviewCard from './PreviewCard'
import PreviewActions from './PreviewActions'
// import SendInvoiceSidebar from '../shared-sidebar/SidebarSendInvoice'
// import AddPaymentSidebar from '../shared-sidebar/SidebarAddPayment'

import { getOrder } from '../store/action'

// ** Styles
import '@styles/base/pages/app-invoice.scss'

const InvoicePreview = () => {
	// ** Vars
	// const { id } = useParams()
	const store = useSelector((state) => state.orders),
		dispatch = useDispatch(),
		{ id } = useParams()

	// ** States

	// ** Get invoice on mount based on id
	useEffect(async () => {
		dispatch(getOrder(id))
	}, [])

	const { selectedOrder } = store
	console.log(selectedOrder)

	return selectedOrder !== null ? (
		<div className="invoice-preview-wrapper">
			<Row className="invoice-preview">
				<Col xl={9} md={8} sm={12}>
					<PreviewCard data={selectedOrder} />
				</Col>
				<Col xl={3} md={4} sm={12}>
					<PreviewActions id={id} status={selectedOrder.orderStatus} />
				</Col>
			</Row>
			{/* <SendInvoiceSidebar toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} /> */}
			{/* <AddPaymentSidebar toggleSidebar={toggleAddSidebar} open={addPaymentOpen} /> */}
		</div>
	) : (
		<Alert color="danger">
			<h4 className="alert-heading">Order not found</h4>
			<div className="alert-body">
				Order with tracking number: {id} doesn't exist. Check list of all invoices: <Link to="/orders/list">Invoice List</Link>
			</div>
		</Alert>
	)
}

export default InvoicePreview
