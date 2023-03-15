
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useMemo } from "react";
import { themeSettings } from './theme';
import {CssBaseline , ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings(),[]))
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/Paragraph' element={<Paragraph/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>
        <Route path='/js-Converter' element={<JsConverter/>}/>
        <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>

      </ThemeProvider>
      </>
 
);
}

export default App;
