import "./Button.css";

export const Button = ({ onClick, btndisabled }) => {
  
  
  return (
    <button   className="btn" onClick={onClick} disabled = {btndisabled}>
      Add User
    </button>
  );
};
