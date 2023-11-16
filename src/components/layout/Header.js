import Button from '../Button';

import logo, { ReactComponent as Icon } from '../../assets/twitter.svg';
import { logout } from '../../pages/auth/service';
import { useContext } from 'react';
import { AuthContext } from '../../pages/auth/context';

function Header() {
  const { isLogged, onLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <div>
        <Icon width={32} height={32} fill="red" />
        {/* <img src={logo} alt="twitter-react" />{' '} */}
      </div>
      <nav>
        {isLogged ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button $variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
