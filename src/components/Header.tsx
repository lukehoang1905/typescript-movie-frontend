import { Link, useLocation } from "react-router-dom";
import { PlayStore } from "styled-icons/boxicons-logos";
import styled from "styled-components";

import "./Header.scss";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Top Rated", path: "/movie?collection=top-rated" },
  { name: "Popular", path: "/movie?collection=popular" },
];
const logoTitle = "BOOVIE";

export const MyPlayStore = styled(PlayStore)`
  color: #71fadc;
`;
const Header = () => {
  const { pathname, search } = useLocation();
  const [scroll, setScroll] = useState(false);
  const activeLink = pathname + search;

  useEffect(() => {
    const handler = () => {
      setScroll(true);
      setTimeout(() => {
        setScroll(false);
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`header ${scroll ? "scroll" : "noScroll"}`}>
      <div className="logo__wrapper">
        <MyPlayStore size={"3rem"} title="BooMovie" />
        {logoTitle.split("").map((e, idx) => {
          return <span key={e + idx}>{e}</span>;
        })}
      </div>

      <ul className="nav__links">
        {navLinks.map(({ name, path }) => {
          return (
            <li className={`${path === activeLink && "active"} `} key={name}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
