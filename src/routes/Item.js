import { useParams, useNavigate } from 'react-router-dom';
import styles from './Item.module.css';

function Item({ list, handlerDelete }) {
  const { id } = useParams();
  const product = list.find((item) => item.id === id);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h3>Product ID: {id}</h3>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <p>Discount: {product.discount}</p>
      <button
        onClick={() => {
          handlerDelete(id);
          navigate('/view');
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default Item;
