import { ChartDatas } from "../components/chartType";

interface FilterProps {
  inputValue: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PresenterProps {
  allTriesChartsProps: {
    playerNames: string[];
    dataForChart: ChartDatas[];
  };
}

export type { FilterProps, PresenterProps };
