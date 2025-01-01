import react, {useContext} from 'react';
import hero from "./Hero"
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    // console.log(products)

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTION"}/>
                {/* <p className="w-3/4 m-auto" */}
            </div>
        </div>
    );

}

export default LatestCollection;