import {useState} from "react";
import '../Style/creatItem.css'
const Createitem = ({setItems,items,setModal}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function saveItem(e) {
        e.preventDefault()
        setItems([...items, {id:items.length?items[items.length-1].id+1:1 , title:title, slang:description}])
        setTitle('')
        setDescription('')
        setModal(false)
    }
    return (
        <form className="createForm">
            <input type="text" placeholder="Title" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Description" value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={saveItem}>Save</button>
        </form>
    );
};

export default Createitem;