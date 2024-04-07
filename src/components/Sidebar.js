import React from 'react'
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
    <CDBSidebar
      className="sidebar-main"
      textColor="#fff"
      backgroundColor="rgb(186, 186, 186)"
    >
      <CDBSidebarFooter style={{ textAlign: "center" }}>
        
        <ul className=" " >
        <li className="list-group-item activeli"><button className=""><Link className='links' to='/dashboard'>Home</Link></button></li>
        <li className="list-group-item"><button><Link className='links' to='/categories'>Categories</Link></button></li>
        <li className="list-group-item"><button><Link className='links' to='/products'>Products</Link></button></li>
   
        </ul>
       
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
  )
}

export default Sidebar