import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface RouterLinkProps extends LinkProps {
  to: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => {
  const { to, ...other } = props;
  return <Link ref={ref} to={to} {...other} />;
});

export default RouterLink;
