// Material Components
import { Button } from "../../materialComponents/materialComponents";
// Types
import { CartItemType } from "../../App";
//Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Item;
