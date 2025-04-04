// components/AuthTextLink.jsx
import { Link } from "react-router-dom";

function AuthTextLink({ to, children }) {
  return (
    <p className="text-center mt-2">
      <Link to={to}>{children}</Link>
    </p>
  );
}

export default AuthTextLink;
