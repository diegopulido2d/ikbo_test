import React, { useState } from 'react'
import { useGetAllProductsQuery, useAddNewProductMutation } from "../../app/service/dummyData"
import './styles.css'

const QuoteAccept = () => {
 
  const { data: productsData, isError: isProductsError, isLoading: isProductsLoading } = useGetAllProductsQuery();
  const [ addNewQuote ] = useAddNewProductMutation();
  const [acceptedQuotes, setAcceptedQuotes] = useState([]);
  const products = productsData?.products || [];

  if (isProductsError) {
    return <p>Error cargando ofertas</p>;
  }

  const handleAcceptQuote = async (title, price, description) => {
    try{
        const newProduct = {
            title: title,
            price: price,
            description: description, 
        }
        const response = await addNewQuote(newProduct).unwrap();
        setAcceptedQuotes((prev) => [...prev, response]);
    }catch(err) {
        console.error("Failed to add product:", err);
  }}

  return (
    <div className="quote-accept">
     <div className="quote-list">
      <h3>Todas las ofertas:</h3>
        {isProductsLoading ? <p>Cargando...</p> : (
            <ul>
            {products.length ? products.map(product => (
                <li key={product.id}>
                  <div>
                  <h4>{product.title} - ${product.price}</h4>
                  <button onClick={() => handleAcceptQuote(product.title, product.price, product.description)}>Aceptar oferta</button>
                  </div>
                    
                    <p>{product.description}</p>
                </li>
            )) : <p>No se han encontrado ofertas</p>}
        </ul>
        )}
     </div>
     <div className="accepted-quotes">
      <h3>Ofertas aceptadas:</h3>
        <ul>
          {acceptedQuotes.length > 0 ? acceptedQuotes.map((quote, index) => (
            <li key={index}>
                  <div>
                  <h4>{quote.title} - ${quote.price}</h4>
                  </div>
                    <p>{quote.description}</p>
            </li>)) : <p>No se han aceptado ofertas</p>}
        </ul>
     </div>   
    </div>
    
  )
}

export default QuoteAccept