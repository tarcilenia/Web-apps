/* eslint-disable react/prop-types */
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


function ListItem({name, username}) {

    const [active, setActive] = useState(false)

    const checkHandler = () => {
        setActive(!active)
    }

    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{name}</div>
                    {username}
                </div>
                   
                <input type='checkbox' checked={active} onChange={checkHandler} />
            

                <div style={{ color: active? "green" : "red" }}>
                    {active ? (
                    <label>Presente </label>
                    ) : 
                    (
                        <label>Ausente </label>
                    
                     )} 
                </div>
             
            </ListGroup.Item>
        </>
    )
}

export default ListItem