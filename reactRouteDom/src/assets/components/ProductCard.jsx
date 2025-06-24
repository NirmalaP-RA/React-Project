import React from 'react'
import ProductListing from './ProductListing';
import { Link } from 'react-router';

export default function ProductCard({products}) {
    // after destructure it lets do some work of fetching value
    // first of all check in your product api that what is keyname of image value

    var discount_price=(products.price*products.discount_percentage)/100;
    // here we calculating discount price after this we find out actual price
    var discount_price=products.price-discount_price;


    // after this what remains is sortion so watchout in your api that sorting_name key available or not add it
  return (
    <>
       <div class="col">

                        <div class="card h-100 product-card">

                        <div class="position-relative">
                                  <img src={products.image} class="card-img-top" alt="Ultra HD 4K Smart TV" />
                                  {/* here image is key name of  product image value to get product images */}
                                  <span class="position-absolute top-0 start-0 badge bg-danger m-2">
                                    {products.brand_name}
                                    {/* here we are showing brand name */}
                                  </span>
                        </div>

                        <div class="card-body">
                          <Link class="text-decoration-none text-black" to={`${'products/product-details/'+product.id}`}>
                            <h5 class="card-title">{products.name}</h5>
                            {/* here in name key we get product name */}
                          </Link>
                          <p class="card-text text-muted small mb-0">{products.category_name}</p>

                            <div class="d-flex align-items-center mb-2">
                                  <div class="text-warning me-1">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star-half-alt"></i>
                                  </div>
                                  <span class="text-muted small">
                                  {/* 4.5 */}
                                  {products.rating}
                                  </span>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">

                            </div>
                            <div>
                              <span class="fs-5 fw-bold">Rs.{discount_price}</span>
                              {/* here we dont use{products.discount_price} method because in our api this key is available so directly fetch */}
                              <span class="text-decoration-line-through text-muted ms-2">Rs. {products.price}</span>
                              {/* here we are showing actual price */}
                            </div>

                            <button class="btn btn-sm btn-outline-primary">
                              <i class="fa fa-shopping-cart"></i>
                            </button>

                        </div>
                      </div>
                    </div>
    </>
  )
}


// after completion of ProductListing page dynamically i want to increase my products
// how?
// According to our ui two product are less so i want add it
// so in our given api you found parameter name of limit send this parameter
// but now where to send parameter in api?
// so in useEffect hook where we called our api their we pass that parameter using this {params:{}}
