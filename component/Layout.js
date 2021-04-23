import { Nav } from '../component/Nav';
import { Footer } from '../component/Footer'

export const Layout = (props) => {
    return (
        <>
            <Nav></Nav>
                {props.children}
            <Footer></Footer>
        </>
    )
}