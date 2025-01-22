
import { CiCircleQuestion } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

function Card({ name, pera, price, p2 ,arr}) {
   
    return (
        <div className="plan-card">
            <div>
                <h3>{name}</h3>
                <p>{pera}</p>
                <h3>${price}</h3>
                <p>{p2}</p>
                <button style={{ padding: "7px", width: "150px", margin: "10px 0" }} type="button" className="btn btn-warning">Select Plan
                </button>
                <hr />
                <p>⚡ Unlimited Email Credits

                    <CiCircleQuestion style={{ fontSize: "19px", margin: "0 10px" }} />
                </p>
                <p>
                    120 Export Credits/Year <br />
                    60 Mobile Number Credits/Year
                </p>
                <hr />


                <ul style={{ marginLeft: '20px', textAlign: 'left' }}>
                    {arr?.map((item) => (
                        <li style={{fontSize:"12px"}}><TiTick /> {item}</li>
                    ))}
                   
                </ul>
            </div>
        </div>
    )
}
export default Card