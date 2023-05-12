
import { Pannellum } from "pannellum-react";
import data from "../helpers/sceneData"

import { useState } from "react";
function Scene() {
  const [sceneData, setSceneData] = useState(data['room'])

  const hotSpots = (element, i) => {
    if (element.cssClass === "hotSpotElement")
      return (
        <Pannellum.Hotspot
          key={i}
          type="custom"
          pitch={element.pitch}
          yaw={element.yaw}
          cssClass={element.cssClass}
        />
      );
    else if (element.cssClass === "moveScene")
      return (
        <Pannellum.Hotspot
          key={i}
          type="custom"
          pitch={element.pitch}
          yaw={element.yaw}
          handleClick={() => {
            setSceneData(data[element.scene]);
          }}
          cssClass={element.cssClass}
        />
      );
  };

  return (
    <Pannellum
      width="100%"
      height="500px"
      title={sceneData.title}
      image={sceneData.image}
      pitch={10}
      yaw={sceneData.yaw}
      hfov={sceneData.hfov}
      showZoomCtrl={false}
      hotspotDebug={true}
      autoLoad>
      {Object.values(sceneData.hotSpot).map((element, i) =>
        hotSpots(element, i)
      )}
    </Pannellum>
  );
}

export default Scene;
