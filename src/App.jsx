import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Items from "./Component/Items.jsx";
import Createitem from "./Component/Createitem.jsx";
import MyModal from "./Component/MyModalComp/MyModal.jsx";
function App() {
    const [modal, setModal] = useState(false);
    const [items, setItems] =
        useState([{id:1 ,title:"React",slang:"ljnsdvlkjsdv "}])
  return (
      <>
          <Navbar/>
          <button style={{marginTop:30}} onClick={() => setModal(true)}>Save</button>
          <Items setItems={setItems} items={items}/>

          <MyModal visible={modal} setVisible={setModal}>
              <Createitem setItems={setItems} items={items} setModal={setModal}/>
          </MyModal>

      </>
  )
}

export default App
