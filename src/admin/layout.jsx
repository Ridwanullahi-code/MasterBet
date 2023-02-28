import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './global/Sidebar'
import Topbar from './global/Topbar'

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
     <Sidebar />
      <div className="flex flex-col flex-1">
       <Topbar />
        <div className="flex-1 p-4 min-h-0 overflow-hidden"
          style={{ backgroundColor: "#f8f8ff" }}>
          {<Outlet />}
        </div>
      </div>
    </div>
  )
}

export default Layout;
