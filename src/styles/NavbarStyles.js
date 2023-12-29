import ColorConfig from "../config/ColorConfig";

const NavbarStyles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0 10px 12px",
    background: ColorConfig.darkPurple,
  },
  logo: {
    marginRight: "10px",
    width: "30px",
    height: "30px",
    animation: "rotateAndBounce 3s ease-in-out infinite",
  },
  tabLink: {
    textDecoration: "none",
    color: ColorConfig.white,
    fontSize: "13px",
    WebkitTapHighlightColor: "transparent",
  },
  tab: {
    padding: "3px 8px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  activeTab: {
    background: ColorConfig.lightPurple,
  },
};

export default NavbarStyles;
