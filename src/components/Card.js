import styles from "./Card.module.css";
import Button from "./Button";
import Input from "./Input";

function Card({
  name,
  count,
  price,
  discount,
  quantity,
  handlerMinus,
  handlerPlus,
  handlerChangeName,
  handlerChangePrice,
  // handlerChangeQuantity,
  // handlerChangeDiscount,

  handlerAddProduct
}) {
  return (
    // Build out the top section and pass it UP to Product
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
         <Button label="➖" onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label="➕" onClick={handlerPlus} /> 
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      {/* <div className={styles.quantity}>{`Quantity ${quantity}`} </div> */}
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label="Product Name" onChange={handlerChangeName} />
        <Input value={price} label="Price" onChange={handlerChangePrice} />
        {/* <Input value={quantity} label="Quantity" onChange={handlerChangeQuantity} />
        <Input value={discount} label="Discount" onChange={handlerChangeDiscount} /> */}
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} />
    </div>
  );
}
export default Card;