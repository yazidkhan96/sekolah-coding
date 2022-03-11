import TitleLogin from "../../../components/TitleHeaderLogin";
import Grids from "../../../components/Grid";


const LayoutLogin = ({ children }) => {
  return (
    <Grids containerType="container-fluid">
      <Grids row="row">
        <Grids
          gridColumns="col-md-6 side-login"
          display="d-flex align-items-center flex-wrap"
          justify="justify-content-start"
        >
          <TitleLogin
            title="Welcome to Daridasar.com"
            description="Let's learn something new with daridasar.com...."
          />
        </Grids>
        {children}
      </Grids>
    </Grids>
  );
};

export default LayoutLogin;
