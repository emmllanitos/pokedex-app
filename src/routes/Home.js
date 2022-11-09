import { Props, Button } from "./Props";

export const Home = () => {
  return (
    <div>
      <p>home</p>
      <Props
        firstname="Edwar Mauricio"
        lastname="Mayorga Llanos"
        age={25}
        height={170}
      />
      <Button text="Señor" name="Edwar" approved={true} />
      <Button text="Señor" approved={false} />
    </div>
  );
};
