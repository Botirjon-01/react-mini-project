import "./Nav.css"
import { Link } from "react-router-dom"
const Nav = ({Icon,ink, title,onClick}) => {
  return (
    <Link className="linkcolor" to={ink}>
      <div className="Nav" onClick={onClick}>
        {Icon && <Icon className="icon"></Icon>}
        <h1> {title ? title : null}</h1>
      </div>
    </Link>
  );
}

export default Nav