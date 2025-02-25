import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{
      top: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 10px',
      color: 'white',
      width: '100%',
      boxSizing: 'border-box', 
    }}>
      <ul style={{
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.2rem',
          }}>
            Home
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about" style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.2rem',
          }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
