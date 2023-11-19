import clsx from 'clsx';
import Button from '../shared/Button';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import { logout } from '../../pages/auth/service';
import { useAuth } from '../../pages/auth/context';

import './Header.css';

function Header({ className }) {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className={clsx('header', className)}>
      <div className="header-logo">
        <Icon width={32} height={32} fill="red" />
        {/* <img src={logo} alt="twitter-react" /> */}
      </div>
      <nav className="header-nav">
        {isLogged ? (
          <Button onClick={handleLogoutClick} className="header-button">
            Logout
          </Button>
        ) : (
          <Button $variant="primary" className="header-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
