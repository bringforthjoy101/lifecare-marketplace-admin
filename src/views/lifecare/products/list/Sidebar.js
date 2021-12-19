// ** Custom Components
import Sidebar from '@components/sidebar'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import { swal, apiRequest, selectThemeColors, Storage } from '@utils'
import { getAllData, getFilteredData } from '../store/action'

// ** Third Party Components
import { Button, FormGroup, Label, Spinner, CustomInput, Input } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

const SidebarNewUsers = ({ open, toggleSidebar }) => {
	const [allCategories, setAllCategories] = useState(null)
	const [allUnits, setAllUnits] = useState(null)
	const [allTypes, setAllTypes] = useState(null)
	const [allShops, setAllShops] = useState(null)
	const animatedComponents = makeAnimated()

	const userData = Storage.getItem('userData')
	const { accessToken } = userData

	useEffect(async () => {
		const categoriesRes = await apiRequest({ url: '/categories', method: 'GET' })
		setAllCategories(categoriesRes.data.data)
		const unitsRes = await apiRequest({ url: '/units', method: 'GET' })
		setAllUnits(unitsRes.data.data)
		const typesRes = await apiRequest({ url: '/types', method: 'GET' })
		setAllTypes(typesRes.data.data)
		const shopsRes = await apiRequest({ url: '/shops', method: 'GET' })
		setAllShops(shopsRes.data.data)
	}, [])
	const dispatch = useDispatch()

	const [productData, setProductData] = useState({
		name: '',
		qty: '',
		unitId: '',
		categoryIds: '',
		typeId: '',
		shopId: '',
		price: '',
		salesPrice: '',
		description: '',
		image: '',
		gallery: '',
	})
	console.log(productData)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const uploadImage = (file) => {
		const reader = new FileReader()
		console.log('next')
		// const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')

		reader.onload = function () {
			const base64String = reader.result
			console.log(base64String)
			setProductData({ ...productData, image: base64String })
		}
		reader.readAsDataURL(file)
	}

	// ** Function to handle form submit
	const onSubmit = async (event, errors) => {
		setIsSubmitting(true)
		event.preventDefault()
		console.log({ errors })
		if (errors) setIsSubmitting(false)
		if (errors && !errors.length) {
			console.log({ productData })
			const { name, qty, unitId, categoryIds, typeId, shopId, price, salesPrice, description, image, gallery } = productData
			console.log(name, qty, unitId, categoryIds, typeId, shopId, price, salesPrice, description, image, gallery)
			setIsSubmitting(true)
			try {
				const response = await apiRequest({ url: '/products/create', method: 'POST', body: productData }, dispatch)
				// const headers = formData.getHeaders()
				// console.log(headers)
				// const response = await axios({
				// 	method: 'post',
				// 	url: `${apiUrl}/products/create`,
				// 	data: formData,
				// 	headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' },
				// })

				// const response = await fetch(`${apiUrl}/products/create`, {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data',
				// 		Authorization: `Bearer ${accessToken}`,
				// 		// 'Content-Type': 'application/x-www-form-urlencoded',
				// 	},
				// 	body: formData,
				// })
				console.log({ response })
				if (response.data.status) {
					setIsSubmitting(false)
					swal('Great job!', response.data.message, 'success')
					dispatch(getAllData())
					setProductData({
						name: '',
						qty: '',
						unitId: '',
						categoryIds: '',
						typeId: '',
						shopId: '',
						price: '',
						salesPrice: '',
						description: '',
						image: '',
						gallery: '',
					})
					toggleSidebar()
				} else {
					setIsSubmitting(false)
					swal('Oops!', response.data?.message || 'An error occured!', 'error')
					// setProductData({
					// 	name: "",
					// 	qty: "",
					// 	unitId: "",
					// 	categoryIds: "",
					// 	typeId: "",
					// 	shopId: "",
					// 	price: "",
					// 	salesPrice: "",
					// 	description: "",
					// 	image: "",
					// 	gallery: "",
					// })
					// toggleSidebar()
				}
			} catch (error) {
				setIsSubmitting(false)
				console.error({ error })
			}
		}
	}

	return (
		<Sidebar size="lg" open={open} title="New Product" headerClassName="mb-1" contentClassName="pt-0" toggleSidebar={toggleSidebar}>
			<AvForm onSubmit={onSubmit}>
				<FormGroup>
					<Label for="name">Product Name</Label>
					<AvInput
						name="name"
						id="name"
						placeholder="Product Name"
						value={productData.name}
						onChange={(e) => setProductData({ ...productData, name: e.target.value })}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="qty">Quantity</Label>
					<AvInput
						name="qty"
						id="qty"
						placeholder="Quantity"
						value={productData.qty}
						onChange={(e) => setProductData({ ...productData, qty: e.target.value })}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="price">Product Price</Label>
					<AvInput
						type="number"
						name="price"
						id="price"
						placeholder="Product Price"
						value={productData.price}
						onChange={(e) => setProductData({ ...productData, price: e.target.value })}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="salesPrice">Product Sales Price</Label>
					<AvInput
						type="number"
						name="salesPrice"
						id="salesPrice"
						placeholder="Product Sales Price"
						value={productData.salesPrice}
						onChange={(e) => setProductData({ ...productData, salesPrice: e.target.value })}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="unit">Product Unit</Label>
					<Select
						theme={selectThemeColors}
						className="react-select"
						classNamePrefix="select"
						defaultValue={{ value: '', label: 'Select Unit', color: '#03670c', isFixed: true }}
						options={allUnits?.map((unit) => {
							return { value: unit.id, label: unit.name, color: '#03670c', isFixed: true }
						})}
						onChange={(e) => setProductData({ ...productData, unitId: e.value })}
						isClearable={false}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="type">Product Type</Label>
					<Select
						theme={selectThemeColors}
						className="react-select"
						classNamePrefix="select"
						defaultValue={{ value: '', label: 'Select Type', color: '#03670c', isFixed: true }}
						options={allTypes?.map((type) => {
							return { value: type.id, label: type.name, color: '#03670c', isFixed: true }
						})}
						onChange={(e) => setProductData({ ...productData, typeId: e.value })}
						isClearable={false}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="shop">Product Shop</Label>
					<Select
						theme={selectThemeColors}
						className="react-select"
						classNamePrefix="select"
						defaultValue={{ value: '', label: 'Select Shop', color: '#03670c', isFixed: true }}
						options={allShops?.map((shop) => {
							return { value: shop.id, label: shop.name, color: '#03670c', isFixed: true }
						})}
						onChange={(e) => setProductData({ ...productData, shopId: e.value })}
						isClearable={false}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="category">Product Categories</Label>
					<Select
						isClearable={false}
						theme={selectThemeColors}
						closeMenuOnSelect={false}
						components={animatedComponents}
						defaultValue={''}
						isMulti
						options={allCategories?.map((category) => {
							return { value: category.id, label: category.name, color: '#03670c', isFixed: true }
						})}
						onChange={(e) => setProductData({ ...productData, categoryIds: e.map((data) => data.value) })}
						className="react-select"
						classNamePrefix="select"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="description">Product Description</Label>
					<AvInput
						type="textarea"
						name="description"
						id="description"
						placeholder="Product Description"
						value={productData.description}
						onChange={(e) => setProductData({ ...productData, description: e.target.value })}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="image">Product Image</Label>
					<CustomInput
						type="file"
						id="image"
						name="image"
						accept="image/*"
						label="Pick product image"
						onChange={(e) => {
							uploadImage(e.target.files[0])
							// setProductData({ ...productData, image: e.target.files[0] })
						}}
						required
					/>
				</FormGroup>
				{/* <FormGroup>
					<Label for="gallery"></Label>
					<CustomInput
						type="file"
						id="gallery"
						name="gallery"
						accept="image/*"
						onChange={(e) => {
							uploadImage(e.target.files)
							// setProductData({ ...productData, gallery: e.target.files })
						}}
						required
						multiple
						label="Pick multiple images for gallery"
					/>
				</FormGroup> */}
				<Button type="submit" className="mr-1" color="primary" disabled={isSubmitting}>
					{isSubmitting && <Spinner color="white" size="sm" />}
					<span className="ml-50">Submit</span>
				</Button>
				<Button type="reset" color="secondary" outline onClick={toggleSidebar}>
					Cancel
				</Button>
			</AvForm>
		</Sidebar>
	)
}

export default SidebarNewUsers
