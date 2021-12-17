import { useState, useEffect } from 'react'
import { isUserLoggedIn } from '@utils'
import { Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { getAllData, updateOrderStatus } from '../store/action'
import { store } from '@store/storeConfig/store'
import { apiRequest } from '../../../../utility/Utils'

export const UpdateStatus = ({ status }) => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const [orderStatus, setOrderStatus] = useState(status.id)
	const [formModal, setFormModal] = useState(false)

	const [statuses, setStatuses] = useState(null)
	useEffect(async () => {
		const response = await apiRequest({ url: '/orders/status', method: 'GET' })
		setStatuses(response.data.data)
	}, [])

	const onSubmit = async (event, errors) => {
		event?.preventDefault()
		if (errors && !errors.length) {
			// console.log(id, orderStatus)
			await dispatch(updateOrderStatus(id, orderStatus))
			dispatch(getAllData())
			setFormModal(!formModal)
		}
	}
	// console.log(status, orderStatus)
	return (
		<div>
			<Button.Ripple className="text-center mb-1" color="primary" outline block onClick={() => setFormModal(!formModal)}>
				Update Order Status
			</Button.Ripple>
			<Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className="modal-dialog-centered">
				<ModalHeader toggle={() => setFormModal(!formModal)}>Change Status</ModalHeader>
				<AvForm onSubmit={onSubmit}>
					<ModalBody>
						<FormGroup>
							<Label for="status">Order Status</Label>
							<AvInput
								type="select"
								id="status"
								name="statusId"
								value={orderStatus}
								onChange={(e) => setOrderStatus(Number(e.target.value))}
								required
							>
								<option value={status.id}>{status.name}</option>
								{statuses?.map((status) => {
									return <option value={status.id}>{status.name}</option>
								})}
							</AvInput>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button.Ripple color="primary" type="submit">
							<span className="ml-50">Update</span>
						</Button.Ripple>
					</ModalFooter>
				</AvForm>
			</Modal>
		</div>
	)
}
export default UpdateStatus
