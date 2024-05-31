import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(()=>{
    Aos.init();
  },[]);

  return (
    <div className="hero bg-base-200 rounded-lg" data-aos="fade-up">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{estate_title}</h1>
          <p className="py-3 ">
            segment_name: <span className="font-bold">{segment_name}</span>
          </p>
          <p className="py-3 ">
            area: <span className="font-bold">{area}</span>
          </p>
          <p className="py-3 ">
            location: <span className="font-bold">{location}</span>
          </p>
          <p className="py-3 ">
            status: <span className="font-bold">{status}</span>
          </p>
          <p className="pt-3 pb-2 ">Facilities :</p>
          <ul>
            {facilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="py-3">
            price: <span className="font-bold">{price}</span>
          </p>
          <p className="py-3">
            description: <span className="font-bold">{description}</span>
          </p>
          <Link to={`estates/${id}`}>
            <button className="btn bg-green-500">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};

export default Estate;
