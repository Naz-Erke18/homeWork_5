import "./Input.css";

export const Input = ({ label, inputType, placeholder,...rest}) => {
  console.log(rest);
  return (
    <div>
      <div className="input">
        <label className="input_label">{label}</label>
        <input
          type={inputType}
          className="input_label"
          placeholder={placeholder}
         {...rest}
        />
      </div>
    </div>
  );
};
