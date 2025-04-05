import { Outlet } from 'react-router-dom'
import Header from '../DefaultLayout/components/Header';
import Footer from '../DefaultLayout/components/Footer';

function NoFooterLayout() {
  return (
     <div>
        <Header/>
    <div>
      <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default NoFooterLayout;
