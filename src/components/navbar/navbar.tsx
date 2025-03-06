import { Link } from "react-router-dom";
import { useStyles } from "./style/style";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
];

export const Navbar = () => {
  const {styles} = useStyles();
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {menuItems.map((item) => (
          <li className={styles.li} key={item.name}>
            <Link to={item.path} className={styles.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
