import Footer from './Footer';
import Header from './Header';

import './Layout.css';

function Layout({ title, children }) {
  return (
    <div className="layout">
      <Header className="layout-header bordered" />
      <main className="layout-main bordered">{children}</main>
      <Footer className="layout-footer bordered" />
    </div>
  );
}

export default Layout;
