import Navbars from "../../../containers/organism/Navbar";
const Layout = ({children}) => {
  return (
    <div className="layout">
      <Navbars />
          {children}  
    </div>
  );
};

export default Layout;
