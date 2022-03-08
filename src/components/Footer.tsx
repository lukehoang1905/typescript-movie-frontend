import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeartOutline } from "styled-icons/typicons";
import "./Footer.scss";
import { MyLogo } from "./Header";

export const MyHeart = styled(HeartOutline)`
  color: #71fadc;
`;
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content ">
        <div className="footer__content__logo">
          <div className="logo">
            <MyLogo />
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
        <div className="signature">
          <p>
            @2022 Made with{" "}
            <span>
              <MyHeart size={20} />
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/lukehoang1905"
              target={"_blank"}
              rel="noreferrer"
            >
              Tuan Hoang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
