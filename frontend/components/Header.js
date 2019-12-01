import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import Signout from "./Signout";
import User from "./User";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.1rem;
  h1 {
    float: left;
    margin: 0.5rem 1.8rem;
  }
  a h1 {
    text-decoration: none;
    color: black;
  }
  a:visited h1 {
    color: black;
  }
  nav {
    margin: 0.5rem 1.8rem;
    border: 2px solid black;
    justify-content: center;
    display: flex;
    width: fit-content;
    float: right;
    align-items: center;
    text-align: center;
  }
  nav a {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0.5rem;
    text-decoration: none;
    color: black;
  }
  nav a:visited {
    color: grey;
  }
`;

const Header = () => (
  <HeaderDiv>
    <Link href="/">
      <a>
        <h1>FOSS AAC</h1>
      </a>
    </Link>
    <User>
      {({ data }) => {
        const me = data ? data.me : null;
        return (
          <nav>
            {me && (
              <>
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
                <Link href="/">
                  <a>
                    <Signout />
                  </a>
                </Link>
              </>
            )}
            {!me && (
              <>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
                <Link href="/signin">
                  <a>Sign In</a>
                </Link>
              </>
            )}
          </nav>
        );
      }}
    </User>
  </HeaderDiv>
);

export default Header;
