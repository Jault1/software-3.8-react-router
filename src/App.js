
import { HashRouter, Route, Routes } from 'react-router-dom';
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
  let [list, setList] = useState(dummyData);

  const handlerDeleteProduct = (id) => {
    const newList = list.filter(
      (item) => item.id !== id
    );
    setList(newList);
  }
  const handlerAddProduct = (values) => {

    try { 


      let newList = [ ...list, values] 
setList(newList)













      console.log("New length of list: " + list.length);

    } catch(err) {
      console.log(err.message);
    }
  }

  function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("No keys exist for");
    } else {
      console.log("GOOD NEWS! We have values to add to the list!")
    }
}


  return (
    <div className="App">
      <h1> Hello from John</h1>
    <HashRouter>
    <Routes>
    <Route path='/' element={<Header />}>
            <Route path='view' element={<View list={list} />} >
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handlerDeleteProduct} />} />
            </Route>
            <Route path='add' element={<Add handlerAdd={handlerAddProduct} />} />
            <Route path='edit' element={<Edit />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
      
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
