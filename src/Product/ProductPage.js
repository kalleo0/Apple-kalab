import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Productpage.css"
function Productpage() {
    const {pid} = useParams();
    const [singleproduct,setsingleproduct] =useState([]);
//   const [[singleproductId,setsingleproductId]] =useState(pid)

    useEffect(()=>{
        async function fetchData(){
            const request_proudct=await axios.get("/iphones.json")
            const filtered_proudct=request_proudct.data.Products.filter( (x)=>x.product_url  == pid );
            setsingleproduct(filtered_proudct);
        }
        fetchData()
    },[]
    )

  return (
    <div>
       <section className="internal-page-wrapper top-100 ">
          <div className="container ">
            {singleproduct.map((products) => {
              let product_url = products.product_url;
              let product_name = products.product_name;
              let product_img = products.product_img;
              let product_brief_description = products.product_brief_description;
              let starting_price = products.starting_price;
              let price_range = products.price_range;
              let product_description=products.product_description
             

              let productDiv = (
                <div key={product_url} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="product_name productp">{product_name}</div>
                      <div className="product_brief_description">{product_brief_description}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting_price">
                        {`Starting at ${starting_price}`}
                      </div>
                      <div className="monthly-price">{price_range}</div>
                      { <div className="product_description">{product_description}</div> }
                    </div>
                    <div className={`col-sm-12 col-md-6`}>
                      <div className="product_img">
                        <img src={product_img } />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
    </div>
  )
}

export default Productpage

