import logo from "../../assets/logo/logo.svg";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

interface LogoProps {
  width: string;
  height: string;
}
const Logo = ({width, height} : LogoProps) => {
  return (
    <RouterLink to={paths.HOME}>
      <img src={logo} alt="Logo" style={{
        width: width,
        height: height
      }}/>
    </RouterLink>
  );
};

export default Logo;
