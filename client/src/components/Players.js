import React, { useState } from 'react';
import { Table } from 'semantic-ui-react'
import useDarkMode from '../hooks/useDarkMode.js';
import NavBar from './NavBar'

const Players = props => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
    const [color, setColor] = useState('sky blue');
    const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    setColor(color === 'sky blue' ? 'black' : 'sky blue')
  };

    return(
        <div>
            <NavBar toggleMode={toggleMode} darkMode={darkMode} />
            <Table celled striped color={color} inverted>
           <Table.Body>
                  {props.player.map(players => {
                      return(
                        <Table.Row>
                            <Table.Cell>{players.name}</Table.Cell>
                            <Table.Cell>{players.country}</Table.Cell>
                            <Table.Cell>{players.searches}</Table.Cell>
                        </Table.Row>
                        )
                  })}
               </Table.Body> 
               </Table>
        </div>
    )
};

export default Players;