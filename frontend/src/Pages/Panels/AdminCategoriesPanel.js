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
import "../../OrderPage.css"
import useDelete from "../../Hooks/useDelete";


const AdminCategoriesPanel = () => {

    const [showModal, setShowModal] = useState(false);
    const {
        data: categories,
        setData: setCategories,
        isLoading: categoriesLoading,
        getData: getCategoriesData,
        setRefresh
    } = useGet('/api/menu/category')

    const defaultData = {
        name: ''
    }

    const {deleteEntity} = useDelete()

    const {
        formData,
        onFormChange,
        onCheckBoxChange,
        setFormData
    } = useFormData(defaultData)

    const {createEntity} = useCreate()

    return (
        <>
            <Container fluid style={{backgroundColor: 'lightgray'}} className={'pt-5'}>
                <h1 className={'h1 text-start py-5 ps-5'}>Manage categories</h1>
            </Container>

            <Container fluid className={'px-5 py-3 d-flex justify-content-start'}>
                <Button onClick={() => {
                    setFormData(defaultData)
                    setShowModal(true)
                }}
                        style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add
                    New</Button>
            </Container>

            <Container fluid className={'px-5'}>
                {categoriesLoading && <Container style={{height: '30vh', paddingTop: '10%'}}>
                    <Spinner size={'lg'} className={'m-auto justify-content-center'}
                             style={{flex: 1, alignSelf: 'center'}} animation="border"/>
                    <h1 className={'h4'}>Loading...</h1>
                </Container>}
                {!categoriesLoading && <MDBTable hover={true}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {!categoriesLoading && categories.map((rest, i) => (
                        <tr onClick={(e) => {
                            console.log(categories.filter(x => x.id == e.currentTarget.getAttribute('data-key'))[0])
                            const data = categories.filter(x => x.id == e.currentTarget.getAttribute('data-key'))[0];
                            setFormData(data);
                            setShowModal(true);
                        }}  key={rest.id} data-key={rest.id}>
                            <td>{i + 1}</td>
                            <td>{rest.name}</td>
                            <td><Button  onClick={() => {
                                deleteEntity('/api/menu/category/delete/' + rest.id, setRefresh)
                            }} className={'btn-circle btn-danger'} style={{backgroundColor: "red"}}>X</Button></td>

                        </tr>
                    ))}
                    </tbody>
                </MDBTable>}
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
                            <FormControl onChange={onFormChange} value={formData.name} name={"name"}></FormControl>
                        </FormGroup>

                        <FormGroup className={"mt-3"}>
                            <Button type={"submit"} style={{
                                backgroundColor: '#9dcb2c',
                                borderColor: '#9dcb2c',
                                boxShadow: '#9dcb2c 0px 2px 7px'
                            }} onClick={(e) => {
                                e.preventDefault();
                                console.log(formData)
                                createEntity('/api/menu/category/save', formData, setRefresh)
                                setShowModal(false)
                            }}>Add</Button>
                        </FormGroup>


                    </Form>

                </ModalBody>
            </Modal>

        </>
    )
}

export default AdminCategoriesPanel;