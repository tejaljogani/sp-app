import type { NextPage } from 'next'
import Menu from '../Menu'

const Layout: NextPage = ({ children }) => {
    return <>
        <Menu />
        {children}
    </>
}

export default Layout