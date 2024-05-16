import Slider from "./Slider";
import Estates from "../Estates/Estates";

const Home = () => {
    
    return (
        <div>
            <div className="">
                <div className="">
                <h2 className="text-3xl font-poppins">This is home</h2>
                </div>
                <Slider></Slider>   
                <Estates></Estates>
            </div>
            
        </div>
    );
};

export default Home;