import { useEffect } from "react";
import { Form, TableForm } from "@/components";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "@/redux/slices/product";

function Task2() {
  // const [products, setForm] = useState([]);
  const { products, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { getProductsThunk } = productActions;

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch, getProductsThunk]);

  const submitProduct = (product) => {
    dispatch(productActions.toggleLoading());
    setTimeout(() => {
      dispatch(productActions.add(product));
      dispatch(productActions.toggleLoading());
    }, 3000);
  };

  return (
    <>
      <div
        className={
          isLoading
            ? "fixed w-full h-full bg-white/50 backdrop-blur-sm z-10"
            : "hidden"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 150"
          className={`w-48 h-48 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-transparent ${isLoading ? "block" : "hidden"}`}
        >
          <path
            fill="none"
            stroke="#FF156D"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
      </div>
      <main className="flex flex-col gap-8">
        <Form onSubmit={submitProduct} />
        <TableForm products={products} />
      </main>
    </>
  );
}

export default Task2;
