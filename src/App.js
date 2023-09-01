
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { dummyData } from './data';
import Header from './routes/Header';
import View from './routes/View';
import Edit from './routes/Edit';
import Add from './routes/Add';
import Item from './routes/Item';
import ItemDefault from './routes/ItemDefault';

const NotFound =  () =>(<h1>Not found</h1>)

function App() {
  const [list, setList] = useState(dummyData);
  const handlerDeleteProduct = (id) => {
    const newList = list.filter(
      (item) => item.id !== id
    );
    setList(newList);
  }

  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header />}>
            <Route path='view' element={<View list={list} />} >
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handlerDeleteProduct} />} />
            </Route>
            <Route path='add' element={<Add />} />
            <Route path='edit' element={<Edit />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
