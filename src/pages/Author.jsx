import React from 'react';
 import { useStateContext } from '../../contextReducer/StateProvider';
import { actionType } from '../../contextReducer/reducer';

const Author = () => {
    const [{author,age}, dispatch]= useStateContext();

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic for form submission here
      console.log('Form submitted:', formData);
    };

  return (
    <div>
       <form onSubmit={handleSubmit}>
      <label className='px-2 text-justify font-extrabold text-lg'>
         Name: {author}
      </label> <br />
        <input className ="px-2" placeholder='Name' type="text" name="Author" value={author} onChange={(e)=> dispatch({
          type:actionType.SET_NAME,
          author: e.target.value
        })} />
        <button onClick={()=>
         dispatch({
            type: actionType.CLEAR_NAME,
        })} className='m-4 bg-black text-white p-2' >Reset Name</button>  
      <br />

      <label className= 'px-2 text-justify font-extrabold text-lg'>
        Age: {age}
      </label> <br />
      <input type="number" name="email" value={age} onChange={(e)=> dispatch({
          type:actionType.SET_AGE,
          age: e.target.value
        })} />
       <button onClick={()=> {
          dispatch({
            type: actionType.CLEAR_AGE,
           })
          } } className="bg-black text-white p-2" >Reset Age</button>
      <br />
      <button type="submit">Submit</button>
    </form>

    </div>
  );
}

export default Author;
