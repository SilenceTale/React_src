import { CSSProperties } from "react";

export type championImageProps = {
  image: string;
};

const ChampionImage = (props: championImageProps) => {
  const championImageStyle: CSSProperties = {
    borderRadius: "4px",
    width: "32px",
    height: "32px",
    maxWidth: "100%",
    flex: 1,
  };

  return (
    <div>
      <img
        style={championImageStyle}
        src="https://opgg-static.akamaized.net/meta/images/lol/14.19.1/champion/Camille.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1724034092925"
        alt=""
      />
    </div>
  );
};
export default ChampionImage;
