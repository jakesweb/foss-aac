import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

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

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link href="/">
          <a>
            <h1>FOSS AAC</h1>
          </a>
        </Link>
        <nav>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </HeaderDiv>
    );
  }
}

export default Header;
