
import { Link, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCardProp({id, name, desc, img}){

const navigate= useNavigate();
const mapData= {
  id: id,
  name: name,
  image: img,
  desc: desc
}
 return (
  <div key={id} onClick={()=>navigate('/products/details', { state:{mapData}})}className="bg-white p-4 rounded shadow-md">
    <motion.img
    whileHover={{scale: 1.05}}
          src={img}
          alt={img}
          className="w-full h-50 object-cover mb-2 rounded transform 
          transition duration-700 "
        />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700">{desc}</p>

       
      
      </div>
)
}

