function Card({ title, description, image }) {
    return (
        <div className="" style={{ backgroundColor: '#f2f2f2', margin: "10px auto", width: "900px", padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',display: 'flex',  justifyContent: 'space-between' }}>
            <img style={{ width: "80px" }} src={image} alt={title} />
            <div style={{ textAlign:"left"}}>
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
           <div>
           <button style={{ backgroundColor: '#003FAE', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer',display:"flex",alignItems:"center" }}>Connect</button>
           </div>
        </div>
    );
}
export default Card;