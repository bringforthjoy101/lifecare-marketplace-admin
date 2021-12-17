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

  const [userData, setUserData] = useState({
    names: '',
    phone: '',
    location: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const uploadImage = async (event) => {
    console.log('hi')
    event?.preventDefault()
    console.log(event)
      const formData = new FormData()
      formData.append("image", event.target.files[0])
      try {
        const response = await apiRequest({
          url: "/upload-images",
          method: "POST",
          body: formData
        })
        if (response) {
          if (response?.data?.status) {
            const avatar = response.data.data
            // setIsSubmitting(false)
            setUserData({ ...userData, avatar })
          } else {
            swal("Oops!", response.data.message, "error")
          }
        } else {
          swal("Oops!", "Something went wrong with your image.", "error")
        }
      } catch (error) {
        console.error({ error })
      }
  }

  // ** Function to handle form submit
  const onSubmit = async (event, errors) => {
    setIsSubmitting(true)
    event.preventDefault()
    console.log({errors})
    if (errors) setIsSubmitting(false)
    if (errors && !errors.length) {
      console.log({userData})
      setIsSubmitting(true)
      const body = JSON.stringify(userData)
      try {
        const response = await apiRequest({url:'/clients/create', method:'POST', body}, dispatch)
        console.log({response})
        if (response.data.status) {
          setIsSubmitting(false)
            swal('Great job!', response.data.message, 'success')
            dispatch(getAllData())
            toggleSidebar()
        } else {
          setIsSubmitting(false)
          swal('Oops!', response.data.message, 'error')
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
        title='New Client'
        headerClassName='mb-1'
        contentClassName='pt-0'
        toggleSidebar={toggleSidebar}
      >
        <AvForm onSubmit={onSubmit}>
          {/* <FormGroup>
            <Label for='image'>Client Image</Label>
            <CustomInput type='file' id='image' name='image' accept='image/*' onChange={e => uploadImage(e)} required  />
          </FormGroup> */}
          <FormGroup>
            <Label for='names'>Full Name</Label>
            <AvInput 
              name='names' 
              id='names' 
              placeholder='Full Name' 
              value={userData.names}
              onChange={e => setUserData({...userData, names: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label for='phone'>Phone</Label>
            <AvInput 
              name='phone' 
              id='phone' 
              placeholder='Phone' 
              value={userData.phone}
              onChange={e => setUserData({...userData, phone: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label for='location'>Location</Label>
            <AvInput 
              name='location' 
              id='location' 
              placeholder='Location' 
              value={userData.location}
              onChange={e => setUserData({...userData, location: e.target.value})}
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
