import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Items from "./Component/Items.jsx";
import Createitem from "./Component/Createitem.jsx";
function App() {
    const [items, setItems] =
        useState([{id:1 ,title:"React",slang:"ljnsdvlkjsdv "}])
  return (
    <>
        <Navbar />
        <Createitem setItems={setItems} items={items} />
        <Items setItems={setItems} items={items}    />

    </>
  )
}

export default App
