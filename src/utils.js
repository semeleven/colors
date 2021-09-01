export function argb2rgba(argb) {
  const len = String(argb).length;

  // #RGB
  if (len === 4) {
    argb = `#ff${argb[1] + argb[1]}${argb[2] + argb[2]}${argb[3] + argb[3]}`;
  }

  // #ARGB,
  if (len === 5) {
    argb = `#${argb[1] + argb[1]}${argb[2] + argb[2]}${argb[3] + argb[3]}${
      argb[4] + argb[4]
    }`;
  }

  // #RRGGBB
  if (len === 7) {
    argb = "#ff" + argb.split("#")[1];
  }

  // #AARRGGBB
  if (String(argb).length !== 9) {
    throw new Error("unexpected color");
  }
  var dealList = argb.split("");
  var opacity = Number("0x" + dealList[1] + dealList[2]) / 255;
  var rvalue = Number("0x" + dealList[3] + dealList[4]);
  var gvalue = Number("0x" + dealList[5] + dealList[6]);
  var bvalue = Number("0x" + dealList[7] + dealList[8]);
  return (
    "rgba(" +
    rvalue.toFixed(0) +
    "," +
    gvalue.toFixed(0) +
    "," +
    bvalue.toFixed(0) +
    "," +
    opacity +
    ")"
  );
}

export function walkItems(root, action) {
  function dfs(value, path) {
    if (typeof value === "string") {
      action(value, path);
      return;
    }

    for (const [key1, value1] of Object.entries(value)) {
      dfs(value1, path.concat([key1]));
    }
    return;
  }

  Object.entries(root).forEach(([key, value]) => dfs(value, [key]));
}

export function toArgba(atom) {
  let result = "#";
  if (atom.a !== 1) {
    result += transformToComponent(atom.a * 255);
  } else {
    result += "ff";
  }
  result += transformToComponent(atom.r);
  result += transformToComponent(atom.g);
  result += transformToComponent(atom.b);
  return result;
}

const transformToComponent = (value) => {
  return pad(Math.round(value).toString(16), "0", 2);
};

const pad = (str, padWith, len) => {
  return padWith.repeat(len - str.length) + str;
};
