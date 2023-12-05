import products from "./products.json";
import Card from "./Card";
let p = document.getElementsByClassName("dynamic-content");
export default function ExtractProducts() {
  for (let i = 0; i < products.length(); i++) {
    p.appendChild(Card(products[i]));
  }
}
