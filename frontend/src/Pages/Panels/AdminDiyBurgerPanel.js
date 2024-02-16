import React, {useState} from "react";
import {
    Button,
    CloseButton,
    Container,
    Form, FormControl, FormGroup, FormLabel, FormSelect,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Spinner
} from "react-bootstrap";
import {MDBTable} from "mdb-react-ui-kit";
import useGet from "../../Hooks/useGet";

const AdminDiyPanel = () => {

    const [showModal, setShowModal] = useState(false);
    const {
        data: ingredients,
        setData: setIngredients,
        isLoading: ingredientsLoading,
    } = useGet('/api/menu/ingredient')

    const formData = localStorage.getItem('diyBurger');

    return(
        <>
            <Container fluid style={{backgroundColor: 'lightgray'}} className={'pt-5'}>
                <h1 className={'h1 text-start py-5 ps-5'}>Mapping burger builder ingredients</h1>
            </Container>


            <Container fluid className={'px-5 w-75 justify-content-start'}>
                <Form>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Meat</FormLabel>
                        <FormSelect name={'meat'} onChange={(e) => {
                            formData.meat = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Cheese</FormLabel>
                        <FormSelect name={'cheese'} onChange={(e) => {
                            formData.cheese = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Bacon</FormLabel>
                        <FormSelect bacon={'bacon'} onChange={(e) => {
                            formData.meat = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Egg</FormLabel>
                        <FormSelect name={'egg'} onChange={(e) => {
                            formData.egg = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Pickles</FormLabel>
                        <FormSelect name={'pickles'} onChange={(e) => {
                            formData.pickles = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Onion</FormLabel>
                        <FormSelect name={'onion'} onChange={(e) => {
                            formData.onion = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Salad</FormLabel>
                        <FormSelect name={'salad'} onChange={(e) => {
                            formData.salad = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Tomatoes</FormLabel>
                        <FormSelect name={'tomatoes'} onChange={(e) => {
                            formData.tomatoes = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Ketchup</FormLabel>
                        <FormSelect name={'ketchup'} onChange={(e) => {
                            formData.ketchup = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup className={'mb-3'}>
                        <FormLabel>Mayo</FormLabel>
                        <FormSelect name={'mayo'} onChange={(e) => {
                            formData.mayo = e.target.value;
                        }}>
                            {!ingredientsLoading && ingredients.map(ingr => {
                                return (<option value={ingr.id}>{ingr.name}</option>)
                            })}
                        </FormSelect>
                    </FormGroup>
                </Form>
            </Container>

            <Container fluid className={'px-5 py-3 d-flex justify-content-start'}>
                <Button onClick={() => setShowModal(true)} style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add New</Button>
            </Container>

            <Modal show={showModal}>
                <ModalHeader>
                    <ModalTitle>Add new Category</ModalTitle>
                    <CloseButton onClick={() => setShowModal(false)}></CloseButton>
                </ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup>
                            <FormLabel>Name:</FormLabel>
                            <FormControl name={"name"}></FormControl>
                        </FormGroup>

                        <FormGroup className={"mt-3"}>
                            <Button type={"submit"} style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add</Button>
                        </FormGroup>



                    </Form>

                </ModalBody>
            </Modal>

        </>
    )
}

export default AdminDiyPanel;