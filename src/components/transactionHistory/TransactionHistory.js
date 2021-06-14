import React from "react";
import styles from "./transactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHead}>
          <th className={styles.tableHeadRow}>Type</th>
          <th className={styles.tableHeadRow}>Amount</th>
          <th className={styles.tableHeadRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className={styles.tableRowFull}>
              <td className={styles.tableRow}>{item.type}</td>
              <td className={styles.tableRow}>{item.amount}</td>
              <td className={styles.tableRow}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
