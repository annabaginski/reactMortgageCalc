import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import NavBar from './Components/Navbar';
// import Result from './Components/Result';
// import SliderSelect from './Components/SliderSelect';
// import TenureSelect from './Components/TenureSelect';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Container maxWidth='xl' sx={{marginTop:4}}>
      <Grid container spacing={5} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          {/* <SliderSelect />
          <TenureSelect /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Result /> */}
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
