// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'
import { useState, useEffect } from 'react'

import { updateVendorStatus, deactivateUser, blacklistUserAsset, trackUser, UserDetails } from '../store/action'
import { PasswordReset, BlacklistUser, TrackingDetails, AddFunds, DeductFunds } from './AddFunds'
import { store } from '@store/storeConfig/store'
import { selectThemeColors, isUserLoggedIn } from '@utils'

const PlanCard = ({ vendorDetails }) => {
	const [userData, setUserData] = useState(null)

	useEffect(() => {
		if (isUserLoggedIn() !== null) {
			setUserData(JSON.parse(localStorage.getItem('userData')))
		}
	}, [])

	// DeductFunds

	return (
		<Card className="plan-card border-primary">
			<CardHeader className="d-flex justify-content-between align-items-center pt-75 pb-1"></CardHeader>
			<CardBody>
				{vendorDetails.status === 'active' ? (
					<Button.Ripple
						className="text-center mb-1"
						color="danger"
						outline
						block
						onClick={() => {
							store.dispatch(updateVendorStatus(vendorDetails.id, 'suspended'))
						}}
					>
						{' '}
						Suspend Vendor
					</Button.Ripple>
				) : (
					<Button.Ripple
						className="text-center mb-1"
						color="success"
						outline
						block
						onClick={() => {
							store.dispatch(updateVendorStatus(vendorDetails.id, 'active'))
						}}
					>
						Activate Vendor
					</Button.Ripple>
				)}
				{userData?.role === 'manager' || userData?.role === 'busary' ? (
					<div>
						<AddFunds vendorDetails={vendorDetails} /> <DeductFunds vendorDetails={vendorDetails} />{' '}
					</div>
				) : (
					''
				)}
			</CardBody>
		</Card>
	)
}

export default PlanCard
