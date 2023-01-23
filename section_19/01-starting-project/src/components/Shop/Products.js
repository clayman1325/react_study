import ProductItem from './ProductItem';
import classes from './Products.module.css';

DUMMY_PRODUCTS = [
  {
    id: "p1", price:6, title: "book", description:"a book description",
    id: "p2", price:12, title: "book 2", description:"a book 2 description"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          <ProductItem
            title={product.title}
            price={product.title}
            description={product.description}
            id={product.id}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
