import React, { useState } from "react";
import Data from "./Data/index.js";
import MyName from "./Components/MyName/index.jsx";

const App = () => {
  const initialProducts = Data.date.products;
  const [products, setProducts] = useState(initialProducts);

  const sortProducts = (property, order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "asc") {
        return a[property] - b[property];
      } else {
        return b[property] - a[property];
      }
    });
    setProducts(sortedProducts);
  };

  const handleSortClick = (property, order) => {
    sortProducts(property, order);
  };

  return (
    <div className="container max-w-[1100px]">
      <MyName />

      <nav className="flex justify-center gap-5 navbar bg-base-100 mt-5 border-2 border-indigo-600 rounded-lg flex-wrap">
        <button
          id="priceSortBtnLowtoHigh"
          className="btn btn-success"
          onClick={() => handleSortClick("price", "asc")}
        >
          Price: Low to High
        </button>
        <button
          id="priceSortBtnHightoLow"
          className="btn btn-success"
          onClick={() => handleSortClick("price", "desc")}
        >
          Price: High to Low
        </button>
        <button
          id="ratingSortBtnLowtoHigh"
          className="btn btn-success"
          onClick={() => handleSortClick("rating", "asc")}
        >
          Rating: Low to High
        </button>
        <button
          id="ratingSortBtnHightoLow"
          className="btn btn-success"
          onClick={() => handleSortClick("rating", "desc")}
        >
          Rating: High to Low
        </button>
      </nav>

      <div
        id="pruducts-wrapper"
        className="my-6 border-2 border-indigo-600 rounded-lg p-6 flex gap-10 flex-wrap justify-center"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="card w-80 bg-base-100 shadow-xl cursor-pointer"
            onClick={() => document.getElementById(index).showModal()}
          >
            <figure>
              <img
                className="h-48 w-80"
                src={item.thumbnail}
                alt={item.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="rounded-lg px-2 badge-secondary">
                  {item.brand}
                </div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline bg-orange-500 text-white text-lg px-2 py-4">
                  {item.price} $
                </div>
                <div className="badge badge-outline bg-orange-500 text-white text-lg px-2 py-4">
                  {item.rating} &#11088;
                </div>
              </div>
            </div>

            <dialog id={index} className="modal">
              <div className="modal-box">
                <div className="modal-action flex flex-col gap-6 items-center">
                  <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img src={item.images[0]} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                      <img src={item.images[1]} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                      <img src={item.images[2]} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    <h1 className="text-2xl text-center">{item.title}</h1>
                    <span>id: {item.id}</span>
                    <p>Price: {item.price} $</p>
                    <p>Discount Percentage:{item.discountPercentage}</p>
                    <p>Rating: {item.rating} &#11088;</p>
                    <p>Stock: {item.stock}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Category: {item.category}</p>
                  </div>
                  <button className="btn btn-success w-full text-lg">
                    Order a product
                  </button>
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
