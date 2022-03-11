import Button from "../../../../components/Buttons";
import FormLogin from "../../organism/FormLogin";
import InputFormLogin from "../../organism/inputFormLogin";
import Linktopage from "../../../../components/Navlink";
import Headerlogin from "../../../../components/TitleLogin";
import Grids from "../../../../components/Grid";
import LayoutLogin from "../../../../containers/templates/LayoutLogin";
import "../../../../style/css/Login.css";
const LoginPage = () => {
  return (
    <LayoutLogin>
      <Grids
        gridColumns="col-md-6"
        display="d-flex align-items-center"
        justify="justify-content-center"
      >
        <FormLogin>
          <Headerlogin titleHeader="Login to your account" />
          <InputFormLogin
            typeForm="form-group"
            idInput="emailaccount"
            controlForm="form-control"
            typeInput="email"
            ariaDescriby="emailhelp"
            placeholder="Enter Email"
            smallTitle="We'll never share your email with anyone else."
            labelInput="Email address"
          />
          <InputFormLogin
            typeForm="form-group"
            padding="py-2"
            idInput="passwordaccount"
            typeInput="password"
            controlForm="form-control"
            ariaDescriby="passwordhelp"
            placeholder="Enter Password"
            labelInput="Password"
          />
          <InputFormLogin
            typeForm="form-group form-check"
            padding="py-3"
            idInput="checkboxaccount"
            typeInput="checkbox"
            controlForm="form-check-input"
            ariaDescriby="passwordhelp"
            placeholder="Enter Password"
            classLabel="form-check-label px-2"
            labelInput={`I agree to Stoke Terms and Privacy Policy`}
          />
          <Button
            type="submit"
            variant="btn shadow btn-dark rounded-pill px-5 py-2"
            title="Login"
          />
          <Linktopage title="Register" linkTo="/signup" classNavlink="btn btn-outline-dark rounded-pill my-3 shadow"/>
        </FormLogin>
      </Grids>
    </LayoutLogin>
  );
};

export default LoginPage;
