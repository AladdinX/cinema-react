import { Outlet } from 'react-router-dom'
import Header from '../../component/Header/Header'

const LayOut = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default LayOut