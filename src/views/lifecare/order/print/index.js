// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { getOrder } from '../store/action'

// ** Third Party Components
import { Row, Col, Table, Media } from 'reactstrap'

// ** Styles
import '@styles/base/pages/app-invoice-print.scss'

const Print = () => {
	// ** Print on mount
	// useEffect(() => window.print(), [])
	const store = useSelector((state) => state.orders),
		dispatch = useDispatch(),
		{ id } = useParams()

	useEffect(() => {
		// axios.get(`/api/invoice/invoices/${id}`).then(response => {
		//   setData(response.data)
		// })
		dispatch(getOrder(id))
		window.print()
	}, [])

	const { selectedOrder } = store
	console.log(selectedOrder)

	const renderTable = (products) => {
		console.log(products)
		return products.map((product) => {
			return (
				<tr key={product.product_id}>
					<td className="">
						<p className="card-text font-weight-bold mb-25">{product.product.name}</p>
					</td>
					<td className="">
						<span className="font-weight-bold">₦{product.unit_price.toLocaleString()}</span>
					</td>
					<td className="">
						<span className="font-weight-bold">{product.order_quantity.toLocaleString()}</span>
					</td>
					<td className="">
						<span className="font-weight-bold">₦{product.subtotal.toLocaleString()}</span>
					</td>
				</tr>
			)
		})
	}

	const formatAddress = ({ street, city, country }) => {
		return `${street}, ${city}, ${country}`
	}

	return (
		<div className="invoice-print p-1">
			{/* <div className="row ml-1 mr-1 mt-2"> */}
			{/* <div className='col-md-3'> */}
			<div className="d-flex justify-content-between flex-md-row flex-column pb-2">
				<div>
					<div className="d-flex mb-1">
						<Media className="mr-25" left>
							<Media
								object
								className="rounded mr-50"
								src={selectedOrder?.business?.logo || 'https://bringforthjoy.s3.us-east-2.amazonaws.com/livecare/live-care-logo.png'}
								alt="Generic placeholder image"
								height="80"
							/>
						</Media>
					</div>
					<p className="mb-25">{selectedOrder?.business?.name || 'Lifecare Marketplace'}</p>
					<p className="mb-25">{selectedOrder?.business?.address || 'Ado Ekiti'}</p>
					<p className="mb-0">+{selectedOrder?.business?.phone || '07067869400'}</p>
				</div>
				<div className="mt-md-0 mt-2">
					<h4 className="font-weight-bold text-right mb-1">RECEIPT #{selectedOrder?.trackingNumber}</h4>
					<div className="invoice-date-wrapper mb-50">
						<span className="invoice-date-title">Date:</span>
						<span className="font-weight-bold"> {moment(selectedOrder?.createdAt).format('ll')}</span>
					</div>
					{/* <div className='invoice-date-wrapper'>
                <span className='invoice-date-title'>Due Date:</span>
                <span className='font-weight-bold'>{moment(selectedOrder?.createdAt).format('LL')}</span>
              </div> */}
				</div>
			</div>

			<hr className="my-2" />

			<Row className="pb-2">
				<Col sm="6">
					<h6 className="mb-1">Invoice To:</h6>
					<p className="mb-25">{selectedOrder?.user.names}</p>
					<p className="mb-25">{selectedOrder?.user.phone}</p>
					<p className="mb-25">{formatAddress(selectedOrder?.user.addresses.find((address) => address.type === 'shipping'))}</p>
				</Col>
				<Col className="mt-sm-0 mt-2" sm="6">
					<h6 className="mb-1">Payment Details:</h6>
					<table>
						<tbody>
							<tr>
								<td className="pr-1">Total Due:</td>
								<td>
									<strong>₦{selectedOrder?.total.toLocaleString()}</strong>
								</td>
							</tr>
							{/* <tr>
                    <td className='pr-1'>Bank Name:</td>
                    <td>{selectedOrder?.business.bankName}</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>Account Name:</td>
                    <td>{selectedOrder?.business.accountName}</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>Account Number:</td>
                    <td>{selectedOrder?.business.bankAccountNumber}</td>
                  </tr> */}
						</tbody>
					</table>
				</Col>
			</Row>

			<Table className="mt-2 mb-0" size="20">
				<thead>
					<tr>
						<th className="">Product</th>
						<th className="">Price</th>
						<th className="">Qty</th>
						<th className="">Total</th>
					</tr>
				</thead>
				<tbody>{renderTable(selectedOrder?.products)}</tbody>
			</Table>

			<Row className="invoice-sales-total-wrapper mt-3">
				<Col className="mt-md-0 mt-3" md="6" order={{ md: 1, lg: 2 }}>
					{/* <p className='mb-0'>
                <span className='font-weight-bold'>Salesperson:</span> <span className='ml-75'>Alfie Solomons</span>
              </p> */}
				</Col>
				<Col className="d-flex justify-content-end" md="6" order={{ md: 2, lg: 1 }}>
					<div className="invoice-total-wrapper">
						<div className="invoice-total-item">
							<p className="invoice-total-title">Subtotal:</p>
							<p className="invoice-total-amount">₦{selectedOrder?.subTotal.toLocaleString()}</p>
						</div>
						<div className="invoice-total-item">
							<p className="invoice-total-title">Discount:</p>
							<p className="invoice-total-amount">₦{selectedOrder?.discount.toLocaleString()}</p>
						</div>
						<div className="invoice-total-item">
							<p className="invoice-total-title">Tax:</p>
							<p className="invoice-total-amount">₦{selectedOrder?.tax}</p>
						</div>
						<hr className="my-50" />
						<div className="invoice-total-item">
							<p className="invoice-total-title">Total:</p>
							<p className="invoice-total-amount">₦{selectedOrder?.total.toLocaleString()}</p>
						</div>
					</div>
				</Col>
			</Row>

			<hr className="my-2" />

			<Row>
				<Col sm="12">
					<span className="font-weight-bold">Note:</span>
					<span>Thank You!</span>
				</Col>
			</Row>
			{/* </div> */}
		</div>
	)
}

export default Print
