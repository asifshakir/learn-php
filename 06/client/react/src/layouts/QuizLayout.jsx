import { Nav } from 'react-bootstrap';
import createLinks from '../lib/createLinks';

const links = createLinks();

export default function({children}) {
    return <>
        <h1>Quiz</h1>
        <Nav bg="dark" text="light"
          defaultActiveKey="/home" as="ul">
            {links}
        </Nav>

        {children}
    </>
}