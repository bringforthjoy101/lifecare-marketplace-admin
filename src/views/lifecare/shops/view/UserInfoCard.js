// ** Custom Components
import Avatar from '@components/avatar'
import moment from 'moment'

import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteShop, getAllData } from '../store/action'

const MySwal = withReactContent(Swal)

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { Pocket, Award, Hexagon, UserPlus, Check, Star, Flag, Phone } from 'react-feather'
import CardTitle from 'reactstrap/lib/CardTitle'

const UserInfoCard = ({ shopDetails, userRole }) => {
	const renderShopImg = () => {
		if (shopDetails !== null && shopDetails.avatars) {
			return <img src={shopDetails.avatar} alt="user-avatar" className="img-fluid rounded" height="104" width="104" />
		} else {
			const stateNum = Math.floor(Math.random() * 6),
				states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
				color = states[stateNum]
			return (
				<Avatar
					initials
					color={color}
					className="rounded"
					content={shopDetails.name}
					contentStyles={{
						borderRadius: 0,
						fontSize: 'calc(36px)',
						width: '100%',
						height: '100%',
					}}
					style={{
						height: '90px',
						width: '90px',
					}}
				/>
			)
		}
	}

	const history = useHistory()
	const dispatch = useDispatch()

	// ** Handle Delete
	const handleDelete = async (id) => {
		return MySwal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			customClass: {
				confirmButton: 'btn btn-primary',
				cancelButton: 'btn btn-outline-danger ml-1',
			},
			buttonsStyling: false,
		}).then(async function (result) {
			if (result.value) {
				const deleted = await dispatch(deleteShop(id))
				if (deleted) {
					await dispatch(getAllData())
					MySwal.fire({
						icon: 'success',
						title: 'Deleted!',
						text: 'Shop has been deleted.',
						customClass: {
							confirmButton: 'btn btn-primary',
						},
					})
					history.push(`/shops/list`)
				}
			}
		})
	}

	const getTotalSpent = (transactions) => {
		const debitTransactions = transactions.filter((item) => {
			return item.type === 'debit'
		})
		const totalPrice = debitTransactions.reduce(function (accumulator, item) {
			return accumulator + item.amount
		}, 0)
		return totalPrice
	}

	return (
		<Card>
			<CardBody>
				<Row>
					<Col xl="6" lg="12" className="d-flex flex-column justify-content-between border-container-lg">
						<div className="user-avatar-section">
							<div className="d-flex justify-content-start">
								{renderShopImg()}
								<div className="d-flex flex-column ml-1">
									<div className="user-info mb-1">
										<h4 className="mb-0">{shopDetails !== null ? shopDetails.names : 'Shop Name'}</h4>
										<CardText tag="span">{shopDetails?.email}</CardText>
									</div>
									<div className="d-flex flex-wrap align-items-center">
										<Button.Ripple tag={Link} to={`/shop/edit/${shopDetails.id}`} disabled color="primary">
											Edit
										</Button.Ripple>
										<Button.Ripple className="ml-1" color="danger" outline onClick={() => handleDelete(shopDetails.id)}>
											Delete
										</Button.Ripple>
										{/* <Button.Ripple className='ml-1' color='danger' outline onClick={() => handleDelete(shopDetails.id)}>
                      Delete
                    </Button.Ripple> */}
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex align-items-center user-total-numbers">
							<div className="d-flex align-items-center mr-2">
								<div className="color-box bg-light-primary">
									<Pocket className="text-primary" />
								</div>
								<div className="ml-1">
									<h5 className="mb-0">
										{shopDetails?.wallet?.toLocaleString('en-US', { style: 'currency', currency: 'NGN' }) ||
											Number('0.00').toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}
									</h5>
									<small>Wallet Balance</small>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<div className="color-box bg-light-success">
									<Pocket className="text-success" />
								</div>
								<div className="ml-1">
									<h5 className="mb-0">{Number('0').toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</h5>
									<small>Spent So Far</small>
								</div>
							</div>
						</div>
					</Col>
					<Col xl="6" lg="12" className="mt-2 mt-xl-0">
						<div className="user-info-wrapper">
							<div className="d-flex flex-wrap align-items-center mt-0">
								<div className="user-info-title">
									<Award className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										Location
									</CardText>
								</div>
								<CardText className="mb-0">{shopDetails?.location || 'N/A'}</CardText>
							</div>
							<div className="d-flex flex-wrap align-items-center mt-1">
								<div className="user-info-title">
									<Award className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										Phone
									</CardText>
								</div>
								<CardText className="mb-0">{shopDetails?.phone || 'N/A'}</CardText>
							</div>
							<div className="d-flex flex-wrap align-items-center mt-1">
								<div className="user-info-title">
									<Star className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										Status
									</CardText>
								</div>
								<CardText className="text-capitalize mb-0">{shopDetails?.status}</CardText>
							</div>
							<div className="d-flex flex-wrap align-items-center mt-1">
								<div className="user-info-title">
									<UserPlus className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										Enrolled
									</CardText>
								</div>
								<CardText className="text-capitalize mb-0">{moment(shopDetails?.createdAt).format('LL')}</CardText>
							</div>
						</div>
					</Col>
				</Row>
				{/* {userDetails.user_details.tracking_id !== null ? */}
				{/* <Row>
          <Col>
            <div className='user-info-wrapper'>
              <div className="mt-2">
                <div className='user-info-title'>
                  <CardTitle> Tracking  Details: </CardTitle>
                </div>
                <div className='d-flex flex-wrap align-items-center mt-0'>
                  <div className='user-info-title'>
                    <User className='mr-1' size={14} />
                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                      Full Name
                </CardText>
                  </div>
                  <CardText className='mb-0'>{trackDetails.data.user?.names}</CardText>
                </div>
                <div className='d-flex flex-wrap align-items-center mt-1'>
                  <div className='user-info-title'>
                    <Flag className='mr-1' size={14} />
                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                      Email
                </CardText>
                  </div>
                  <CardText className='mb-0'>{trackDetails.data.user?.email}</CardText>
                </div>
                <div className='d-flex flex-wrap align-items-center mt-1'>
                  <div className='user-info-title'>
                    <Phone className='mr-1' size={14} />
                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                      Username
                </CardText>
                  </div>
                  <CardText className='mb-0'>{trackDetails.data.user?.username}</CardText>
                </div>
                <div className='d-flex flex-wrap align-items-center mt-1'>
                  <div className='user-info-title'>
                    <Phone className='mr-1' size={14} />
                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                      Phone
                </CardText>
                  </div>
                  <CardText className='mb-0'>{trackDetails.data.user?.phone}</CardText>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
				{/* : ""} */}
			</CardBody>
		</Card>
	)
}

export default UserInfoCard
