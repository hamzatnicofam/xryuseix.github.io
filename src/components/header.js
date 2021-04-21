import React from 'react'
import { Link } from 'gatsby'

import '../components/header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = (props) =>  (
  <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="mr-auto">
          <Nav as="ul" className="mr-auto">
            <Nav.Item as="li">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/apps">
                Applications
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/achievement">
                Achievement
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/ctf">
                CTF
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <a
                class="nav-link"
                href="https://github.com/xryuseix/xryuseix.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 1 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </Nav.Item>
            <Nav.Item as="li">
              <form id="form1" action="/search" method="get">
                <input id="s" name="s" type="text" placeholder="xryuseix CTF!" style={{ display: 'none' }} />
                <input type="submit" value="search" style={{ display: 'none' }} />
              </form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

export default Header