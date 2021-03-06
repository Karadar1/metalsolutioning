import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useScrollSection } from "react-scroll-section";
import { useMediaQuery } from "react-responsive";
import homeIcon from "../assets/icons/home.svg";
import servicesIcon from "../assets/icons/customer-support.svg";
import portofolioIcon from "../assets/icons/images.svg";
import contactIcon from "../assets/icons/contact-book.svg";
import logo from "../assets/logo/logo.svg";

export const NavbarEx = (props) => {
  const isTablet = useMediaQuery({ query: "(max-device-width: 767px)" });

  const acasaSection = useScrollSection("acasa");
  const contactSection = useScrollSection("contact");
  const serviciiSection = useScrollSection("servicii");
  const portofoliuSection = useScrollSection("portofoliu");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const isToggleMenu = (word, img) => {
    if (isTablet) {
      return (
        <>
          <img src={img} alt={`${word} icon`} /> {word}
        </>
      );
    }
    return <>{word}</>;
  };

  return (
    <div>
      {isTablet ? (
        <Navbar color="light" light fixed="top" expand="md">
          <a href="/">
            <img src={logo} alt={logo} className="logoImg" />
          </a>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <div
                  onClick={() => {
                    acasaSection.onClick();
                    toggle();
                  }}
                  // selected={acasaSection.selected}
                  className={`listItem ${
                    acasaSection.selected ? "listItemActive" : ""
                  }`}
                >
                  {isToggleMenu("Acasa", homeIcon)}
                </div>
              </NavItem>
              <NavItem>
                <div
                  onClick={() => {
                    serviciiSection.onClick();
                    toggle();
                  }}
                  // selected={acasaSection.selected}
                  className={`listItem ${
                    serviciiSection.selected ? "listItemActive" : ""
                  }`}
                >
                  {isToggleMenu("Servicii", servicesIcon)}
                </div>
              </NavItem>
              <NavItem>
                <div
                  onClick={() => {
                    portofoliuSection.onClick();
                    toggle();
                  }}
                  // selected={acasaSection.selected}
                  className={`listItem ${
                    portofoliuSection.selected ? "listItemActive" : ""
                  }`}
                >
                  {isToggleMenu("Portofoliu", portofolioIcon)}
                </div>
              </NavItem>
              <NavItem>
                <div
                  onClick={() => {
                    contactSection.onClick();
                    toggle();
                  }}
                  // selected={acasaSection.selected}
                  className={`listItem ${
                    contactSection.selected ? "listItemActive" : ""
                  }`}
                >
                  {isToggleMenu("Contact", contactIcon)}
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      ) : (
        <nav className="navBar">
          <a href="/" className="logo">
            <img src={logo} alt={logo} id="logoImg" />
          </a>

          <ul className="nav_links">
            <li
              onClick={() => {
                acasaSection.onClick();
              }}
              // selected={acasaSection.selected}
              className={`listItem ${
                acasaSection.selected ? "listItemActive" : ""
              }`}
            >
              acasa
            </li>
            <li
              onClick={() => {
                serviciiSection.onClick();
              }}
              // selected={serviciiSection.selected}
              className={`listItem ${
                serviciiSection.selected ? "listItemActive" : ""
              }`}
            >
              servicii
            </li>

            <li
              onClick={() => {
                portofoliuSection.onClick();
              }}
              // selected={acasaSection.selected}
              className={`listItem ${
                portofoliuSection.selected ? "listItemActive" : ""
              }`}
            >
              portofoliu
            </li>

            <li
              onClick={() => {
                contactSection.onClick();
              }}
              // selected={contactSection.selected}
              className={`listItem ${
                contactSection.selected ? "listItemActive" : ""
              }`}
            >
              contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
