import styles from "./Input.module.css";

export const Input = ({ label, inputType, placeholder,...rest}) => {
  console.log(rest);
  return (
    <div>
      <div className={styles.input}>
        <label className={styles.input_label}>{label}</label>
        <input
          type={inputType}
          className={styles.input_label}
          placeholder={placeholder}
         {...rest}
        />
      </div>
    </div>
  );
};
