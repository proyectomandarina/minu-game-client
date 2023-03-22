import { useEffect, useState, useContext, MouseEvent } from "react";
import assetsPath from "../../data/assets-path";
import { ButtonsContainer, Button } from "./components";
import { STEPS } from "./../../types";
import { GameContext } from "./../../context";

const BUTTON_IDS = [1, 2, 3, 4, 5, 6];

const LOOP_NUMBERS = 12;

const generateRandomBtnId = (id: number | undefined) => {
  let options = BUTTON_IDS;

  if (id) {
    options = options.filter((pos) => pos !== id);
  }

  return options[Math.floor(Math.random() * options.length)];
};

export default function GameButtons() {
  const { ctx, setCtx } = useContext(GameContext);
  const [selectedBtn, setSelectedBtn] = useState<number>();
  const [wrongBtn, setWrongBtn] = useState<number|null>(null);
  const [counter, setCounter] = useState<number>(0);
  const [initialTime] = useState<Date>(new Date());

  const isSelected = (i: number) => {return selectedBtn === i};

  const wrongClick = (i: number) => {return wrongBtn === i};

  const handleClick = (event: MouseEvent) => {
    if (event.currentTarget.id === selectedBtn?.toString()) {
      setCounter(counter + 1);
      setWrongBtn(null)
    } else {
      setWrongBtn(parseInt(event.currentTarget.id));
    }
  };

  useEffect(() => {
    if (counter === LOOP_NUMBERS) {
      const currentTime = new Date();
      const ms = currentTime.getTime() - initialTime.getTime();

      if (ctx.step === STEPS.STEP_1) {
        setCtx({
          ...ctx,
          step: STEPS.MIDDLE,
          firstTime: ms,
        });
      }
      if (ctx.step === STEPS.STEP_2) {
        setCtx({ ...ctx, step: STEPS.END, secondTime: ms });
      }

      return;
    }

    setSelectedBtn(generateRandomBtnId(selectedBtn));
  }, [counter]);

  return (
    <ButtonsContainer>
      {assetsPath.gameButtons.map((button, i) => {
        const id = i+1 
        return (
          <Button
            key={i}
            id={id.toString()}
            active={isSelected(id)}
            wrong={wrongClick(id)}
            src={button}
            onClick={(e) => handleClick(e)}
          />
        );
      })}
    </ButtonsContainer>
  );
}
