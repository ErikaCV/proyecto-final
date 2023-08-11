import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export const CreateProduct = () => {
  const getProductContextValue = useContext(ProductContext);

  const { addProduct } = getProductContextValue();

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: null,
    category: "",
    stock: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setNewProduct({
      ...newProduct,
      image: e.target.files[0],
    });
  };

  const handleAddProduct = async () => {
    const formData = new FormData();

    formData.append("title", newProduct.title);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("category", newProduct.category);
    formData.append("image", newProduct.image);
    formData.append('stock', newProduct.stock);

    await addProduct(formData);

    setNewProduct({
      title: "",
      description: "",
      price: 0,
      image: null,
      category: "",
    });
    Swal.fire({
      icon: "success",
      title: "Producto creado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    console.log("nuevo producto", newProduct);
  }, [newProduct]);

  return (
    <div className="container-fluid">
      <Form className="border p-5 rounded shadow-lg row">
        <h2 className="fw-light text-start">Agregar Nuevo Producto</h2>
        <Form.Group className="mb-3 col-6">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            placeholder="Ingrese el título"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-2">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            placeholder="Ingrese la cantidad de stock"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-2">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Ingrese el precio"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-6">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Ingrese la descripción"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-6">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleImageChange}
            accept=".jpg, .jpeg, .png, .webp"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-6">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            placeholder="Ingrese la categoría"
          />
        </Form.Group>

        <Button
          size="sm"
          className="col-6 bg-success"
          onClick={handleAddProduct}
        >
          Agregar Producto
        </Button>
      </Form>
    </div>
  );
};
