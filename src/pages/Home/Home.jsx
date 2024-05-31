import Slider from "./Slider";
import Estates from "../Estates/Estates";

const Home = () => {
    
    return (
        <div>
            <div className="mt-10">
                <div>
                <Slider/>   
                </div>
                <div>
                <Estates/>
                </div>
            </div>
            
        </div>
    );
};

export default Home;