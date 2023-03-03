import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { pullTrigger } from "../redux/root";
import { GameProgress } from "../type/pages/indexType";
import Presenter from "../layout/pages/index/Presenter";

function Home() {
  const dispatch = useDispatch();
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    start: false,
    checkScore: false,
  });
  const { start, checkScore } = gameProgress;

  const handleStackingScore = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!start && !checkScore)
        setGameProgress(prev => ({ ...prev, start: !prev.start }));
      else if (start) dispatch(pullTrigger(Number(e.currentTarget.id)));
    },
    [start, checkScore, dispatch]
  );

  return (
    <Presenter
      gameProgress={gameProgress}
      setGameProgress={setGameProgress}
      handleStackingScore={handleStackingScore}
    />
  );
}

export default Home;
