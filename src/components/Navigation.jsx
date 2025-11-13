import { NavLink } from "react-router";
const items = [
  { path: "/", title: "Home" },
  { path: "/editAvatar", title: "EditAvatar" },
  { path: "/useRef", title: "UseRef" },
  { path: "/reactMemo", title: "ReactMemo" },
];
const Navigation = () => {
  return (
    <nav className="p-4 border-b-2">
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-500 bg-black" : ""} p-2`
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
