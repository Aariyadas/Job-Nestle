import React from 'react'
import {Menu} from '@headlessui/react'
const UserMenuList = () => {
 
    const handleLogout =() =>{}
        return (
          <Menu as='div' className='inline-block text-left'>
            <div className='flex'>
                <Menu.Button className='inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-20'>
                      <div className='leading[80px] flex flex-col items-start'>
                        <p className='text-sm font-semi-bold'>{user?.firstName ?? user?.name}</p>
                        <span className='text-sm text-blue-600'>{user?.jobTitle ?? user?.email}</span>
                      </div>
                </Menu.Button>
            </div>

          </Menu>
        )
    }


export default UserMenuList