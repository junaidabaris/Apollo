function Card({ title }) {
    return (
        <div className="" style={{ backgroundColor: '#f2f2f2', margin: "10px auto", width: "900px", padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between' }}>

            <div style={{ textAlign: "left" ,display:"flex"}}>  
              
                <h6>{title}</h6>
            </div>
            <div>
                <button className="btn btn-primary btn-sm" style={{ marginRight: '10px' }}>Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
    );
}
export default Card;