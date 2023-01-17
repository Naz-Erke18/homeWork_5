import styles from "./Button.module.css";

export const Button = ({ onClick, btndisabled }) => {
  
  
  return (
    <button   className={styles.btn} onClick={onClick} disabled = {btndisabled}>
      Add User
    </button>
  );
};
