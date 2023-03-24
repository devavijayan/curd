import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentList from './StudentList';
import StuCreate from './StuCreate';
import StuDetails from './StuDetails';
import StuEdit from './StuEdit';

function App() {
  return (
    <div className="App">
      <h1>CURD DASHBOARD</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentList />}></Route>
        <Route path='/student/create' element={<StuCreate />}></Route>
        <Route path='/student/detail/:stuid' element={<StuDetails />}></Route>
        <Route path='/student/edit/:stuid' element={<StuEdit />}></Route>``
                    </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
