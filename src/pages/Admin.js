import React from 'react'
import Sidebar from '../Admin/Sidebar';
import { Outlet } from 'react-router-dom';
import scrapeData from '../functions/fetch';

const Admin = () => {
    scrapeData();
    return (
        <div className='flex'>
            <Sidebar />
            <div className='p-7 text-2xl font-semibold flex-1 h-screen bg-gray-100'>
                <Outlet />
            </div>
        </div>
  )
}

export default Admin
