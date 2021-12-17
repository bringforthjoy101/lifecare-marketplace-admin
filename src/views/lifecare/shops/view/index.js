// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser, getUserAllTransactions, getShopDetails, trackUser } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert, Card, Nav, NavItem, NavLink } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import AllProductsList from './AllProducts'
import AllOrders from './AllOrders'
// import Books from './Books'
import { isUserLoggedIn } from '@utils'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = (props) => {
	// ** Vars
	const store = useSelector((state) => state.shops),
		dispatch = useDispatch(),
		{ id } = useParams()

	const [userData, setUserData] = useState(null)

	const [activeTransaction, setActiveTransaction] = useState('products')

	// ** Get user on mount
	useEffect(() => {
		dispatch(getShopDetails(id))
		// dispatch(getUserAllTransactions(id))
	}, [dispatch])

	useEffect(() => {
		if (isUserLoggedIn() !== null) {
			setUserData(JSON.parse(localStorage.getItem('userData')))
		}
	}, [])

	return store.shopDetails !== null && store.shopDetails !== undefined ? (
		<div className="app-user-view">
			<Row>
				<Col xl="9" lg="8" md="7">
					<UserInfoCard shopDetails={store.shopDetails} userRole={userData?.role} />
				</Col>
				<Col xl="3" lg="4" md="5">
					<PlanCard shopDetails={store.shopDetails} />
				</Col>
			</Row>
			<div>
				<Card className="mb-3 d-flex justify-content-around">
					<Row className="d-sm-block d-lg-flex justify-content-center">
						<Nav pills className="nav-pill-primary my-2">
							<NavItem>
								<NavLink onClick={() => setActiveTransaction('products')} active={activeTransaction === 'products'}>
									Products
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={() => setActiveTransaction('orders')} active={activeTransaction === 'orders'}>
									Orders
								</NavLink>
							</NavItem>
						</Nav>
					</Row>
				</Card>
				<Row>
					{activeTransaction === 'products' ? (
						<Col sm="12">
							{' '}
							<AllProductsList />{' '}
						</Col>
					) : activeTransaction === 'orders' ? (
						<Col sm="12">{/* <AllOrders /> */}</Col>
					) : (
						''
					)}
				</Row>
			</div>
		</div>
	) : (
		''
	)
}
export default UserView
