import { useLocation } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const commentText = searchParams.get('comment');


  const category = searchParams.get('category');
  const size = searchParams.get('size');
  const color = searchParams.get('color');
  const amount = searchParams.get('amount');
  return (
    <div>
      <h2>Comment Box Text:</h2>
    
      <p>{category}</p>
      <p>{size}</p> 
      <p>{color}</p>
      <p>{amount}</p>
       <p>{commentText}</p>
    </div>
  );
};
export default NextPage