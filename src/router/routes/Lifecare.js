import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

// const userData = JSON.parse(localStorage.getItem('userData'))

const ManagerRoutes = [
	{
		path: '/apps/ecommerce/shop',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/lifecare/ecommerce/shop')),
	},
	{
		path: '/apps/ecommerce/wishlist',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/lifecare/ecommerce/wishlist')),
	},
	{
		path: '/apps/ecommerce/product-detail',
		exact: true,
		className: 'ecommerce-application',
		component: () => <Redirect to="/apps/lifecare/product-detail/apple-i-phone-11-64-gb-black-26" />,
	},
	{
		path: '/apps/ecommerce/product-detail/:product',
		exact: true,
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/lifecare/ecommerce/detail')),
		meta: {
			navLink: '/apps/ecommerce/product-detail',
		},
	},
	{
		path: '/apps/ecommerce/checkout',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/lifecare/ecommerce/checkout')),
	},
	// {
	//   path: '/users/list',
	//   component: lazy(() => import('../../views/lifecare/user/list'))
	// },
	// {
	//   path: '/user/view',
	//   exact: true,
	//   component: () => <Redirect to='/lifecare/user/view/1' />
	// },
	// {
	//   path: '/user/view/:id',
	//   component: lazy(() => import('../../views/lifecare/user/view')),
	//   meta: {
	//     navLink: '/lifecare/user/view'
	//   }
	// },
	{
		path: '/customers/list',
		component: lazy(() => import('../../views/lifecare/customers/list')),
	},
	{
		path: '/customers/view',
		exact: true,
		component: () => <Redirect to="/lifecare/customers/view/1" />,
	},
	{
		path: '/customers/view/:id',
		component: lazy(() => import('../../views/lifecare/customers/view')),
		meta: {
			navLink: '/lifecare/customers/view',
		},
	},
	{
		path: '/vendors/list',
		component: lazy(() => import('../../views/lifecare/vendors/list')),
	},
	{
		path: '/vendors/view',
		exact: true,
		component: () => <Redirect to="/lifecare/vendors/view/1" />,
	},
	{
		path: '/vendors/view/:id',
		component: lazy(() => import('../../views/lifecare/vendors/view')),
		meta: {
			navLink: '/lifecare/vendors/view',
		},
	},
	{
		path: '/shops/list',
		component: lazy(() => import('../../views/lifecare/shops/list')),
	},
	{
		path: '/shops/view',
		exact: true,
		component: () => <Redirect to="/lifecare/shops/view/1" />,
	},
	{
		path: '/shops/view/:id',
		component: lazy(() => import('../../views/lifecare/shops/view')),
		meta: {
			navLink: '/lifecare/shops/view',
		},
	},
	{
		path: '/products/list',
		component: lazy(() => import('../../views/lifecare/products/list')),
	},
	{
		path: '/products/view',
		exact: true,
		component: () => <Redirect to="/lifecare/products/view/1" />,
	},
	{
		path: '/products/view/:id',
		component: lazy(() => import('../../views/lifecare/products/view')),
		meta: {
			navLink: '/lifecare/products/view',
		},
	},
	{
		path: '/products/edit',
		exact: true,
		component: () => <Redirect to="/products/edit/1" />,
	},
	{
		path: '/products/edit/:id',
		component: lazy(() => import('../../views/lifecare/products/edit')),
		meta: {
			navLink: '/products/edit',
		},
	},
	{
		path: '/orders/list',
		component: lazy(() => import('../../views/lifecare/order/list')),
	},
	{
		path: '/order/view',
		exact: true,
		component: () => <Redirect to="/lifecare/order/view/1" />,
	},
	{
		path: '/order/view/:id',
		component: lazy(() => import('../../views/lifecare/order/view')),
		meta: {
			navLink: '/lifecare/order/view',
		},
	},
	{
		path: '/order/preview/:id',
		component: lazy(() => import('../../views/lifecare/order/preview')),
		meta: {
			navLink: '/invoice/preview',
		},
	},
	{
		path: '/order/preview',
		exact: true,
		component: () => <Redirect to="/order/preview/1" />,
	},
	{
		path: '/order/print/:id',
		layout: 'BlankLayout',
		component: lazy(() => import('../../views/lifecare/order/print')),
	},
	{
		path: '/settings/list',
		component: lazy(() => import('../../views/lifecare/settings/list')),
	},
	{
		path: '/categories/list',
		component: lazy(() => import('../../views/lifecare/categories/list')),
	},
	{
		path: '/types/list',
		component: lazy(() => import('../../views/lifecare/types/list')),
	},
	{
		path: '/units/list',
		component: lazy(() => import('../../views/lifecare/units/list')),
	},
	// {
	// 	path: '/order-statuses/list',
	// 	component: lazy(() => import('../../views/lifecare/order-statuses/list')),
	// },
	// {
	// 	path: '/delivery-schedules/list',
	// 	component: lazy(() => import('../../views/lifecare/delivery-schedules/list')),
	// },
]

