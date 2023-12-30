import { useState } from "react";
import { Layout } from "../components/Layout"
import { useNavigate } from "react-router-dom"; 
import useAppContext from "../store/store";
import Swal from 'sweetalert2';


export const CreateBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const navigate = useNavigate();
  const store = useAppContext();


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch(name){
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'completed':
        setCompleted(e.target.checked);
        break;
      case 'review':
        setReview(value);
        break;
    }
  }

  const handleChangeFile = (e) => {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        //console.log("RESULT", reader.result);
        setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      completed,
      review
    }

    if(title === ''){
      Swal.fire({
        icon: "error",
        title: "Titulo del libro obligatorio",
        text: "Ingresa un titulo",
      });
      return;
    }

    //LLamar a crear libro
    //console.log(newBook);
    store.createItem(newBook);

    //navigate
    navigate('/');

  }

  return (
    <Layout>
      
      <div className="form-container">
          <p className="form-main-title">Create a new <span className="color">Book</span></p>
          <form 
            className="form"
            onSubmit={handleSubmit}
          >
            <label className="form-title">Title</label>
            <input 
              type="text" 
              className="input" 
              name="title"
              placeholder="Enter title of the book" 
              onChange={handleChange}
            />
            <label className="form-title">Author</label>
            <input 
              name="author"
              type="text" 
              className="input" 
              placeholder="Enter author of the book" 
              onChange={handleChange} 
            />
            <label className="form-title">Review</label>
            <input 
              name="review"
              type="text" 
              className="input" 
              placeholder="Enter a review of the book" 
              onChange={handleChange}
            />
            <div className="form-extra">
              <label className="form-title">Cover</label>
              <input 
                type="file" 
                name="cover" 
                onChange={handleChangeFile}
                className="cover-input"
              />
              <div>
                {
                  !! cover ? <img src={cover} width='200' alt="preview"  /> : ''
                }
              </div>
            </div>
            <div className="form-extra">
              <label className="form-title">Completed</label>
              <input 
                type="checkbox" 
                name="completed"
                className="ui-checkbox"
                onChange={handleChange}
                value={completed}
              />
            </div>
            
            <button className="">Submit</button>
          </form>
      </div>
    </Layout>
  )
}
