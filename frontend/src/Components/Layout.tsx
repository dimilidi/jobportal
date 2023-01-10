import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = { children: React.ReactNode; className: string }

const Layout: React.FC<Props> = (props) => {
  return (
    <div className={ props.className }>
      <Header />
      { props.children }
      <Footer />
    </div>
  )
}

export default Layout
