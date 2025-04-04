// components/AuthLink.jsx
import { Link } from "react-router-dom";

function AuthLink({ to, children, outline = false }) {
  const classes = `btn ${
    outline ? "btn-outline-primary" : "btn-primary"
  } w-100`;
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export default AuthLink;
