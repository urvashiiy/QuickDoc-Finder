import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import '../../assets/woman.png';
import { Link } from 'react-router-dom';

const Sidebar = ({children}) => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(window.innerWidth < 768);
  const [isHoverable, setIsHoverable] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarClosed(true);
      } else {
        setIsSidebarClosed(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const closeSidebar = () => {
    setIsSidebarClosed(true);
    setIsHoverable(true);
  };

  const expandSidebar = () => {
    setIsSidebarClosed(false);
    setIsHoverable(false);
  };

  const handleMouseEnter = () => {
    if (isHoverable) {
      setIsSidebarClosed(false);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverable) {
      setIsSidebarClosed(true);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmenuClick = (index) => {
    setActiveSubmenu(index === activeSubmenu ? null : index);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <title>Side Navigation Bar in HTML CSS JavaScript</title>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo_item">
          <i className="bx bx-menu" id="sidebarOpen" onClick={toggleSidebar} />
          <img src={"woman.png"} alt="Logo" />
          QuickDoc Finder
        </div>
        <div className="search_bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar_content">
          <i className="bi bi-grid" />
          <i
            className={isDarkMode ? 'bx bx-moon' : 'bx bx-sun'}
            id="darkLight"
            onClick={toggleDarkMode}
          />
          <i className="bx bx-bell" />
          <img src="images/profile.jpg" alt="Profile" className="profile" />
        </div>
      </nav>

      {/* Sidebar */}
      <nav
        className={`sidebar ${isSidebarClosed ? 'close' : ''} ${isHoverable ? 'hoverable' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dashboard" />
            <li className="item">
              <div
                className="nav_link submenu_item"
                onClick={() => handleSubmenuClick(0)}
              > 
                <span className="navlink_icon">
                  <i className="bx bx-home-alt" />
                </span>
                
                <Link to="/Admin/Dashboard" className="nav_link"><span className="navlink"> Home</span>
                <i className="bx bx-chevron-right" />
                </Link>
              </div>
              
            </li>
            
          </ul>

          <ul className="menu_items">
            <div className="menu_title menu_editor" />
            <li className="item">
              <Link to="/Admin/ManageUser" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bxs-magic-wand" />
                </span>
                <span className="navlink">Manage User</span>
              </Link>
            </li>
            <li className="item">
              <Link to="/Admin/ManageDoctor" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-loader-circle" />
                </span>
                <span className="navlink">Manage Doctor</span>
              </Link>
            </li>
            <li className="item">
              <Link to="/Admin/AddDoc" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter" />
                </span>
                <span className="navlink">Add Doctor</span>
              </Link>
            </li>
            <li className="item">
              <Link to="/Admin/AddDoc" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-cloud-upload" />
                </span>
                <span className="navlink">Upload new</span>
              </Link>
            </li>
          </ul>

          <ul className="menu_items">
            <div className="menu_title menu_setting" />
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-flag" />
                </span>
                <span className="navlink">Notice board</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-medal" />
                </span>
                <span className="navlink">Award</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-cog" />
                </span>
                <span className="navlink">Setting</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-layer" />
                </span>
                <span className="navlink">Features</span>
              </a>
            </li>
          </ul>

          <div className="bottom_content">
            <div className="bottom expand_sidebar" onClick={expandSidebar}>
              <span>Expand</span>
              <i className="bx bx-log-in" />
            </div>
            <div className="bottom collapse_sidebar" onClick={closeSidebar}>
              <span>Collapse</span>
              <i className="bx bx-log-out" />
            </div>
          </div>
          
        </div>
      </nav>
      {children}
    </div>
    
  );
};

export default Sidebar;
