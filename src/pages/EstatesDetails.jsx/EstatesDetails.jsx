import { useParams } from "react-router-dom";
import landData from "../../../public/LandData.json";
import PropTypes from "prop-types";

const EstatesDetails = () => {
  const { id } = useParams();
  const land = landData.filter((data) => data.id === parseInt(id));
  console.log(land);

  const {
    estate_title,
    segment_name,
    description,
    price,
    facilities,
    area,
    image,
    location,
    status,
  } = land[0];

  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg">
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
          <p className="pt-3">
            description: <span className="font-bold">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

EstatesDetails.propTypes = {
  estate: PropTypes.object,
};

export default EstatesDetails;
