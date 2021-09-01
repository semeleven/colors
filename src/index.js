import chroma from "chroma-js";

import { goodAllColors } from "./all-colors";
import { result as divColors } from "./div-colors";
import { result as iosColors } from "./ios-colors";

import "./styles.css";

const doneRaw = [
  "rgba(255,255,255,1) -> primary_white",
  "rgba(0,0,0,1) -> primary_black",
  "rgba(255,255,255,0.11764705882352941) -> white_alpha_12",
  "rgba(0,0,0,0.30196078431372547) -> black_alpha_30",
  "rgba(0,0,0,0.8) -> black_alpha_80",
  "rgba(255,255,255,0.8705882352941177) -> white_alpha_87",
  "rgba(0,0,0,0.45098039215686275) -> black_alpha_45",
  "rgba(255,255,255,0.45098039215686275) -> white_alpha_45",
  "rgba(0,0,0,0.0784313725490196) -> black_alpha_8",
  "rgba(255,255,255,0.0784313725490196) -> white_alpha_8",
  "rgba(0,0,0,0.12156862745098039) -> black_alpha_12",
  "rgba(255,255,255,0.12156862745098039) -> white_alpha_12",
  "rgba(0,0,0,0.2980392156862745) -> black_alpha_30",
  "rgba(255,51,51,1) -> red",
  "rgba(0,0,0,0.10196078431372549) -> black_alpha_12",
  "rgba(255,255,255,0.8392156862745098) -> white_alpha_87",
  "rgba(0,0,0,0.5019607843137255) -> black_alpha_45",
  "rgba(51,51,51,1) -> black_alpha_80",
  "rgba(51,51,51,0.043137254901960784) -> black_alpha_5",
  "rgba(51,51,51,0.0784313725490196) -> black_alpha_8",
  "rgba(255,255,255,0.6784313725490196) -> white_alpha_68",
  "rgba(255,255,255,0.7529411764705882) -> white_alpha_80",
  "rgba(255,255,255,0.050980392156862744) -> white_alpha_6",
  "rgba(0,0,0,0.3215686274509804) -> black_alpha_32",
  "rgba(0,0,0,0.050980392156862744) -> black_alpha_6",

  "rgba(0,0,0,0) -> технический цвет",
  // Сам, ну а что, 1:1 же
  "rgba(0,119,255,1) -> blue",
  // "rgba(243,243,242,1) -> warm_gray_12",
  // "rgba(35,35,33,1) -> warm_gray_5",
  // "rgba(53,52,50,1) -> warm_gray_7",
  "rgba(255,204,0,1) -> yellow",
  "rgba(253,222,85,1) -> yellow_dark",
  "rgba(85,193,81,1) -> green_dark",
  "rgba(251,92,86,1) -> red_dark",
  "rgba(255,83,23,1) -> orange"
];

const done = doneRaw.map((el) => el.split(" -> ")[0]);

const all = { ...divColors };

Object.values(iosColors).forEach((el) => {
  if (all[el.value]) {
    all[el.value] = {
      ...all[el.value],
      place: all[el.value].place.concat(["IOS", ...el.place])
    };
  } else {
    all[el.value] = { ...el, place: ["IOS", ...el.place] };
  }
});

const result = Object.values(all)
  .filter((el) => !done.includes(el.rgba))
  .map((el) => {
    const { rgba, alpha } = el;

    let near = Infinity;
    let nearColor = undefined;
    const chromaColor = chroma(rgba);

    let alphaDiff = 1;
    goodAllColors.forEach(([name, color]) => {
      const chromaColorFromAll = chroma(color);
      const alphaFromAll = chromaColorFromAll.alpha();
      const delta = chroma.deltaE(
        chromaColor.alpha(1).hex(),
        chromaColorFromAll.alpha(1).hex(),
        1,
        1
      );
      const newAlphaDiff = Math.abs(alpha - alphaFromAll);

      if (delta < near && newAlphaDiff <= alphaDiff) {
        alphaDiff = newAlphaDiff;
        near = delta + (alphaDiff > 0.01 ? alphaDiff : 0);
        nearColor = {
          name,
          color
        };
      }
    });

    return {
      ...el,
      near,
      nearColor
    };
  });

const group = Object.values(result).reduce(
  (acc, el) => {
    if (el.near === 0) {
      acc.same.push(el);
    } else if (el.near <= 10) {
      acc.near.push(el);
    } else {
      acc.long.push(el);
    }
    return acc;
  },
  { same: [], near: [], long: [] }
);

function addColor(el, index, where) {
  const tr = document.createElement("tr");
  tr.title = JSON.stringify(el);
  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>
      <div class="color" style="background: ${el.rgba};"></div>
      <p>${el.rgba}</p>
    </td>
    <td>
      <div class="color" style="background: ${el.nearColor.color};"></div>
      <p>${el.nearColor.name}</p>
      <p>${el.nearColor.color}</p>
    </td>
    <td>
      ${el.near}
    </td>
    <td>
      ${el.place.map((el) => `<p>${el}</p>`).join("")}
    </td>
  `;
  document.querySelector(where + " tbody").appendChild(tr);
}

// group.same
//   .sort((a, b) => a.near - b.near)
//   .forEach((el, index) => {
//     addColor(el, index, ".same");
//   });

group.near
  .sort((a, b) => a.near - b.near)
  .forEach((el, index) => {
    addColor(el, index, ".near");
  });

group.long
  .sort((a, b) => a.near - b.near)
  .forEach((el, index) => {
    addColor(el, index, ".long");
  });
