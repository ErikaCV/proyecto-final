import React, { useContext, useState } from 'react';
import { Button, Table, Image, Form, Modal} from 'react-bootstrap';
import { ProductContext } from './ProductContext';
import { CiEdit, CiSquareRemove } from "react-icons/ci";
import Swal from 'sweetalert2';


export const TableProductManaget = () => {
    const getProductContextValue = useContext(ProductContext);

    const { products, deleteProduct, editProduct} = getProductContextValue();
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
  });

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditedProduct({
      id: productToEdit.id,
      title: productToEdit.title,
      description: productToEdit.description,
      price: productToEdit.price,
      image: productToEdit.image,
      category: productToEdit.category,
    });
    setShowModal(true);
  };

  const handleCloseEditModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    editProduct(editedProduct.id, editedProduct);
    setShowModal(false);
  
   
    Swal.fire({
      icon: 'success',
      title: '¡Cambios guardados!',
      text: 'Los cambios han sido guardados correctamente.',
      timer: 2000, 
      showConfirmButton: false, 
    });
  };
  
  const handleDeleteProduct = (productId) => {
    
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar el producto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {

        deleteProduct(productId);
       
        Swal.fire(
          '¡Eliminado!',
          'El producto ha sido eliminado correctamente',
          'success'
        );
      }
    });
  };
  

  return (
    <div className='container-fluid shadow-lg rounded'>
      <h2 className=" about-title text-start mb-0 p-2">Administrar Productos</h2>
      <Table striped bordered hover >
        <thead >
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Image src={product.image} alt={product.title} rounded style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td className=''>
                <div>
                <CiEdit className='fs-2 text-success IconManage'  onClick={() => handleEditProduct(product.id)} />
                <CiSquareRemove className='fs-2 text-danger IconManage' onClick={() => handleDeleteProduct(product.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editedProduct.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={editedProduct.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={editedProduct.category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={editedProduct.image}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
