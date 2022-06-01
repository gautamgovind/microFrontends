import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

export default function PlaceAddToCart(el, id){
    render(()=> <AddToCart id={id} />, el);
}

