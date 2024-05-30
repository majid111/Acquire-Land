import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
    const estates=useLoaderData();
    console.log(estates);
    return (
        <div className="space-y-6 my-10">
            {
                estates.map(estate=><Estate key={estate.id} estate={estate}></Estate>)
            }
        </div>
    );
};

export default Estates;