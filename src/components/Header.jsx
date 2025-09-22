import React, { useState } from "react";
import PropTypes from "prop-types";

// src/components/Header.jsx

/**
 * Simple, accessible header component boilerplate.
 * - title: site title text
 * - logo: optional image src (renders left of title)
 * - links: array of { key, href, label }
 * - className: extra class for the root element
 *
 * Usage:
 * <Header title="My App" links={[{key:'home', href:'/', label:'Home'}]} />
 */

const Header = ({ title, logo, links, className }) => {
    const [open, setOpen] = useState(false);

    return (
        <header id="header" className={`app-header ${className || ""}`} role="banner">
            <img src={logo} alt="Logo showing money bag" />
            <h1>{title}</h1>
        </header>
    );
};


export default Header;