import React, { useState, useEffect } from 'react'
import { useGetAllProductsQuery, useAddNewProductMutation } from "../../app/service/dummyData"
import './styles.css'

const QuoteAccept = () => {
  const { data: productsData, isError: isProductsError, isLoading: isProductsLoading } = useGetAllProductsQuery();
  const [addNewQuote] = useAddNewProductMutation();

  const [acceptedQuotes, setAcceptedQuotes] = useState([]);
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    if (productsData?.products) {
      setLocalProducts(productsData.products);
    }
  }, [productsData]);

  if (isProductsError) {
    return <p>Error cargando ofertas</p>;
  }

  const handleAcceptQuote = async (id, title, price, description) => {
    try {
      const newProduct = { title, price, description };
      const response = await addNewQuote(newProduct).unwrap();
      setAcceptedQuotes((prev) => [...prev, response]);
      setLocalProducts((prev) => prev.filter(product => product.id !== id));
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  const handleDeleteProduct = (id) => {
    setLocalProducts((prev) => prev.filter(product => product.id !== id));
  };

  return (
    <div className="quote-accept">
      <div className="quote-list">
        <h3>Todas las ofertas:</h3>
        {isProductsLoading ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {localProducts.length ? (
              localProducts.map(product => (
                <li key={product.id}>
                  <div>
                    <h4>{product.title} - ${product.price}</h4>
                    <div>
                      <button onClick={() => handleAcceptQuote(product.id, product.title, product.price, product.description)}>
                      Aceptar oferta
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      Rechazar oferta
                    </button>
                    </div>
                  </div>
                  <p>{product.description}</p>
                </li>
              ))
            ) : (
              <p>No se han encontrado ofertas</p>
            )}
          </ul>
        )}
      </div>

      <div className="accepted-quotes">
        <h3>Ofertas aceptadas:</h3>
        <ul>
          {acceptedQuotes.length > 0 ? (
            acceptedQuotes.map((quote, index) => (
              <li key={index}>
                <div>
                  <h4>{quote.title} - ${quote.price}</h4>
                </div>
                <p>{quote.description}</p>
              </li>
            ))
          ) : (
            <p>No se han aceptado ofertas</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default QuoteAccept;
