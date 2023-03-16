import Card from "./Card";
import { useSelector } from "react-redux";

const CardsFunc = () => {
  const characters = useSelector((state) => {
    state.characters;
  });

  return (
    <div>
      <h1>Cards Func</h1>
      <div>
        {characters.map((cha) => (
          <Card id={cha.id} name={cha.name} key={cha.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsFunc;
