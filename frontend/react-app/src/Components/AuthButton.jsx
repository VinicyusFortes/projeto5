// components/AuthButton.jsx
function AuthButton({ type = "button", onClick, children, className }) {
  return (
    <button type={type} className={`btn ${className} w-100`} onClick={onClick}>
      {children}
    </button>
  );
}

export default AuthButton;
