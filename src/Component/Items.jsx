import Item from "./Item.jsx";
import '../Style/items.css'
const Items = ({items,setItems}) => {

    return (
        <div className="items">
            {
                items.map((item) => (
                    <Item key={item.id} item={item} setItems={setItems} items={items} />
                ))
            }
        </div>
    );
};

export default Items;