import parser from "fast-xml-parser";
import chroma from "chroma-js";
import { xml } from "./android-xml-colors";
import { argb2rgba } from "./utils";

const { color } = parser.parse(xml, { ignoreAttributes: false }).resources;

export const result = {};

color
  .filter((el) => el["#text"].startsWith("#"))
  .forEach((el) => {
    const value = el["#text"].toLowerCase();
    const rgba = argb2rgba(value);

    const dotPath = el["@_name"];

    if (result[value]) {
      result[value].place.push(dotPath);
      return;
    }

    const chromaColor = chroma(rgba);
    const alpha = chromaColor.alpha();

    result[value] = {
      value,
      alpha,
      rgba,
      place: [dotPath]
    };
  });
