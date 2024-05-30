import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    facilities,
    area,
    image,
    location,
    status,
  } = estate;

  return (
    <div className="md:flex gap-6">
      <div className="max-w-96">
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{estate_title}</h2>
        <div>{segment_name}</div>
        <div>{area}</div>
        <div>{location}</div>
        <div>{status}</div>
        <div>
          <ul>
            {facilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <p>{price}</p>
        <p>{description}</p>
       <Link to={`estates/${id}`}> <button className="btn">View Details</button></Link>
      </div>
    </div>
  );
};

export default Estate;
