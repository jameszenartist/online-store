function Header(props) {
  return <h1>{props.title ? props.title : "Default title"}</h1>;
}

export default Header;
