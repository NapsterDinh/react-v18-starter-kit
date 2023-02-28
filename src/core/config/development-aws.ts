import { currentENV, ENVConfig } from "@core/config/index";

const EnvDevAWS: ENVConfig = {
  ...currentENV,
  ENV_NAME: "dev-aws",
  API_URL: "http://abc.com/api/",
  LOGIN_URL: "http://abc.com/login",
  SERVICE_1: "http://service-1.com/", // third service url
  SERVICE_2: "http://service-2.com/", // third service url
};

export default EnvDevAWS;
