  import MyCalendar from './components/Calendar';
  import { AppBar, Toolbar } from '@mui/material';

const App = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <h1>Calendar App</h1>
        </Toolbar>
      </AppBar>
      <MyCalendar />
    </>
  );
};

export default App;
