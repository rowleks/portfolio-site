import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <span>Rowland Momoh</span>
      <span>&copy; {new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
