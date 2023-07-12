import React from 'react'
import { Outlet } from 'react-router-dom'
import NavPanel from './NavPanell'
import { Provider } from 'react-redux'
import store from '../store/store'


const RootLayout = () => {
  return (
    <>
        <Provider store={store}>
            <NavPanel />
            
            <main>
                <Outlet />
            </main>
        </Provider>
    </>
  )
}

export default RootLayout