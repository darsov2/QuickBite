import React, {useState} from "react";
import {
    Button,
    CloseButton,
    Container,
    Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Image,
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
import ImageUpload from "../../Components/ImageUpload";
import '../../OrderPage.css'
import useDelete from "../../Hooks/useDelete";

const AdminMenuPanel = () => {

    const {deleteEntity} = useDelete();

    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const defaultData = {
        name:'',
        price:'',
        ingredients:'',
        category:''
    }

    const {createEntity} = useCreate()
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
    } = useGet('/api/menu/1')

    const {
        data: ingredients,
        setData: setIngredients,
        isLoading: ingredientsLoading,
        getData: getIngredientsData
    } = useGet('/api/menu/ingredient')

    const {
        data: categories,
        setData: setCategories,
        isLoading: categoriesLoading,
        getData: getCategoriesData
    } = useGet('/api/menu/category')


    !restaurantsLoading && console.log(restaurants)

    const [ingredientsToAdd, setIngredientsToAdd] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    return(
        <>
            <Container fluid style={{backgroundColor: 'lightgray'}} className={'pt-5'}>
                <h1 className={'h1 text-start py-5 ps-5'}>Manage menu items</h1>
            </Container>

            <Container fluid className={'px-5 py-3 d-flex justify-content-start'}>
                <Button onClick={() => setShowModal(true)} style={{backgroundColor: '#9dcb2c', borderColor: '#9dcb2c', boxShadow: '#9dcb2c 0px 2px 7px'}}>Add New</Button>
            </Container>

            <Container fluid className={'px-5'}>
                {restaurantsLoading && <Container style={{height: '30vh', paddingTop: '10%'}}>
                    <Spinner size={'lg'} className={'m-auto justify-content-center'}
                             style={{flex: 1, alignSelf: 'center'}} animation="border"/>
                    <h1 className={'h4'}>Loading...</h1>
                </Container>}
                {!restaurantsLoading && restaurants.length > 0 && <MDBTable hover={true}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    {!restaurantsLoading && restaurants.map((rest, i) => (
                        <tr key={rest.id}>
                            <td>{i + 1}</td>
                            <td>{rest.name}</td>
                            <td>{rest.price}</td>
                            <td>{rest.category.name}</td>
                            <td><Image fluid style={{maxHeight: '10vh'}} src={encodeURI('http://localhost:8080/download?fileName=' + rest.images[0].imageUrl)}></Image> </td>
                            <td><Button  onClick={() => {
                                deleteEntity('/api/menu/menuItem/delete/' + rest.id, setRefresh)
                            }} className={'btn-circle btn-danger'} style={{backgroundColor: "red"}}>X</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </MDBTable>}
            </Container>

            <Modal show={showModal} size={'lg'}>
                <ModalHeader>
                    <ModalTitle>Add new Item</ModalTitle>
                    <CloseButton onClick={() => setShowModal(false)}></CloseButton>
                </ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup className={'mb-3'}>
                            <FormLabel>Name:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.name} name={"name"}></FormControl>
                        </FormGroup>

                        <FormGroup className={'mb-3'}>
                            <FormLabel>Price:</FormLabel>
                            <FormControl onChange={onFormChange} value={formData.price} name={"price"}></FormControl>
                        </FormGroup>
                        <FormGroup className={'mb-3'}>
                            <FormLabel>Category:</FormLabel>
                            <FormSelect onChange={(e) => {
                                setSelectedCategory(e.target.value)
                            } } name={'category'}>
                                {!categoriesLoading && categories.map(ingr => (
                                    <option key={ingr.id} value={ingr.id}>{ingr.name}</option>
                                ))}
                            </FormSelect>
                        </FormGroup>
                        {
                            !ingredientsLoading && ingredients.map(ingr => (
                                <FormGroup>
                                    <FormCheck
                                        type="switch"
                                        id="custom-switch"
                                        label={ingr.name}
                                        value={ingr.id}
                                        onChange={(e) => {
                                            if(e.target.checked === true) {
                                                setIngredientsToAdd(prevState => {
                                                    return prevState.concat(e.target.getAttribute('value'))
                                                })
                                            }
                                            else {
                                                setIngredientsToAdd(prevState =>  (prevState.filter(x => x !== e.target.getAttribute('value'))))
                                            }
                                        }}
                                    />
                                </FormGroup>
                            ))
                        }
                        <MDBTable>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                            {ingredientsToAdd.length > 0 && ingredientsToAdd.map((ingr, i) => {
                               return ( <tr>
                                    <td>{i + 1}</td>
                                    <td>{ingredients.filter(x => x.id === Number(ingr))[0].name}</td>
                                </tr>)
                            })}
                            </tbody>
                        </MDBTable>
                        {/*<FormGroup>*/}
                        {/*    <FormLabel>Name:</FormLabel>*/}
                        {/*    <FormControl name={"name"}></FormControl>*/}
                        {/*</FormGroup>*/}
                        <ImageUpload setSelectedFile={setSelectedFile} selectedFile={selectedFile}></ImageUpload>
                        <FormGroup className={"mt-3"}>
                            <Button type={"submit"} onClick={(e) => {
                                e.preventDefault();
                                const fd = new FormData()
                                fd.append('name', formData.name)
                                fd.append('categoryId', 1)
                                fd.append('ingredients', ingredientsToAdd.join(','))
                                fd.append('price', formData.price)
                                fd.append('file', selectedFile)
                                setFormData({
                                    ...formData,
                                    categoryId: selectedCategory,
                                    ingredients: ingredientsToAdd.join(','),
                                    file: selectedFile,
                                })
                                console.log(fd)
                                console.log(formData)

                                createEntity('/api/menu/menuItem/save', fd, setRefresh)
                                setShowModal(false)
                            }}>Add</Button>
                        </FormGroup>
                    </Form>

                </ModalBody>
            </Modal>
        </>
    )
}

export default AdminMenuPanel;