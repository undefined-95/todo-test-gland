import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ItemList from './components/itemList/ItemList';
import { FavoriteProvider } from './components/contexts/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/list" element={<ItemList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </FavoriteProvider>
  );
}

export default App;
