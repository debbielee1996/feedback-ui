import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import Home from './components/Home'
import SubmittedFeedback from './components/SubmittedFeedback'
import Header from './components/Header'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div className="App">
        <Header title="Feedback App"/>
          <Routes>
            <Route path='/createFeedback' element={<FeedbackForm />} />
            <Route path='/' element={<Home />} />
            <Route path='/submittedFeedback' element={<SubmittedFeedback />} />
          </Routes>
      </div>
    </Router>
    
    </ThemeProvider>
  );
}

export default App;
