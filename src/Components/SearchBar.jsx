import { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const products = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearch(value);

    const productosFiltrados = products.filter((producto) =>
      producto.title.toLowerCase().includes(value)
    );

    setResultSearch(productosFiltrados);
  };

  const handleCloseResults = () => {
    setSearch('');
    setResultSearch([]);
  };

  const shouldShowResults = search !== '';

  return (
    <>
      <Form.Control
        value={search}
        onChange={handleSearch}
        type="search"
        placeholder=""
        className="border-0 bg-light"
        aria-label="Search"
      />
      {shouldShowResults && (
        <div className="bg-white rounded text-center boxSearch result-container">
          {resultSearch.length > 0 ? (
            resultSearch.map((product) => (
              <p key={product.id}>
                <Link to={`/products/${product.id}`} onClick={handleCloseResults}>
                  {product.title}
                </Link>
                <hr />
              </p>
            ))
          ) : (
            <p>No existe</p>
          )}
        </div>
      )}
    </>
  );
};
