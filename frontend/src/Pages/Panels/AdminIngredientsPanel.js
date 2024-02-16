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
import useCreate from "../../Hooks/useCreate";
import useFormData from "../../Hooks/useFormData";
import '../../OrderPage.css'
import useDelete from "../../Hooks/useDelete";


const AdminIngredientsPanel = () => {

    const [showModal, setShowModal] = useState(false);

    const defaultData = {
        name:'',
        weight:'',
        kcal:'',
        singlePrice:''
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
        data: ingredients,
        setData: setIngredients,
        isLoading: ingredientsLoading,
        getData: getIngredientsData,
        setRefresh
    } = useGet('/api/menu/ingredient')

    return(
        <>
            <Container fluid style={{backgroundColor: 'lightgray'}} className={'pt-5'}>
                <h1 className={'h1 text-start py-5 ps-5'}>Manage available ingredients</h1>
            </Container>

            <Container fluid className={'px-5 py-3 d-flex justify-content-start'}>
                <Button onClick={() => {
                    setFormData(defaultData)
                    setShowModal(true)
                }} style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add New</Button>
            </Container>

            <Container fluid className={'px-5'}>
                {ingredientsLoading && <Container style={{height: '30vh', paddingTop: '10%'}}>
                    <Spinner size={'lg'} className={'m-auto justify-content-center'}
                             style={{flex: 1, alignSelf: 'center'}} animation="border"/>
                    <h1 className={'h4'}>Loading...</h1>
                </Container>}
                {!ingredientsLoading && <MDBTable hover={true}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Kcal</th>
                        <th>Single price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {!ingredientsLoading && ingredients.map((rest, i) => (
                        <tr onClick={(e) => {
                            console.log(ingredients.filter(x => x.id == e.currentTarget.getAttribute('data-key'))[0])
                            const data = ingredients.filter(x => x.id == e.currentTarget.getAttribute('data-key'))[0];
                            setFormData(data);
                            setShowModal(true);
                        }} data-key={rest.id}>
                            <td>{i + 1}</td>
                            <td>{rest.name}</td>
                            <td>{rest.weight} g</td>
                            <td>{rest.kcal} kcal</td>
                            <td>{rest.singlePrice}</td>
                            <td><Button  onClick={() => {
                                deleteEntity('/api/menu/ingredient/delete/' + rest.id, setRefresh)
                            }} className={'btn-circle btn-danger'} style={{backgroundColor: "red"}}>X</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </MDBTable>}
            </Container>

            <Modal show={showModal}>
                <ModalHeader>
                    <ModalTitle>Add new ingredient</ModalTitle>
                    <CloseButton onClick={() => {
                        setShowModal(false);
                    }}></CloseButton>
                </ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup className={"mb-3"}>
                            <FormLabel>Name:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.name} name={"name"}></FormControl>
                        </FormGroup>

                        <FormGroup className={"mb-3"}>
                            <FormLabel>Weight:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.weight} name={"weight"}></FormControl>
                        </FormGroup>

                        <FormGroup className={"mb-3"}>
                            <FormLabel>Kcal:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.kcal} name={"kcal"}></FormControl>
                        </FormGroup>

                        <FormGroup className={"mb-3"}>
                            <FormLabel>Single Price:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.singlePrice} name={"singlePrice"}></FormControl>
                        </FormGroup>

                        <FormGroup className={"mt-3"}>
                            <Button onClick={(e) => {
                                e.preventDefault()
                                createEntity('/api/menu/ingredient/save', formData, setRefresh)
                                setShowModal(false);
                            }} type={"submit"} style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add</Button>
                        </FormGroup>

                    </Form>

                </ModalBody>
            </Modal>

        </>
    )
}

export default AdminIngredientsPanel;