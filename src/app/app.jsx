import React from "react";
import { products } from "../mock";
import ProductPage from "../product-page/product-page";
import Catalog from "../catalog/catalog";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "../layout/layout";


function ProducOr404({ products }) {
    const { code } = useParams()
    const product = products.find((product) => product.code.toString() === code);
    return product ? (<ProductPage product={product} />) : (<h1> 404 страница не найдена</h1>)
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Catalog products={products} />} />
                    <Route path="product">
                        <Route path=":code" element={<ProducOr404 products={products} />} />
                    </Route>
                </Route>



            </Routes>
        </BrowserRouter>
    )

}