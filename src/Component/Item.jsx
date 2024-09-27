import '../Style/item.css'
const Item = ({item,setItems,items}) => {
function deleteItem(e){
    e.preventDefault()
     setItems(items.filter(it => it.id != item.id))
}
    return (
        <div className="card">
            <div className="face face1">
                <h2>{item.title}</h2>
                <p>{item.slang}</p>
                <button onClick={deleteItem}>Delete</button>
            </div>
            <div className="face face2">
                <h2>{item.id}</h2>
            </div>
        </div>
    );
};

export default Item;