import { Nav } from 'react-bootstrap';
import createLinks from '../lib/createLinks';

const links = createLinks();

export default function({children}) {
    return <>

        <Nav bg="dark" text="light"
          defaultActiveKey="/home" as="ul">
            {links}
        </Nav>

        {children}
    </>
}