// import CalendarPage from "./pages/calendar.js"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//        <Router>
//       <div className="flex-column justify-center align-center min-100-vh bg-primary">
//         <Routes>
//           <Route 
//             path="/" 
//             element={<CalendarPage/>} 
//           />
         
//         </Routes>
//       </div>
//     </Router>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventChat from "./pages/events"
import Login from './pages/login';

function App() {
    return (
      <div className="App">
         <Router>
            <Routes>
            <Route 
                path="/" 
                element={<Login/>} 
              />
              <Route 
                path="/chat" 
                element={<EventChat/>} 
              />
            
            </Routes>

      </Router>
      </div>
    );
  }
  
  export default App;
