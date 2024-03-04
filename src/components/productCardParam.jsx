import { Link, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';


export default function ProductCardParam({id, name, desc, img}){


 return (
    <div key={id} className="bg-white p-4 rounded shadow-md">
      <Link to={`/products/details/${id}`}>
      <motion.img
      whileHover={{scale: 1.05}}
            src={img}
            alt={img}
            className="w-full h-50 object-cover mb-2 rounded transform 
            transition duration-1000 
            hover: bg-gray-700"
          />
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700">{desc}</p>
      </Link>
         
        
        </div>
 )
}

