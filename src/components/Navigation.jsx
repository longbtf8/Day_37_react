import { NavLink } from "react-router";

const items = [
  { path: "/", title: "Home" },
  { path: "/editAvatar", title: "EditAvatar" },
  { path: "/useRef", title: "UseRef" },
  { path: "/reactMemo", title: "ReactMemo" },
];
const Navigation = () => {
  <nav>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>;
};
export default Navigation;
