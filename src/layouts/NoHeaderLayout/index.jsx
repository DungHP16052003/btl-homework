
import { Outlet } from 'react-router-dom'
import Footer from '../DefaultLayout/components/Footer'

function NoHeaderLayout() {
  return (
    <div>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default NoHeaderLayout