const BusaryRoutes = [
	{
		path: '/apps/ecommerce/shop',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/shop')),
	},
	{
		path: '/apps/ecommerce/wishlist',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/wishlist')),
	},
	{
		path: '/apps/ecommerce/product-detail',
		exact: true,
		className: 'ecommerce-application',
		component: () => <Redirect to="/apps/tuck-shop/product-detail/apple-i-phone-11-64-gb-black-26" />,
	},
	{
		path: '/apps/ecommerce/product-detail/:product',
		exact: true,
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/detail')),
		meta: {
			navLink: '/apps/ecommerce/product-detail',
		},
	},
	{
		path: '/apps/ecommerce/checkout',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/checkout')),
	},
	{
		path: '/admins/list',
		component: lazy(() => import('../../views/tuck-shop/admin/list')),
	},
	{
		path: '/admin/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/admin/view/1" />,
	},
	{
		path: '/admin/view/:id',
		component: lazy(() => import('../../views/tuck-shop/admin/view')),
		meta: {
			navLink: '/tuck-shop/admin/view',
		},
	},
	{
		path: '/students/list',
		component: lazy(() => import('../../views/tuck-shop/student/list')),
	},
	{
		path: '/student/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/student/view/1" />,
	},
	{
		path: '/student/view/:id',
		component: lazy(() => import('../../views/tuck-shop/student/view')),
		meta: {
			navLink: '/tuck-shop/student/view',
		},
	},
	{
		path: '/kitchen-staffs/list',
		component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/list')),
	},
	{
		path: '/kitchen-staff/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/kitchen-staffs/view/1" />,
	},
	{
		path: '/kitchen-staff/view/:id',
		component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/view')),
		meta: {
			navLink: '/tuck-shop/kitchen-staff/view',
		},
	},
	{
		path: '/orders/list',
		component: lazy(() => import('../../views/tuck-shop/order/list')),
	},
	{
		path: '/order/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/order/view/1" />,
	},
	{
		path: '/order/view/:id',
		component: lazy(() => import('../../views/tuck-shop/order/view')),
		meta: {
			navLink: '/tuck-shop/order/view',
		},
	},
	{
		path: '/transactions/list',
		component: lazy(() => import('../../views/tuck-shop/transaction/list')),
	},
	{
		path: '/transaction/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/transaction/view/1" />,
	},
	{
		path: '/transaction/view/:id',
		component: lazy(() => import('../../views/tuck-shop/transaction/view')),
		meta: {
			navLink: '/tuck-shop/transaction/view',
		},
	},
]

const SalesRepRoutes = [
	{
		path: '/apps/ecommerce/shop',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/shop')),
	},
	{
		path: '/apps/ecommerce/wishlist',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/wishlist')),
	},
	{
		path: '/apps/ecommerce/product-detail',
		exact: true,
		className: 'ecommerce-application',
		component: () => <Redirect to="/apps/tuck-shop/product-detail/apple-i-phone-11-64-gb-black-26" />,
	},
	{
		path: '/apps/ecommerce/product-detail/:product',
		exact: true,
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/detail')),
		meta: {
			navLink: '/apps/ecommerce/product-detail',
		},
	},
	{
		path: '/apps/ecommerce/checkout',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/checkout')),
	},
	{
		path: '/students/list',
		component: lazy(() => import('../../views/tuck-shop/student/list')),
	},
	{
		path: '/student/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/student/view/1" />,
	},
	{
		path: '/student/view/:id',
		component: lazy(() => import('../../views/tuck-shop/student/view')),
		meta: {
			navLink: '/tuck-shop/student/view',
		},
	},
]

const StoreRoutes = [
	{
		path: '/apps/ecommerce/shop',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/shop')),
	},
	{
		path: '/apps/ecommerce/wishlist',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/wishlist')),
	},
	{
		path: '/apps/ecommerce/product-detail',
		exact: true,
		className: 'ecommerce-application',
		component: () => <Redirect to="/apps/tuck-shop/product-detail/apple-i-phone-11-64-gb-black-26" />,
	},
	{
		path: '/apps/ecommerce/product-detail/:product',
		exact: true,
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/detail')),
		meta: {
			navLink: '/apps/ecommerce/product-detail',
		},
	},
	{
		path: '/apps/ecommerce/checkout',
		className: 'ecommerce-application',
		component: lazy(() => import('../../views/tuck-shop/ecommerce/checkout')),
	},
	{
		path: '/kitchen-staffs/list',
		component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/list')),
	},
	{
		path: '/kitchen-staff/view',
		exact: true,
		component: () => <Redirect to="/tuck-shop/kitchen-staffs/view/1" />,
	},
	{
		path: '/kitchen-staff/view/:id',
		component: lazy(() => import('../../views/tuck-shop/kitchen-staffs/view')),
		meta: {
			navLink: '/tuck-shop/kitchen-staff/view',
		},
	},
]

// export default userData?.role === 'manager' ? ManagerRoutes : userData?.role === 'busary' ? BusaryRoutes : userData?.role === 'sales rep' ? SalesRepRoutes : StoreRoutes
export default ManagerRoutes
