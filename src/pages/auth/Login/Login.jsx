import {
  FormInputPassword,
  FormTextInput,
} from "@/components/index.js";
import { PageMetaData } from "@/components/index.js";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import AuthLayout from "../AuthLayout.jsx";
import useLogin from "./useLogin";
import logoSm from "@/assets/images/logo-sm.png";
const Login = () => {
  const { control, login, redirectUrl, isAuthenticated } = useLogin();
  return (
    <>
      <PageMetaData title="Login" />
      {isAuthenticated && <Navigate to={redirectUrl} replace />}
      <AuthLayout>
        <Card>
          <CardBody className="p-0 auth-header-box">
            <div className="text-center p-3">
              <Link to="/" className="logo logo-admin">
                <img
                  src={logoSm}
                  height={50}
                  alt="logo"
                  className="auth-logo"
                />
              </Link>
              <h4 className="mt-3 mb-1 fw-semibold text-white font-18">
                Lets Get Started Metrica
              </h4>
              <p className="text-muted  mb-0">
                Sign in to continue to Metrica.
              </p>
            </div>
          </CardBody>
          <CardBody className="pt-0">
            {/* <form className="my-4"> */}
            <form className="my-4" onSubmit={login}>
              <FormTextInput
                name="phone_number"
                label="Phone Number"
                containerClass="mb-2"
                control={control}
                placeholder="Enter Phone Number"
              />
              <FormInputPassword
                name="password"
                label="Password"
                control={control}
                placeholder="Enter password"
              />
              {/* <Row className="form-group mt-3">
                <Col sm={6}>
                  <div className="form-check form-switch form-switch-success">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customSwitchSuccess"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitchSuccess"
                    >
                      Remember me
                    </label>
                  </div>
                </Col>
                <Col sm="6" className="text-end">
                  <Link to="/auth/recover-pass" className="text-muted font-13">
                    <i className="dripicons-lock" /> Forgot password?
                  </Link>
                </Col>
              </Row> */}
              <Row className="form-group mb-0">
                <Col xs={12}>
                  <div className="d-grid mt-3">
                    {/* <Button variant="primary" type="submit"> */}
                    <Button variant="primary" disabled={false} type="submit">
                      Log In <i className="fas fa-sign-in-alt ms-1" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
            {/* <div className="m-3 text-center text-muted">
              <p className="mb-0">
                Dont have an account ?{" "}
                <Link to="/auth/register" className="text-primary ms-2">
                  Free Resister
                </Link>
              </p>
            </div> */}
            {/* <hr className="hr-dashed mt-4" /> */}
          </CardBody>
        </Card>
      </AuthLayout>
    </>
  );
};
export default Login;
