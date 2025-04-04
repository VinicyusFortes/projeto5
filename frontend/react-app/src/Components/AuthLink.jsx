
import { Link } from "react-router-dom";

function AuthLink({ to, children, className }) {
  return (
    <Link to={to} className={`btn ${className}`}>
      {children}
    </Link>
  );
}

export default AuthLink;
