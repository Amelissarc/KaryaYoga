import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const firestore = getFirestore();

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    const q = query(
      collection(firestore, "products"),
      where("name", ">=", searchTerm),
      where("name", "<=", searchTerm + "\uf8ff")
    );
    const querySnapshot = await getDocs(q);
    const newProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(newProducts);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search Products"
        className="me-2"
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Button variant="outline-success" htmlFor="search-products">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div>{product.name}</div>
        </Link>
      ))}
    </Form>
  );
}

export default SearchProducts;


