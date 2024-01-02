import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";

import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange = (state) => {
    this.setState({
      menuOpen: state.isOpen,
    });
  };

  closeMenu = () => {
    this.setState({
      menuOpen: false,
    });
  };

  render() {
    const { location } = this.props;

    const homeClass = location.pathname === "/" ? "active-item" : "";
    const aboutClass = location.pathname === "/about" ? "active-item" : "";
    const projectsClass =
      location.pathname === "/projects" ? "active-item" : "";
    const experienceClass =
      location.pathname === "/experience" ? "active-item" : "";
    const skillsClass = location.pathname === "/skills" ? "active-item" : "";
    const contactClass = location.pathname === "/contact" ? "active-item" : "";

    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {/* We NEVER want to use <a> inside our react router application because anchor tag refresh the page so, instead a a tag use Link */}

        <Link
          to="/"
          onClick={() => this.closeMenu()}
          className={`menu-item ${homeClass}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => this.closeMenu()}
          className={`menu-item ${aboutClass}`}
        >
          About
        </Link>
        <Link
          to="/projects"
          onClick={() => this.closeMenu()}
          className={`menu-item ${projectsClass}`}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          onClick={() => this.closeMenu()}
          className={`menu-item ${experienceClass}`}
        >
          Experience
        </Link>
        <Link
          to="/skills"
          onClick={() => this.closeMenu()}
          className={`menu-item ${skillsClass}`}
        >
          Skills
        </Link>
        <Link
          to="/contact"
          onClick={() => this.closeMenu()}
          className={`menu-item ${contactClass}`}
        >
          Contact
        </Link>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
