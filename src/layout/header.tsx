import { paths } from "../config/path"
import RouterLink from "../routes/routerLink"

function Header() {
  return (
    <div>
      <ul>
        <li><RouterLink to={paths.HOME}>home</RouterLink></li>
        <li><RouterLink to={paths.ABOUT}>about</RouterLink></li>
        <li><RouterLink to={paths.PRODUCTS}>products</RouterLink></li>
      </ul>
    </div>
  )
}

export default Header