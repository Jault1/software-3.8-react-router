import styles from "./ViewList.module.css";

// Pass the 'list' into the HTML below and pass it UP to Product
function ViewList({ list, sum, noDiscTtl }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price ($)</th>
            <th>Quantity</th>
            <th>Discount (%)</th>            
            <th>Total price ($ discounted)</th>            
          </tr>
        </thead>
        <tbody>
          {/* Map the list using 'map' and the 'arrow function' */}
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.discount}%</td>
              {/* <td>{item.price * item.discount}</td> */}
              <td>${item.total}</td> 

            </tr>
          ))}
        </tbody>
      </table>
      {/* Create a new div to show the total (sum) */}
      <div className={styles.containerSum}>
        Total discounted sum: $<span className={styles.sum}>{sum.toFixed(2)}</span>
      </div>      
      {/* Create a new div to show the total sum/ total discount/total savings */}
      <div className={styles.containerSum}>
        Total non-discounted sum: $<span className={styles.sum}>{noDiscTtl.toFixed(2)}</span>
      </div>      
      {/* Create a new div to show the total sum/ total discount/total savings */}
      <div className={styles.containerSum}>
        Total Savings: $<span className={styles.sum}>{(noDiscTtl-sum).toFixed(2)}</span>
      </div>            
    </div>
  );
}
export default ViewList;