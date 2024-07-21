import './App.css';
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import { ViewCounter } from './components/viewCounter/viewCounter';
import HomeIcon from '@mui/icons-material/Home';

function AppDemo() {
  const [counter, setCounter] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('home');


  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const handleMenuItemClick = (componentName) => {
    setSelectedComponent(componentName);
    setIsDrawerOpen(false);
  };

  const menuItems = [
    { text: 'InbHomeox', icon: <HomeIcon />, componentName: 'home' },
    { text: 'View 2', icon: <MailIcon />, componentName: 'view1' },
    { text: 'View 3', icon: <MailIcon />, componentName: 'view2' },

  ];


  return (
    <>
      {/*  TOOLBAR  */}
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/*  DRAWER  */}
      <Drawer variant="temporary" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.text} onClick={() => handleMenuItemClick(item.componentName)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>


      {/*  CONTENT  */}     
      <main className="App-content" style={{ padding: '0 16px', marginTop: '64px' }}>
        {selectedComponent === 'home' && <ViewCounter groupName={"home"} setCounter={setCounter} counter={counter}/>}
        {selectedComponent === 'view1' && <div>View 1 Content</div>}
        {selectedComponent === 'view2' && <div>View 2 Content</div>}
      </main>


    </>
  );
}

export default AppDemo;
