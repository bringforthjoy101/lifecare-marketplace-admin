import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from 'react-feather'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'
import { Spinner } from 'reactstrap'

const SubscribersGained = ({ kFormatter, dashData, title }) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		axios.get('/card/card-statistics/subscribers').then((res) => setData(res.data))
	}, [])

	return data !== null ? (
		<StatsWithAreaChart
			icon={<Users size={21} />}
			color="primary"
			stats={kFormatter(dashData?.totalUsers) || <Spinner className="mr-25" size="sm" />}
			statTitle={title}
			series={data.series}
			type="area"
		/>
	) : null
}

export default SubscribersGained
