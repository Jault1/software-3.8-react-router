import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import styles from "./Add.module.css";
//import Button from "../components/Button";

function Add({ handlerAdd }) {
  const navigate = useNavigate();
  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  return (
    <>
      <h2>Add</h2>
      {/* Build out the form to add a new product */}
      <form className={styles.container}>
        <div className={styles.form}>
        <label>ID</label> <br />
          <input className={styles.input} value={values.id}
            onChange={handleInputChange}
            name="id"
            label="ID"/>

          <br />
          <br />

          <label>Product Name</label> <br />
          <input className={styles.input} value={values.name}
            onChange={handleInputChange}
            name="name"
            label="Product Name"/>
          <br />
          <br />
          <label>Quantity</label> <br />
          <input className={styles.input} value={values.quantity}
            onChange={handleInputChange}
            name="quantity"
            label="Quantity"/>
          <br />
          <br />
          <label>Price</label> <br />
          <input className={styles.input} value={values.price}
            onChange={handleInputChange}
            name="price"
            label="Price"/> <br />
          <br />
          <label>Discount</label> <br />
          <input className={styles.input} value={values.discount}
            onChange={handleInputChange}
            name="discount"
            label="Discount"/> <br />
          <br />
          <button
            label="Add Product"
            onClick={() => {
              handlerAdd(values);
              navigate("/view");
            }}
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}
export default Add;
