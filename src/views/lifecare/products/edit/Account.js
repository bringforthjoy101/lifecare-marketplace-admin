// ** React Imports
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components
import { Lock, Edit, Trash2 } from "react-feather"
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from "reactstrap"
import { AvForm, AvInput } from "availity-reactstrap-validation-safe"
import { getAllData, getProduct } from "../store/action"
import { swal, apiRequest, selectThemeColors } from "@utils"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const UserAccountTab = ({ selectedProduct }) => {
	const dispatch = useDispatch()
	// ** States
	const [img, setImg] = useState(null)
	const [productData, setProductData] = useState({
		name: selectedProduct.name,
		qty: selectedProduct.qty,
		price: selectedProduct.price,
		status: selectedProduct.status,
		unitId: selectedProduct.unitId,
		categories: selectedProduct.categories,
		// image: 'https://res.cloudinary.com/bringforthjoy/image/upload/v1621720743/INVESTA/appia_reward_image_placeholder_um7q6g.jpg'
	})
	const [allCategories, setAllCategories] = useState(null)
	const [allUnits, setAllUnits] = useState(null)
	const animatedComponents = makeAnimated()

	const onSubmit = async (event, errors) => {
		event.preventDefault()
		console.log({ errors })
		if (errors && !errors.length) {
			console.log({ productData })
			const body = JSON.stringify(productData)
			try {
				const response = await apiRequest({ url: `/products/update/${selectedProduct.id}`, method: "POST", body }, dispatch)
				console.log({ response })
				if (response.data.status) {
					swal("Great job!", response.data.message, "success")
					dispatch(getAllData())
					dispatch(getProduct(selectedProduct.id))
					setProductData({
						name: selectedProduct.name,
						qty: selectedProduct.qty,
						price: selectedProduct.price,
						status: selectedProduct.status,
					})
				} else {
					swal("Oops!", response.data.message, "error")
					setProductData({
						name: selectedProduct.name,
						qty: selectedProduct.qty,
						price: selectedProduct.price,
						status: selectedProduct.status,
					})
				}
			} catch (error) {
				console.error({ error })
			}
		}
	}

	// ** Function to change user image
	const onChange = (e) => {
		const reader = new FileReader(),
			files = e.target.files
		reader.onload = function () {
			setImg(reader.result)
		}
		reader.readAsDataURL(files[0])
	}

	// ** Update user image on mount or change
	useEffect(async () => {
		if (selectedProduct !== null) {
			if (selectedProduct.image.length) {
				return setImg(selectedProduct.image)
			} else {
				return setImg(null)
			}
		}
	}, [selectedProduct])

	useEffect(async () => {
		const categoriesRes = await apiRequest({ url: "/categories", method: "GET" })
		setAllCategories(categoriesRes.data.data)
		const unitsRes = await apiRequest({ url: "/units", method: "GET" })
		setAllUnits(unitsRes.data.data)
	}, [])

	// ** Renders User
	const renderUserAvatar = () => {
		if (img === null) {
			const stateNum = Math.floor(Math.random() * 6),
				states = ["light-success", "light-danger", "light-warning", "light-info", "light-primary", "light-secondary"],
				color = states[stateNum]
			return (
				<Avatar
					initials
					color={color}
					className="rounded mr-2 my-25"
					content={selectedProduct.name}
					contentStyles={{
						borderRadius: 0,
						fontSize: "calc(36px)",
						width: "100%",
						height: "100%",
					}}
					style={{
						height: "90px",
						width: "90px",
					}}
				/>
			)
		} else {
			return <img className="user-avatar rounded mr-2 my-25 cursor-pointer" src={img} alt="user profile avatar" height="90" width="90" />
		}
	}

	return (
		<Row>
			<Col sm="12">
				<Media className="mb-2">
					{renderUserAvatar()}
					<Media className="mt-50" body>
						<h4>{selectedProduct.fullName} </h4>
						<div className="d-flex flex-wrap mt-1 px-0">
							<Button.Ripple id="change-img" tag={Label} className="mr-75 mb-0" color="primary">
								<span className="d-none d-sm-block">Change</span>
								<span className="d-block d-sm-none">
									<Edit size={14} />
								</span>
								<input type="file" hidden id="change-img" onChange={onChange} accept="image/*" />
							</Button.Ripple>
							<Button.Ripple color="secondary" outline>
								<span className="d-none d-sm-block">Remove</span>
								<span className="d-block d-sm-none">
									<Trash2 size={14} />
								</span>
							</Button.Ripple>
						</div>
					</Media>
				</Media>
			</Col>
			<Col sm="12">
				<AvForm onSubmit={onSubmit}>
					<Row>
						<Col md="6" sm="12">
							<FormGroup>
								<Label for="name">Product Name</Label>
								<AvInput
									name="name"
									id="name"
									placeholder="Product Name"
									value={selectedProduct.name}
									onChange={(e) => setProductData({ ...productData, name: e.target.value })}
									required
								/>
								{/* <Input type='text' id='name' placeholder='Name' defaultValue={selectedProduct.name} /> */}
							</FormGroup>
						</Col>
						<Col md="6" sm="12">
							<FormGroup>
								<Label for="price">Product Price</Label>
								<AvInput
									name="price"
									id="price"
									placeholder="Product Price"
									value={selectedProduct.price}
									onChange={(e) => setProductData({ ...productData, price: e.target.value })}
									required
								/>
								{/* <Input type='text' id='price' placeholder='Price' defaultValue={selectedProduct.price} /> */}
							</FormGroup>
						</Col>
						<Col md="6" sm="12">
							<FormGroup>
								<Label for="qty">Product Qty</Label>
								<AvInput
									name="qty"
									id="qty"
									placeholder="Product Qty"
									value={selectedProduct.qty}
									onChange={(e) => setProductData({ ...productData, qty: e.target.value })}
									required
								/>
								{/* <Input type='text' id='qty' placeholder='Qty' defaultValue={selectedProduct.qty} /> */}
							</FormGroup>
						</Col>
						<Col md="6" sm="12">
							<FormGroup>
								<Label for="unit">Unit</Label>
								<Select
									theme={selectThemeColors}
									className="react-select"
									classNamePrefix="select"
									defaultValue={{ value: selectedProduct.unit.id, label: selectedProduct.unit.name, color: "#03670c", isFixed: true }}
									options={allUnits?.map((unit) => {
										return { value: unit.id, label: unit.name, color: "#03670c", isFixed: true }
									})}
									onChange={(e) => setProductData({ ...productData, unitId: e.value })}
									isClearable={false}
								/>
							</FormGroup>
						</Col>
						<Col md="6" sm="12">
							<FormGroup>
								<Label for="category">Categories</Label>
								<Select
									isClearable={false}
									theme={selectThemeColors}
									closeMenuOnSelect={false}
									components={animatedComponents}
									defaultValue={selectedProduct.categories.map((category) => {
										return { value: category.id, label: category.name, color: "#03670c", isFixed: true }
									})}
									isMulti
									options={allCategories?.map((category) => {
										return { value: category.id, label: category.name, color: "#03670c", isFixed: true }
									})}
									className="react-select"
									classNamePrefix="select"
								/>
							</FormGroup>
						</Col>
						<Col md="6" sm="12">
							<FormGroup>
								<Label for="status">Status</Label>
								<AvInput
									type="select"
									id="status"
									name="status"
									value={selectedProduct.status}
									onChange={(e) => setProductData({ ...productData, status: e.target.value })}
									required
								>
									<option value={selectedProduct.status} className="text-cpitalize">
										{selectedProduct.status}
									</option>
									<option value="in stock">In Stock</option>
									<option value="out of stock">Out Of Stock</option>
								</AvInput>
							</FormGroup>
						</Col>

						<Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
							<Button className="mb-1 mb-sm-0 mr-0 mr-sm-1" type="submit" color="primary">
								Save Changes
							</Button>
							<Button color="secondary" outline>
								Reset
							</Button>
						</Col>
					</Row>
				</AvForm>
			</Col>
		</Row>
	)
}
export default UserAccountTab
