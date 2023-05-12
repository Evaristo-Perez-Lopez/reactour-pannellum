
import room from "../assets/images/pano1.jpg";
import kitchen from "../assets/images/pano2.jpg";

const sceneData = {
  room: {
    title: "Room",
    image: room,
    pitch: -11,
    yaw: -3,
    hotSpot: {
      door: {
        type: "custom",
        pitch: -16.28,
        yaw: -1.66,
        nameModel: "flowerVase",
        cssClass: "hotSpotElement",
      },
      nexScene: {
        type: "custom",
        pitch: -2.2,
        yaw: 115.8,
        cssClass: "moveScene",
        scene: "kitchen",
      },
    },
  },
  kitchen: {
    title: "Kitchen",
    image: kitchen,
    pitch: 10,
    yaw: 180,
    hotSpot: {
      door: {
        type: "custom",
        pitch: -16.28,
        yaw: -1.66,
        nameModel: "flowerVase",
        cssClass: "hotSpotElement",
      },
    },
  },
};

export default sceneData;
