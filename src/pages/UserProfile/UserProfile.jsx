import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import defaultImage from '../../assets/user.png';
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photoURL || defaultImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{displayName}</h1>
          <p className="py-6">
           {email}
          </p>
          <p className="py-6">
           {emailVerified || 'Not Verified'}
          </p>
          <Link to='/updateProfile'><button className="btn btn-primary">Update Profile</button></Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
