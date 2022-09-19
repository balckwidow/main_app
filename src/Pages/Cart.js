import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ setCount }) => {
  const [data, setData] = useState(
    () => JSON.parse(sessionStorage.getItem("Order")) || []
  );
  let total = 0;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    sessionStorage.setItem("Order", JSON.stringify(data));
  }, [data]);

  const removeItem = (e) => {
    let id = e.target.id;
    e.stopPropagation();
    let v = data[id].name + data[id].color;
    setData((prev) => prev.filter((val) => val.name + val.color !== v));
    setCount((prev) => prev - 1);
  };

  const increment = (e) => {
    let i = e.target.id;
    let list = [...data];
    let amount = list[i].amount + 1;
    list[i] = { ...list[i], amount: amount };
    setData(list);
    
  };
  const decrement = (e) => {
    let i = e.target.id;
    let list = [...data];
    let amount = list[i].amount - 1;
    list[i] = { ...list[i], amount: amount };
    setData(list);
    if(list[i].amount === 0){
      let v = data[i].name + data[i].color;
      setData((prev) => prev.filter((val) => val.name + val.color !== v));
      setCount((prev) => prev - 1);
      }
  };

  return (
    <div className="mx-2 lg:mx-0 lg:w-full">
      <div className="mt-1 bg-white lg:w-full">
        <div className="py-4 px-4  sm:px-6  lg:flex lg:flex-col  lg:items-center lg:px-8 lg:w-full">
          <h2 className="text-2xl font-bold tracking-tight text-gray-700   lg:text-3xl  ">
            Shopping Cart
          </h2>
          {data.length === 0 && (
            <p className="mt-6 text-md text-gray-500 font-bold lg:text-2xl ">
              No Items Found
            </p>
          )}
          <div
            className="mt-6 grid grid-cols-1 gap-x-6 self-center max-w-3xl lg:w-full h-96 md:h-[600px] lg:h-96 overflow-auto lg:px-2"
            id="items"
          >
            {data &&
              data.map((val, index) => {
                total += parseInt(val.price) * parseInt(val.amount);
                return (
                  <div
                    className="border-b w-full py-4 flex justify-between snap-start h-fit"
                    key={index}
                  >
                    <div className="group h-fit flex gap-4">
                      <div className="min-h-min overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-0 ">
                        <img
                          src={val.image}
                          alt={val.name}
                          className="h-40 object-fit object-center lg:h-60"
                        />
                      </div>
                      <div className="flex flex-col w-fit gap-1">
                        <h3 className=" text-sm font-semibold text-gray-800 md:text-md lg:text-lg">
                          {val.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 md:text-md lg:text-lg">
                          {val.color}
                        </p>
                        <p className="text-sm font-medium text-gray-500 md:text-md lg:text-lg">
                          Qantity:{val.amount}
                        </p>
                        <div className="flex items-center space-x-9 mt-4 text-lg">
                          <button
                            onClick={decrement}
                            id={index}
                            className="cursor-pointer"
                          >
                            -
                          </button>
                          <p>{val.amount}</p>
                          <button
                            onClick={increment}
                            id={index}
                            className="cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <p className="text-sm font-medium text-gray-600 md:text-md lg:text-lg">
                        LBP {parseInt(val.price) * parseInt(val.amount)}
                      </p>
                      <button
                        className="text-blue-700 text-sm font-medium cursor-pointer md:text-md lg:text-lg"
                        id={index}
                        onClick={removeItem}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="mx-auto block w-full max-w-3xl">
            <div className="mt-4 flex items-center justify-between font-bold text-md text-gray-700 md:text-md lg:text-lg ">
              <p>Subtotal</p>
              <p>LBP {total}</p>
            </div>
            <p className="mt-4 text-gray-500">
              Shipping will be calculated at checkout.
            </p>
          </div>
          <button
            className="mt-6 py-4 bg-blue-600 text-white font-medium w-full max-w-3xl rounded-md md:text-md lg:text-lg active:ring-3 transition ease-in-out delay-150 active:-translate-y-1 active:scale-110 active:accent-indigo-700 active:shadow-lg active:shadow-blue-500/50"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
