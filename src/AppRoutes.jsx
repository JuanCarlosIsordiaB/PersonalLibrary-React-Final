import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CreateBook } from "./pages/CreateBook";
import { Index } from "./pages/Index";
import { ViewBook } from './pages/ViewBook';
import {Store} from './store/store';


export const AppRoutes = () => {
  return (
    <Store>
        <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Index />} />
          <Route path='create' element={<CreateBook />} />
          <Route path='view/:bookId' element={<ViewBook />} />

          {/* Another Route*/}
          <Route path='*' element={<Navigate to="/" />} />
          
        </Routes>
      </BrowserRouter>
    </Store>
    
    
  )
}

export default AppRoutes
