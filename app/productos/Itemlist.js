"use client"
import { useState, useEffect} from "react";
import { FilterContainer } from "../componnents/common/filters/filterContainer";
import { ProductCard } from "../componnents/common/ProductCard";
import Loader from "../componnents/common/loader";
import { ErrorMsj } from "../componnents/common/MsjError";


export const ItemList = ({products})  =>  {

    const [category, setCategory] = useState("Todos")
    const [price, setPrice] = useState()
    const [filteredProducts, setFilteredProducts] = useState([]);

    const priceTarget = (e) => {
            let price = e.target.innerText;
            setPrice(price)
        };
    useEffect(() => {
       let filtered = products;
       if(category !== "Todos"){
        filtered = filtered.filter((producto) => producto.categoria === category);
       }
       if(price){
        if(price === "10 - 30$") {
            filtered = filtered.filter((producto) => producto.precio >= 10 && producto.precio <= 30);
        } else if(price === "30 - 50$") {
            filtered = filtered.filter((producto) => producto.precio >= 30 && producto.precio <= 50);
        } else if(price === "+50$") {
            filtered = filtered.filter((producto) => producto.precio >= 50);
        }

       }
        setFilteredProducts(filtered);
         
        }, [category, products, price]);
    
    
    const categoryTarget = (e) => {
        let categoria = e.target.innerText;
        setCategory(categoria);
    }

    return (
        <>
        {products.length === 0 && <Loader/>}
        <FilterContainer  categoryTarget={categoryTarget} categoria={category} priceTarget={priceTarget} precios={price}/>
        
        {filteredProducts.length === 0 ? <ErrorMsj msj="Esta Categoria no tiene productos en ese rango de precios, intentelo nuevamente con otro rango!"/> : 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((producto) => (
               <ProductCard key={producto.id} imagen={producto.imagen} categoria={producto.categoria} titulo={producto.nombre} desc={producto.descripcionCorta} id={producto.id} precioItem={producto.precio} />
        ))}
        </div>
}
        </>
    )
}
