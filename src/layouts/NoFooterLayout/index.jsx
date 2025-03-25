import { Outlet } from 'react-router-dom'
import Header from '../DefaultLayout/components/Header';

function NoFooterLayout() {
  return (
     <div>
        <Header/>
    <div>
      <Outlet/>
    </div>
    </div>
  )
}

export default NoFooterLayout;
