import Button from "../../../../components/Buttons";
import FormLogin from "../../organism/FormLogin";
import InputFormLogin from "../../organism/inputFormLogin";
import Linktopage from "../../../../components/Navlink";
import Headerlogin from "../../../../components/TitleLogin";
import Grids from "../../../../components/Grid";
import LayoutLogin from "../../../../containers/templates/LayoutLogin";
import "../../../../style/css/Login.css";

const SignUp = () => {
  return (
    <LayoutLogin>
        <Grids
          gridColumns="col-md"
          display="d-flex align-items-center"
          flexDirection="flex-column"
          justify="justify-content-center"
        >
          <FormLogin>
            <Headerlogin
              textHeader="start for free"
              titleHeader="Sign up to Daridasar."
              smallText="Already a member ?"
              children={<Linktopage classNavlink="btn btn-outline-dark rounded-pill px-5 py-1 btn-block" linkTo="/login" title="login"/>}
            />
            <InputFormLogin
              typeForm="form-group mt-3"
              padding="py-2"
              idInput="username"
              typeInput="text"
              controlForm="form-control"
              ariaDescriby="passwordhelp"
              placeholder="Enter Username"
              labelInput="Username"
            />
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
            <Button
              type="submit"
              variant="btn btn- btn-dark rounded-pill px-5 py-2 mt-2 d-grid "
              title="Register"
            />
          </FormLogin>
        </Grids>
    </LayoutLogin>
  );
};

export default SignUp;
