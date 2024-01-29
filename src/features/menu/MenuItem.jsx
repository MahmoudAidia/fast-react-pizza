import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useState } from "react";

function MenuItem({ pizza }) {
  const [addToCart, setAddToCart] = useState();
  const [pizzaNum, setPizzaNum] = useState(1);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="w flex  gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font text-stone text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {addToCart && (
            <div className="flex items-center gap-3 ">
              <label className="">Number</label>
              <input
                type="number"
                className="w-20 rounded-full border-yellow-500 px-3 py-2 outline-none  focus:ring focus:ring-yellow-500"
                min="1"
                value={pizzaNum}
                onChange={setPizzaNum}
              />
            </div>
          )}

          <Button type="small" onClick={setAddToCart} addToCart={addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
