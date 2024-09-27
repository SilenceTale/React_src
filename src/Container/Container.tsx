import { CSSProperties } from "react";
import Ranking, { rankingProps } from "../Ranking/Ranking";
import Rising, { risingProps } from "../Rising/Rising";
import ChampionImage, {
  championImageProps,
} from "../ChampionImage/ChampionImage";
import ChampionName, { championNameProps } from "../ChampionImage/ChampionName";
import TierNumber, { tierNumberProps } from "../Tier/TierNumber";
import Positions, { positionsProps } from "../Positions/Positions";
import WinRate, { winrateProps } from "../Ratings/WinRate";
import PickRate, { pickrateProps } from "../Ratings/PickRate";
import BanRate, { banrateProps } from "../Ratings/BanRate";
import CounterChampionImage, {
  counterChampionImageProps,
} from "../CounterChampionImage/CounterChampionImage";

export type containerProps = rankingProps &
  risingProps &
  championImageProps &
  championNameProps &
  tierNumberProps &
  positionsProps &
  winrateProps &
  pickrateProps &
  banrateProps &
  counterChampionImageProps;

const Container = (props: containerProps) => {
  const containerStyle: CSSProperties = {
    width: "1080px",
    margin: "8px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  };
  return (
    <div>
      <article style={containerStyle}>
        <Ranking ranking={1} />
        <Rising rising={1} />
        <ChampionImage image="https://opgg-static.akamaized.net/meta/images/lol/14.19.1/champion/Camille.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1724034092925" />
        <ChampionName name="카밀" />
        <TierNumber tier="https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925" />
        <Positions position="https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925" />
        <WinRate winrate={"52.35%"} />
        <PickRate pickrate={"8.49%"} />
        <BanRate banrate={"5.41%"} />
        <CounterChampionImage counter="https://opgg-static.akamaized.net/meta/images/lol/14.19.1/champion/Poppy.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1724034092925" />
      </article>
    </div>
  );
};
export default Container;
