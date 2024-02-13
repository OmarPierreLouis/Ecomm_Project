import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Dropdown = () => {
    return (
        <DropdownButton id="my-dropdown" title="Dropdown">
            <Dropdown.Item href="#/action-1">Mic Check</Dropdown.Item>
            <Dropdown.Item href="#/action-1"> 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> 3</Dropdown.Item>
        </DropdownButton>
    );
};

export default Dropdown;