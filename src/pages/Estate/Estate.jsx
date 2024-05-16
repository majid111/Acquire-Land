const Estate = ({ estate }) => {
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
  } = estate;

  console.log(
    estate_title,
    segment_name,
    description,
    price,
    facilities,
    area,
    image,
    location,
    status
  );
  return (
    <div>
      <h2>{estate_title}</h2>
    <img src={image} alt="" />
    <div>
        <div>{segment_name}</div>
        <div>{area}</div>
        <div>{location}</div>
        <div>{status}</div>
        <div><ul>{facilities.map((item,idx)=><li key={idx}>{item}</li>)}</ul></div>
    </div>
    <p>{price}</p>
    <p>{description}</p>
    </div>
  );
};

export default Estate;
