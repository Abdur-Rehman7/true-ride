const Footer = () => {
  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
