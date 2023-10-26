import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/Store";

const itemStyles = {
  container: {
    display: "flex",
    gap: "20px",
    color: "white",
    width: "800px",
    margin: "0 auto",
  },
};

function View() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <div>Item not Found.</div>;
  }

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          <div>
            {item?.cover ? <img src={item?.cover} width="400px" /> : null}
          </div>
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? "read" : "about to finish"}</div>
          <div>{item.review}</div>
        </div>
      </div>
    </Layout>
  );
}

export default View;
