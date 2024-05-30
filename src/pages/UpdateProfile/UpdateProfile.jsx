import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const handleUpdate = ({e, name, photoUrl}) => {
    e.preventDefault();

    updateUserProfile(name, photoUrl)
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:w-3/4 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Profile Update form</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Profile picture photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
