import { useState, useEffect } from "react";

const CheckOut = () => {
  const [data, setData] = useState(
    () => JSON.parse(sessionStorage.getItem("Order")) || []
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo")) || {}
  );

  let total = 0;

  const handleInfo = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  };
  useEffect(() => {
    localStorage.setItem("UserInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const handleSubmit = () => {};
  return (
    <>
      {/*<Header counter={ JSON.parse(localStorage.getItem("Order")).length}/>*/}
      <div className=" h-screen w-full flex justify-between ">
        <form
          className="mx-4  w-full md:mx-6 md:block  lg:flex lg:justify-between "
          onSubmit={handleSubmit}
        >
          <div className="lg:w-[40%] lg:ml-11">
            <div className="border-b-2 py-8">
              <p className="font-bold text-lg text-gray-800 lg:text-2xl">
                Contact Information
              </p>
              <div className="mt-5 grid gap-y-3">
                <label
                  htmlFor="Mail"
                  className="font-semibold text-md text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="Mail"
                  id="Mail"
                  className="rounded-md border-gray-300"
                  onChange={handleInfo}
                  value={userInfo.Mail}
                ></input>
              </div>
            </div>
            <div className="py-8 grid grid-cols-1 gap-y-3 border-b-2">
              <p className="font-bold text-lg text-gray-800 lg:text-2xl">
                Shipping Information
              </p>
              <label
                htmlFor="first_name"
                className="font-semibold text-md text-gray-500"
              >
                First name
              </label>
              <input
                type="text"
                name="fname"
                id="first_name"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.first_name}
              ></input>
              <label
                htmlFor="last_name"
                className="font-semibold text-md text-gray-500"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.last_name}
              ></input>
              <label
                htmlFor="Address"
                className="font-semibold text-md text-gray-500"
              >
                Address
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.Address}
              ></input>
              <label
                htmlFor="city"
                className="font-semibold text-md text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.city}
              ></input>
              <label
                htmlFor="street"
                className="font-semibold text-md text-gray-500"
              >
                Street
              </label>
              <input
                type="text"
                name="street"
                id="street"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.street}
              ></input>
              <label
                htmlFor="appartment"
                className="font-semibold text-md text-gray-500"
              >
                Appartment
              </label>
              <input
                type="text"
                name="appartment"
                id="appartment"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.appartment}
              ></input>
              <label
                htmlFor="phone"
                className="font-semibold text-md text-gray-500"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="rounded-md border-gray-300"
                onChange={handleInfo}
                value={userInfo.phone}
              ></input>
            </div>
          </div>
          {/*PC*/}
          <div className="lg:w-[40%] lg:px-8 py-8 lg:bg-slate-50 z-10 lg:h-screen lg:mt-0">
            <p className="font-bold text-lg text-gray-800 lg:text-2xl">
              Order summary
            </p>
            <div
              className="hidden lg:block h-96  overflow-auto  mt-6  px-4  w-full snap-y "
              id="items"
            >
              {data &&
                data.map((val, index) => {
                  total += parseInt(val.price) * parseInt(val.amount);
                  return (
                    <div
                      className="border-b border-gray-300 w-full py-4 flex justify-between snap-start "
                      key={index}
                    >
                      <div className="group h-fit flex gap-4">
                        <div className=" overflow-hidden rounded-md  group-hover:opacity-75 aspect-0 ">
                          <img
                            src={val.image}
                            alt={val.name}
                            className=" h-30 w-40 bject-cover object-center lg:h-60"
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
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-center">
                        <p className="text-sm font-medium text-gray-600 md:text-md lg:text-lg">
                          LBP {parseInt(val.price) * parseInt(val.amount)}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="">
              <div className="mt-4 flex items-center justify-between font-semibold text-md text-gray-500 md:text-md lg:text-lg ">
                <p>Subtotal</p>
                <p>LBP {total}</p>
              </div>
              <div className="mt-4 flex items-center justify-between font-semibold text-md text-gray-500 md:text-md lg:text-lg ">
                <p>Delivery</p>
                <p>LBP 80000</p>
              </div>
              <div className="mt-4 flex items-center justify-between font-semibold text-md text-gray-500 md:text-md lg:text-lg ">
                <p>Total</p>
                <p>LBP 160000</p>
              </div>
              <button className="mt-6 py-4 bg-blue-600 text-white font-medium w-full max-w-3xl rounded-md md:text-md lg:text-lg active:ring-3 transition ease-in-out delay-150 active:-translate-y-0.5 active:scale-105 active:accent-indigo-700 active:shadow-lg active:shadow-blue-500/50">
                Confirm order
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckOut;
