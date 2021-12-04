import AddCartButton from "./AddCartButton";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
const CartController = () => {
  return (
    <div>
      <AddCartButton>ADD CART</AddCartButton>
      <button>
        <AiOutlineMinus></AiOutlineMinus>
      </button>
      <input type="number" readOnly value={1} />
      <button>
        <AiOutlinePlus></AiOutlinePlus>
      </button>

      <div>
        <button>
          <AiFillDelete></AiFillDelete>
        </button>
      </div>
    </div>
  );
};

export default CartController;
