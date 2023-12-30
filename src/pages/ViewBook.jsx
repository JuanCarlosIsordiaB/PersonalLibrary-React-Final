import { useEffect, useState } from "react";
import { Layout } from "../components/Layout"
import { useParams } from 'react-router-dom';
import useAppContext from "../store/store";

export const ViewBook = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if(!item){
    return <Layout>Item not found</Layout>
  }

  return (
    <Layout>
      <div className="book-details">
        <h2>{item?.title}</h2>
        <div className="cover-container">
          {item?.cover && <img src={item?.cover} alt={item.title} className="cover-image" />}
        </div>
        <div className="author">{item?.author}</div>
        <div className="review">{item?.review}</div>
        <div className={`status ${item?.completed ? 'completed' : 'incomplete'}`}>
          {item?.completed ? 'Leído' : 'Por terminar'}
        </div>
      </div>
    </Layout>
  )
}
