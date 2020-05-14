import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'
import { ResetCSS } from '../../style/index'
import { Header } from '../index'

const Layout = ({ children }) => (
  <React.Fragment>
    {/* <Header headerLinks={siteConfig.headerLinks} /> */}
    <ResetCSS />
    <div>{children}</div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
