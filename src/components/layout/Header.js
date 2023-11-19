import clsx from 'clsx';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import AuthButton from '../../pages/auth/components/AuthButton';

import './Header.css';

function Header({ className }) {
  return (
    <header className={clsx('header', className)}>
      <div className="header-logo">
        <Icon width={32} height={32} fill="red" />
        {/* <img src={logo} alt="twitter-react" /> */}
      </div>
      <nav className="header-nav">
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;
