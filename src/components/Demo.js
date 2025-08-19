function Demo(props){ // properties
    const s = props.data;
    return ( 
        <div>
            <h1>Xin chào: {s.name}, số điện thoại: {s.tel}</h1>
            <h2>Email: {s.email} </h2>
            <h3>Address: {s.address}</h3>
        </div>
    )
}
export default Demo;