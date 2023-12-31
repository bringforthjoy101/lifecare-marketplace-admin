import { useContext, useState, useEffect } from 'react'
import { apiRequest, swal, kFormatter, isUserLoggedIn } from '@utils'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Spinner } from 'reactstrap'
import ContactsCount from '@src/views/ui-elements/cards/statistics/ContactsCountInfo'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import { Eye, TrendingUp } from 'react-feather'

import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsDashboard = () => {
	const { colors } = useContext(ThemeColors)

	const [userData, setUserData] = useState(null)
	const [dashData, setDashData] = useState({})

	useEffect(() => {
		if (isUserLoggedIn) {
			setUserData(JSON.parse(localStorage.getItem('userData')))
		}
	}, [])

	// ** Get all Dashboard Data
	const dashboardData = async () => {
		const response = await apiRequest({ url: '/dashboard', method: 'GET' })
		if (response) {
			if (response?.data?.data && response?.data?.status) {
				await setDashData(response.data.data)
			} else {
				console.log(response.error)
			}
		} else {
			swal('Oops!', 'Something went wrong with your network.', 'error')
		}
	}

	// ** Get admin activities
	useEffect(() => {
		dashboardData()
	}, [])

	const numFormatter = (num) => {
		if (num > 999 && num < 1000000) {
			return `${(num / 1000).toFixed(1)}K`
		} else if (num > 1000000) {
			return `${(num / 1000000).toFixed(1)}M`
		} else if (num < 900) {
			return num
		}
	}

	return (
		<div id="dashboard-analytics">
			<Row className="match-height">
				<Col lg="6" sm="12">
					<CardCongratulations userData={userData} />
				</Col>
				<Col lg="3" sm="6">
					<SubscribersGained kFormatter={kFormatter} dashData={dashData} title={'Customers'} />
				</Col>
				<Col lg="3" sm="6">
					<ContactsCount kFormatter={kFormatter} warning={colors.warning.main} dashData={dashData} title={'Vendors'} />
				</Col>
			</Row>
			<Row className="match-height">
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<Eye size={21} />}
						color="primary"
						stats={numFormatter(dashData.totalProducts) || <Spinner className="mr-25" size="sm" />}
						statTitle="Products"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<Eye size={21} />}
						color="warning"
						stats={numFormatter(dashData.totalOrders) || <Spinner className="mr-25" size="sm" />}
						statTitle="Orders By Volume"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<Eye size={21} />}
						color="secondary"
						stats={numFormatter(dashData.totalTransactions || '0') || <Spinner className="mr-25" size="sm" />}
						statTitle="Transactions"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.totalOrders || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="Orders by Value"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.maxOrders || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="Max Sales"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.avgOrders?.toFixed(0) || 0)}` : <Spinner className="mr-25" size="sm" />}
						statTitle="Avg Sales"
					/>
				</Col>
			</Row>
			<Row className="match-height">
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.ordersToday || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="Today"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.ordersYesterday || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="Yesterday"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.ordersThisWeek || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="This Week"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.ordersThisMonth || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="This Month"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.ordersThisYear || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="This Year"
					/>
				</Col>
				<Col xl="2" md="4" sm="6">
					<StatsVertical
						icon={<TrendingUp size={21} />}
						color="primary"
						stats={dashData.orders ? `₦${numFormatter(dashData.orders?.ordersSoFar.toFixed(0) || '0')}` : <Spinner className="mr-25" size="sm" />}
						statTitle="So Far"
					/>
				</Col>
			</Row>
		</div>
	)
}

export default AnalyticsDashboard
