import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [kart, setKart] = useState([]);
  const [kartPrice, setKartPrice] = useState(0);

  useEffect(() => {
    setKartPrice(0);

    let x = kart.flat().map((product) => {
      return parseInt(product.numinkart) * parseInt(product.price);
    });
    setKartPrice(x.reduce((a, b) => a + b, 0));
  }, [kart]);

  let [products, setProducts] = useState([
    {
      id: "1",
      title: "Iphone",
      price: 450,
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
    },
    {
      id: "2",
      title: "Macbook Pro",
      price: 900,
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
    },
    {
      id: "3",
      title: "Ipad",
      price: 650,
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80",
    },
    {
      id: "4",
      title: "Earphones",
      price: 90,
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
    },
    {
      id: "5",
      title: "Camera",
      price: 900,
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80",
    },
    {
      id: "6",
      title: "Camera lENS",
      price: 499,
      numinkart: 0,
      src: "https://images.unsplash.com/photo-1582994254571-52c62d96ebab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ]);

  return (
    <div className="App">
      <h1>ElectroMarket</h1>
      <div className="products">
        {products.map((product, idx) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.src} alt="product"></img>
              <h3>{product.title}</h3>
              <p>
                {" "}
                <b>{`${product.price} €`}</b>
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  products[idx].numinkart = products[idx].numinkart + 1;

                  setKart([
                    products.filter((product) => product.numinkart >= 1),
                  ]);
                }}
              >
                add to cart
                <span className="num-of-prods-in-kart">
                  {" "}
                  {product.numinkart > 0 && product.numinkart}
                </span>
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="kart-heading">Kart</h2>
        {kart.length !== 0 ? (
          <div className="kart">
            <div className="kart-products">
              {kart.flat().map(
                (product, idx) =>
                  product.numinkart > 0 && (
                    <div key={idx} className="kart-product">
                      <h2 className="kart-title">{product.title}</h2>
                      <div className="change-buttons">
                        <span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              console.log(product.id);
                              setProducts(
                                products.map((prod) => {
                                  if (prod.id === product.id) {
                                    prod.numinkart = prod.numinkart - 1;
                                  }
                                  return prod;
                                })
                              );
                              setKart(
                                kart.map((prod) => {
                                  if (prod.id === product.id) {
                                    prod.numinkart = prod.numinkart - 1;
                                  }
                                  return prod;
                                })
                              );
                            }}
                          >
                            -
                          </button>
                        </span>{" "}
                        {product.numinkart}{" "}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(product.id);
                            setProducts(
                              products.map((prod) => {
                                if (prod.id === product.id) {
                                  prod.numinkart = prod.numinkart + 1;
                                }
                                return prod;
                              })
                            );
                            setKart(
                              kart.map((prod) => {
                                if (prod.id === product.id) {
                                  prod.numinkart = prod.numinkart + 1;
                                }
                                return prod;
                              })
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                      <p className="price-para">Price: {product.price} €</p>
                    </div>
                  )
              )}
              <div className="kart-product">
                <h2>Total</h2>
                <p>Price: {kartPrice} €</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="kart">Kart is Empty, Add Items!</div>
        )}
      </div>
    </div>
  );
}

export default App;
