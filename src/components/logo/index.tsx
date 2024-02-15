import logo from "../../assets/logo/logo.svg";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

const Logo = () => {
  return (
    <RouterLink to={paths.HOME}>
      <img src={logo} alt="Logo" />
    </RouterLink>
  );
};

export default Logo;
