import '../Style/item.css'
const Item = (props) => {

    return (
        <div className="card">
            <div className="face face1">
                <h2>{props.item.title}</h2>
                <p>{props.item.slang}</p>
                <button>Delete</button>
            </div>
            <div className="face face2">
                <h2>{props.item.id}</h2>
            </div>
        </div>
    );
};

export default Item;