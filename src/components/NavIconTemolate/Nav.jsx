import "./Nav.css"
import { Link } from "react-router-dom"
const Nav = ({Icon,ink, title,onClick}) => {
  return (
    <div className="Nav" onClick={onClick}>
      {Icon && <Icon className="icon"></Icon>}

      <h1>
     
        <Link className="linkcolor" to={ink}> {title ? title : null}</Link>
      </h1>
    </div>
  );
}

export default Nav