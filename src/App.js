import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <div className="App ">
      <div className='bg-black flex flex-col m-14'>
        <div className='w-full'><Page1 /></div>
      </div>
      <div className='bg-black flex flex-col m-14'>
        <div className='w-full'><Page2 /></div>
      </div>

    </div>
  );
}

export default App;
