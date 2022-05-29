import React, { useState, useEffect } from "react";
import styled from "styled-components";
import '../dashboard testing/sidebar.css';
import { Link } from "react-router-dom";
import logo from '../../images/Asset 3@4x 1.png'
import { MdSpaceDashboard } from "react-icons/md";
import {IoIosArchive } from "react-icons/io";
import { IoIosAlbums } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import {IoMdPersonAdd } from "react-icons/io";
import { IoMdPower } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
export default function SidebarP() {
  const [currentLink, setCurrentLink] = useState(2);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <img src={logo} alt="LOGO" className = 'logo-side-mob'/>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="pt-5 links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to = {'/dash'}>
                  <MdSpaceDashboard size={'16%'} />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to = {'/packages'}>
                  <IoIosArchive size={'16%'}/>
                  <span> Packages</span>
                </Link>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <Link to = {'/subscription'}>
                  <IoIosAlbums size={'16%'}/>
                  <span> My Subscriptions</span>
                </Link>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to = {'/profile'}>
                  <IoMdPerson size={'16%'}/>
                  <span> Profile</span>
                </Link>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to = {'/invite'}>
                  <IoMdPersonAdd size={'16%'} />
                  <span> Invite a friend</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <Link to = {'/'}>
            <IoMdPower size={'10%'} />
            <span className="logout">Logout</span>
          </Link>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <Link to = {'/dash'}>
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link to = {'/packages'}>
                <IoIosArchive />
                <span> Packages</span>
              </Link>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <Link to = {'/subscription'}>
                <IoIosAlbums />
                <span> My Subscriptions</span>
              </Link>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <Link to = {'/profile'}>
                <IoMdPerson/>
                <span> Profile</span>
              </Link>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <Link to = {'/invite'}>
                <IoMdPersonAdd />
                <span> Invite a friend</span>
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background: linear-gradient(90deg, #003087 0%, #007DB2 90.62%) !important;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #fffff;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: white !important;
          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background: linear-gradient(90deg, #003087 0%, #007DB2 90.62%) !important;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #fffff;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffff;
        a {
          color: black;
        }
      }
    }
  }
`;
