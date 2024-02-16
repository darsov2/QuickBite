import React, {useState} from "react";
import {
    Button,
    CloseButton,
    Container,
    Form, FormControl, FormGroup, FormLabel,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Spinner
} from "react-bootstrap";
import {MDBTable} from "mdb-react-ui-kit";
import useGet from "../../Hooks/useGet";
import useFormData from "../../Hooks/useFormData";
import useCreate from "../../Hooks/useCreate";
import useDelete from "../../Hooks/useDelete";
import "../../OrderPage.css"

const AdminRestaurantsPanel = () => {

    const [showModal, setShowModal] = useState(false);
    const defaultData = {
        city: '',
        address: '',
        zipCode: '',
        description: '',
        latitude: '',
        longitude: ''
    }
    const {createEntity} = useCreate()
    const {deleteEntity} = useDelete()
    const {
        formData,
        onFormChange,
        onCheckBoxChange,
        setFormData
    } = useFormData(defaultData)

    const {
        data: restaurants,
        setData: setRestaurants,
        isLoading: restaurantsLoading,
        getData: getRestaurantsData,
        setRefresh
    } = useGet('/api/restaurant/')

    return (
        <>
            <Container fluid style={{backgroundColor: 'lightgray'}} className={'pt-5'}>
                <h1 className={'h1 text-start py-5 ps-5'}>Manage restaurants</h1>
            </Container>

            <Container fluid className={'px-5 py-3 d-flex justify-content-start'}>
                <Button onClick={() => setShowModal(true)}
                        style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add
                    New</Button>
            </Container>

            <Container fluid className={'px-5'}>
                {restaurantsLoading && <Container style={{height: '30vh', paddingTop: '10%'}}>
                    <Spinner size={'lg'} className={'m-auto justify-content-center'}
                             style={{flex: 1, alignSelf: 'center'}} animation="border"/>
                    <h1 className={'h4'}>Loading...</h1>
                </Container>}
                {!restaurantsLoading && <MDBTable hover={true}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Zip code</th>
                        <th>Description</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {!restaurantsLoading && restaurants.map((rest, i) => (
                        <tr onClick={(e) => {
                            console.log(restaurants.filter(x => x.id == e.currentTarget.getAttribute('data-key'))[0])
                            const data = restaurants.filter(x => x.id == e.currentTarget.getAttribute('data-key'))[0];
                            setFormData(data);
                            setShowModal(true);
                        }} data-key={rest.id} key={rest.id}>
                            <td>{i + 1}</td>
                            <td>{rest.city}</td>
                            <td>{rest.address}</td>
                            <td>{rest.zipCode}</td>
                            <td>{rest.description}</td>
                            <td>{rest.latitude}</td>
                            <td>{rest.longitude}</td>
                            <td><Button  onClick={() => {
                                deleteEntity('/api/restaurant/delete/' + rest.id, setRefresh)
                            }} className={'btn-circle btn-danger'} style={{backgroundColor: "red"}}>X</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </MDBTable>}

            </Container>

            <Modal show={showModal}>
                <ModalHeader>
                    <ModalTitle>Add new Restaurant</ModalTitle>
                    <CloseButton onClick={() => {
                        setFormData(defaultData)
                        setShowModal(false)
                    }}></CloseButton>
                </ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup className={"mt-3"}>
                            <FormLabel>City:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.city} name={"city"}></FormControl>
                        </FormGroup>
                        <FormGroup className={"mt-3"}>
                            <FormLabel>Zip COde:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.zipCode}
                                         name={"zipCode"}></FormControl>
                        </FormGroup>
                        <FormGroup className={"mt-3"}>
                            <FormLabel>Address:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.address}
                                         name={"address"}></FormControl>
                        </FormGroup>
                        <FormGroup className={"mt-3"}>
                            <FormLabel>Description:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.description}
                                         name={"description"}></FormControl>
                        </FormGroup>
                        <FormGroup className={"mt-3"}>
                            <FormLabel>Longitude:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.longitude}
                                         name={"longitude"}></FormControl>
                        </FormGroup>
                        <FormGroup className={"mt-3"}>
                            <FormLabel>Latitude:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.latitude}
                                         name={"latitude"}></FormControl>
                        </FormGroup>


                        <FormGroup className={"mt-3"}>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                createEntity('/api/restaurant/save', formData, setRefresh)
                                setShowModal(false);
                            }} type={"submit"} style={{
                                backgroundColor: '#9dcb2c',
                                borderColor: '#9dcb2c',
                                boxShadow: '#9dcb2c 0px 2px 7px'
                            }}>Add</Button>
                        </FormGroup>

                    </Form>

                </ModalBody>
            </Modal>

        </>
    )
}

export default AdminRestaurantsPanel;