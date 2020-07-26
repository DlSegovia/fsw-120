import React, { Component } from 'react';
import { Columns, Column } from 'react-flex-columns';
import './App.css';



const App = () => (
  <Columns>
    <Column flex>Left</Column>
    <Column flex>Center</Column>
    <Column flex>Right</Column>
  </Columns>

)


export default App