// ** Custom Components
import Sidebar from '@components/sidebar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { swal, apiRequest } from '@utils'
import { getAllData, getFilteredData } from '../store/action'

// ** Third Party Components
import { Button, FormGroup, Label, Spinner, CustomInput } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch()

  const [serviceData, setServiceData] = useState({
    name: '',
    price: ''
    // image: 'https://res.cloudinary.com/bringforthjoy/image/upload/v1621720743/INVESTA/appia_reward_image_placeholder_um7q6g.jpg'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // ** Function to handle form submit
  const onSubmit = async (event, errors) => {
    setIsSubmitting(true)
    event.preventDefault()
    console.log({errors})
    if (errors) setIsSubmitting(false)
    if (errors && !errors.length) {
      console.log({serviceData})
      setIsSubmitting(true)
      const body = JSON.stringify(serviceData)
      try {
        const response = await apiRequest({url:'/services/create', method:'POST', body}, dispatch)
        console.log({response})
        if (response.data.status) {
            setIsSubmitting(false)
            swal('Great job!', response.data.message, 'success')
            dispatch(getAllData())
            setServiceData({
              name: '',
              price: ''
            })
            toggleSidebar()
        } else {
          setIsSubmitting(false)
          swal('Oops!', response.data.message, 'error')
          setServiceData({
            name: '',
            price: ''
          })
          toggleSidebar()
        }
      } catch (error) {
        setIsSubmitting(false)
        console.error({error})
      }
    }
  }

    return (
      <Sidebar
        size='lg'
        open={open}
        title='New Service'
        headerClassName='mb-1'
        contentClassName='pt-0'
        toggleSidebar={toggleSidebar}
      >
        <AvForm onSubmit={onSubmit}>
          <FormGroup>
            <Label for='name'>Service Name</Label>
            <AvInput 
              name='name' 
              id='name' 
              placeholder='Service Name' 
              value={serviceData.name}
              onChange={e => setServiceData({...serviceData, name: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label for='price'>Service Price</Label>
            <AvInput 
              type='number' 
              name='price' 
              id='price' 
              placeholder='Service Price' 
              value={serviceData.price}
              onChange={e => setServiceData({...serviceData, price: e.target.value})}
            />
          </FormGroup>
          
          <Button type='submit' className='mr-1' color='primary' disabled={isSubmitting}>
            {isSubmitting && <Spinner color='white' size='sm' />}
            <span className='ml-50'>Submit</span>
          </Button>
          <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </AvForm>
      </Sidebar>
    )
}


export default SidebarNewUsers
