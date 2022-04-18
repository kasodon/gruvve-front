import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import indexRoutes from './routes/index'

function App() {
  return (
    <Router>
            <Routes>
                {indexRoutes.map((prop, key) => {
                    console.log(prop.path)
                    return (
                        <Route
                            path={prop.path}
                            key={key}
                            element={prop.component}
                        ></Route>
                    )
                })}
            </Routes>
        </Router>
  );
}

export default App;
