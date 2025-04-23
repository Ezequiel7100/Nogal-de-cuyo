const Container = ({ children }) => {
  return (
    <div
      style={{
        margin: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};
export default Container;
