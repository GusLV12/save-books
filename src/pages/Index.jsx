import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Book from "../components/Book";

const booksConatainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

function Index() {
  const store = useAppContext();
  return (
    <Layout>
      <div style={booksConatainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Index;
