import {Link} from 'react-router-dom';

export const Book = ({item}) => {
  return (
    <div className="book-container">
        <Link to={`/view/${item.id}`}>
            <img src={item.cover} alt={item.title} className="book-image" />
        </Link> 
        <div className="book-details">
            <div className="book-title">{item.title}</div>
            <div className="book-author">{item.author}</div>
            {
                item.completed && <div className="complete-badge">Completed</div>
            }
        </div>
    </div>
  )
}
