function Catalog(props){
    const cat = props.cat;
    return (
        <div>
            <h1>{cat.name}</h1>
            <h2>Total Item: {cat.count} products</h2>
        </div>
    )
}
export default Catalog;