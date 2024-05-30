import Slider from "./Slider";
import Estates from "../Estates/Estates";

const Home = () => {
    
    return (
        <div>
            <div className="mt-10">
                <div>
                <Slider></Slider>   
                </div>
                <div>
                <Estates></Estates>
                </div>
                <Slider/>
            </div>
            
        </div>
    );
};

export default Home;