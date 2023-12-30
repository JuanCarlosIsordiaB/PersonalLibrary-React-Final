import { Book } from "../components/Book";
import { Layout } from "../components/Layout"
import useAppContext from "../store/store"

export const Index = () => {

  const store = useAppContext();

  return (
    <Layout>
      <div>
        <h1 className="title-index">Books:</h1>
        <div className="books-container">
          {store.items.map((item) => (
            <Book item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
