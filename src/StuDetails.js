import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const StuDetails = () => {
    const{stuid} = useParams();

const [studata, studatachange] = useState({});
    
    useEffect(() => {
    fetch('http://localhost:8001/student/'+stuid).then((res) => {
            return res.json();
        }).then((resp) => {
            studatachange(resp);
        }).catch((err) =>{
            console.log(err.message);
        })
            }, [])
  return (
    <div>
        { studata &&
        <div>
            <h2> The Studentname is : {studata.name} ({studata.id})</h2>
            <h3>Contact Details</h3>
            <h5>Email is : {studata.email}</h5>
            <h5>Phone is : {studata.phone}</h5>
            <Link className="btn btn-success" to = "/">Back to Listing</Link>
            </div>
        }
      
    </div>
  )
}

export default StuDetails
