import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Pen = ({ setCount }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([{ color: [], amount: 0 }]);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "Pen", "Pen_" + id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
        setNewData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getData();
  }, []);
  console.log(newData);
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    let col = e.target.value;
    setNewData((prev) => ({ ...prev, color: col }));
  };
  const increment = (e) => {
    e.preventDefault();
    setAmount(() => amount + 1);
    setNewData((prev) => ({ ...prev, amount: amount + 1 }));
  };
  const decrement = (e) => {
    e.preventDefault();
    amount > 0 && setAmount(() => amount - 1);
    setNewData((prev) => ({ ...prev, amount: amount - 1 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sessionStorage.getItem("Order") === null) {
      let ord = [newData];
      sessionStorage.setItem("Order", JSON.stringify(ord));
    } else {
      let orders = JSON.parse(sessionStorage.getItem("Order"));
      let exist = false;
      for (let i = 0; i < orders.length; i++) {
        if (
          orders[i].name === newData.name &&
          orders[i].color === newData.color
        ) {
          exist = true;
          orders[i].amount += newData.amount;
          break;
        }
      }
      if (!exist) {
        orders.push(newData);
        setCount((prev) => prev + 1);
      }

      sessionStorage.setItem("Order", JSON.stringify(orders));
    }

    setAmount(0);
    document.getElementsByName("color").forEach((e) => {
      e.checked = false;
    });
  };

  console.log(data.color === newData.color ? "diff" : "equal");
  return (
    data && (
      <div className="py-8 grid justify-items-center font-medium lg:justify-items-start md:text-lg lg:text-xl">
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 lg:gap-14 lg:h-fit "
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-8 md:gap-10 lg:gap-16">
            <div>
              <Link to="/Pen" className="flex text-gray-700 space-x-2">
                <p>Pen /</p>
                <p className="text-gray-500">{id}</p>
              </Link>
              <div className="mt-4 ">
                <img src={data.image} alt={data.name} className="h-full " />
              </div>
            </div>
            <div className="md:flex md:flex-col md:justify-between  md:mt-11 lg:justify-start lg:space-y-3 2xl:space-y-8">
              <p className="font-bold text-lg md:text-2xl">{data.name}</p>
              <p className="text-gray-600">LBP {data.price}</p>
              <p className="text-gray-600">Colors</p>
              <div className="flex">
                {data.color &&
                  data.color.map((v, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={v + "_" + data.name}
                        value={v}
                        name="color"
                        className={`hidden peer`}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor={v + "_" + data.name}
                        type="radio"
                        className={`cursor-pointer h-8 w-8 mr-4 mt-4 ${
                          v === "black"
                            ? "bg-slate-900"
                            : v === "red"
                            ? "bg-red-700"
                            : v === "blue"
                            ? "bg-blue-700"
                            : v === "green"
                            ? "bg-green-700"
                            : "bg-white"
                        } border-2 ${
                          v === "black"
                            ? "border-black"
                            : v === "red"
                            ? "border-red-900"
                            : v === "blue"
                            ? "border-blue-900"
                            : v === "green"
                            ? "border-green-900"
                            : "border-white"
                        }  rounded-full  focus:ring  focus:${
                          v === "black"
                            ? "ring-slate-900"
                            : v === "red"
                            ? "ring-red-700"
                            : v === "blue"
                            ? "ring-blue-700"
                            : v === "green"
                            ? "ring-green-700"
                            : "ring-white"
                        } peer-checked:ring-2  peer-checked:ring-offset-2  ${
                          v === "black"
                            ? "peer-checked:ring-slate-900"
                            : v === "red"
                            ? "peer-checked:ring-red-700"
                            : v === "blue"
                            ? "peer-checked:ring-blue-700"
                            : v === "green"
                            ? "peer-checked:ring-green-700"
                            : "peer-checked:ring-white"
                        } `}
                      ></label>
                    </div>
                  ))}
              </div>
              <div className="flex items-center space-x-9 mt-4 text-lg">
                <button onClick={decrement} className="cursor-pointer">
                  -
                </button>
                <p>{amount}</p>
                <button onClick={increment} className="cursor-pointer">
                  +
                </button>
              </div>
              <button
                className={`${
                  amount !== 0 && newData.color !== data.color
                    ? "cursor-pointer bg-blue-700"
                    : "cursor-not-allowed bg-blue-900"
                }
             py-5 rounded-md text-white mt-4 w-full`}
                disabled={amount === 0 && newData.color !== data.color}
              >
                Add to bag
              </button>
            </div>
          </div>
          <div className=" md:px-8 mt-6 md:mt-14 lg:mt-6">
            <p className="text-gray-700 font-medium text-lg md:text-xl lg:text-2xl">
              People also searched for
            </p>
            {/* Search for*/}
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-6">
              {/*first */}
              <div className=" py-4 border-b md:border-r  md:border-b-0   lg:border-b lg:border-r-0 grid grid-cols-2 ">
                <div className="mt-4">
                  <img src={data.image} alt={data.name} className="h-40" />
                </div>
                <div className="flex flex-col justify-between mt-3">
                  <p className="font-bold text-md md:text-lg">{data.name}</p>
                  <p className="text-gray-600 md:text-base">LBP {data.price}</p>
                </div>
              </div>
              {/*second */}
              <div className="border-b  md:border-b-0   lg:border-b  grid grid-cols-2 py-4">
                <div className="mt-4">
                  <img src={data.image} alt={data.name} className="h-40" />
                </div>
                <div className="flex flex-col justify-between mt-3">
                  <p className="font-bold text-md md:text-lg">{data.name}</p>
                  <p className="text-gray-600 md:text-base">LBP {data.price}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default Pen;
