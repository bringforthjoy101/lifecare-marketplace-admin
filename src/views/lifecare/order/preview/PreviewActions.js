// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { apiRequest } from '../../../../utility/Utils'

// ** Third Party Components
import { Card, CardBody, Button } from 'reactstrap'
import { UpdateStatus } from './UpdateStatus'

const PreviewActions = ({ id, status }) => {
	return (
		<Card className="invoice-action-wrapper">
			<CardBody>
				{/* <Button.Ripple color="primary" block outline className="mb-75" onClick={() => setSendSidebarOpen(true)}>
					Update Status
				</Button.Ripple> */}
				<UpdateStatus status={status} />
				<Button.Ripple color="secondary" tag={Link} to={`/order/print/${id}`} block outline className="mb-75">
					Print
				</Button.Ripple>
				<Button.Ripple color="secondary" block outline className="mb-75">
					Assign Order
				</Button.Ripple>
				{/* <Button.Ripple tag={Link} to={`/apps/invoice/edit/${id}`} color="secondary" block outline className="mb-75">
					Edit
				</Button.Ripple>
				<Button.Ripple color="success" block onClick={() => setAddPaymentOpen(true)}>
					Add Payment
				</Button.Ripple> */}
			</CardBody>
		</Card>
	)
}

export default PreviewActions
