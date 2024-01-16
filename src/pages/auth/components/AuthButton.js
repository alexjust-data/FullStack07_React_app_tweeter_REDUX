import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../components/shared/Button';
import { useIsLogged } from '../context';
import { logout } from '../service';
import { authLogout } from '../../../store/actions';

function AuthButton({ className, onLogout }) {
  // const dispatch = useDispatch();
  const isLogged = useIsLogged();

  // const onLogout = () => {
  //   dispatch(authLogout());
  // };

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return isLogged ? (
    <Button onClick={handleLogoutClick} className={className}>
      Logout
    </Button>
  ) : (
    <Button as={Link} to="/login" $variant="primary" className={className}>
      Login
    </Button>
  );
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onLogout: () => dispatch(authLogout()),
//   };
// };

const mapDispatchToProps = {
  onLogout: authLogout,
};

export default connect(null, mapDispatchToProps)(AuthButton);
