import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../utils/global.css'
import './layout.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      {/* <div className="header_button">AA</div> */}
      <div className="header">
        <Header />
      </div>
      <br />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <div style={{ 'text-align': 'center' }}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
