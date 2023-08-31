import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { dummyData } from './data';
import Header from './routes/Header';
import View from './routes/View';
import Add from './routes/Add';
import Item from './routes/Item';
import ItemDefault from './routes/ItemDefault';

function App() {
  const [list, setList] = useState(dummyData);

  const DefaultPage = () => <p>Nothing to see here!</p>;

  const handlerDeleteProduct = (id) => {
    const newList = list.filter(
      (item) => item.id !== id
    );
    setList(newList);
  }
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='view' element={<View list={list} />} >
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handlerDeleteProduct} />} />
            </Route>
            <Route path='add' element={<Add />} />
          </Route>
          <Route path='*' element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

