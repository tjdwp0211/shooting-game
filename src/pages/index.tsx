import React, { useState } from "react";
import { GameProgress } from "../type/pages/indexType";
import Presenter from "../layout/pages/index/Presenter";

function Home() {
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    start: false,
    checkScore: false,
  });

  return (
    <Presenter gameProgress={gameProgress} setGameProgress={setGameProgress} />
  );
}

export default Home;
