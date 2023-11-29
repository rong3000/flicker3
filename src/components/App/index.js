import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPage from '../Search';
import SearchResult from '../SearchResult';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchPage />}>
        <Route path='/search/:queryText' element={<SearchResult />} />
        

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
