import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from './ListItem';
import { useEffect, useState } from 'react';
import getData from '../Data';

function ListComponent() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        setStudents(getData);
    }, [])

    return (
        <ListGroup as="ol" numbered>

            {
                students.map((item, index) => <ListItem className="listItem"  key={index} name={item.name} marcked={item.is_active} username={item.username}/> )
            }

            
        </ListGroup>
    );
}

export default ListComponent;