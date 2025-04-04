function AuthLayout({ title, children }) {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
