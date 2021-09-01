import chroma from "chroma-js";
import { argb2rgba, walkItems } from "./utils";

const Theme = {
  Light: "light",
  Dark: "dark"
};

export const COLORS = {
  adaptive: {
    background: {
      primary: {
        [Theme.Light]: "#FFFFFF",
        [Theme.Dark]: "#111215"
      },
      secondary: {
        [Theme.Light]: "#F0F1F5",
        [Theme.Dark]: "#1D1E22"
      },
      tertiary: {
        [Theme.Light]: "#E7E9EF",
        [Theme.Dark]: "#25262A"
      },
      quaternary: {
        [Theme.Light]: "#D0D1D9",
        [Theme.Dark]: "#2E2F34"
      }
    },
    text: {
      primary: {
        [Theme.Light]: "#000000",
        [Theme.Dark]: "#d6ffffff"
      },
      secondary: {
        [Theme.Light]: "#333333",
        [Theme.Dark]: "#adffffff"
      },
      tertiary: {
        [Theme.Light]: "#808080",
        [Theme.Dark]: "#c0ffffff"
      },
      quaternary: {
        [Theme.Light]: "#b3b3b3",
        [Theme.Dark]: "#1effffff"
      },
      low: {
        [Theme.Light]: "#8C8C8C",
        [Theme.Dark]: "#818181"
      },
      disabled: {
        [Theme.Light]: "#4D000000",
        [Theme.Dark]: "#4D000000"
      },
      alice_button_text: {
        [Theme.Light]: "#6839CF",
        [Theme.Dark]: "#6839CF"
      }
    },
    text_and_icon: {
      secondary: {
        [Theme.Light]: "#CC000000",
        [Theme.Dark]: "#DEFFFFFF"
      },
      low: {
        [Theme.Light]: "#73000000",
        [Theme.Dark]: "#73FFFFFF"
      }
    },
    link: {
      primary: {
        [Theme.Light]: "#0077ff",
        [Theme.Dark]: "#0077ff"
      }
    },
    surface_card: {
      primary: {
        [Theme.Light]: "#F3F3F2",
        [Theme.Dark]: "#232321"
      }
    },
    button: {
      primary: {
        [Theme.Light]: "#FFFFFF",
        [Theme.Dark]: "#2E2F34"
      },
      secondary: {
        [Theme.Light]: "#F0F1F5",
        [Theme.Dark]: "#2E2F34"
      },
      expand_text: {
        [Theme.Light]: "#80000000",
        [Theme.Dark]: "#73FFFFFF"
      },
      tertiary: {
        [Theme.Light]: "#F5F4F2",
        [Theme.Dark]: "#353432"
      }
    },
    accent: {
      yellow: {
        [Theme.Light]: "#FFCC00",
        [Theme.Dark]: "#FDDE55"
      },
      green: {
        [Theme.Light]: "#1DB232",
        [Theme.Dark]: "#55C151"
      },
      blue: {
        [Theme.Light]: "#0077FF",
        [Theme.Dark]: "#0077FF"
      }
    },
    support: {
      avatar_fade: {
        [Theme.Light]: "#0B333333",
        [Theme.Dark]: "#0DFFFFFF"
      },
      separator: {
        [Theme.Light]: "#14000000",
        [Theme.Dark]: "#14ffffff"
      },
      stub: {
        [Theme.Light]: "#14333333",
        [Theme.Dark]: "#14FFFFFF"
      }
    },
    border: {
      image: {
        [Theme.Light]: "#1F000000",
        [Theme.Dark]: "#1FFFFFFF"
      }
    },
    indicator: {
      active: {
        [Theme.Light]: "#000000",
        [Theme.Dark]: "#ffffff"
      }
    },
    products: {
      fadeForImagesOnGrayBackground: {
        [Theme.Dark]: "#0000",
        // совпадает с redesignBackground === '#F3F3F2' на белом фоне
        [Theme.Light]: "#0F373726"
      },
      moreProductsCardFade: {
        [Theme.Light]: "#4C000000",
        [Theme.Dark]: "#4C000000"
      },
      discountPrice: {
        [Theme.Light]: "#FF3333",
        [Theme.Dark]: "#FB5C56"
      },
      oldPrice: {
        [Theme.Light]: "#000000",
        [Theme.Dark]: "#FFFFFF"
      },
      redesignBackground: {
        [Theme.Light]: "#F3F3F2",
        [Theme.Dark]: "#232321"
      },
      imageBackground: {
        [Theme.Light]: "#FFFFFF",
        [Theme.Dark]: "#FFFFFF"
      }
    }
  },
  strict: {
    basic: {
      black: {
        primary: "#000000"
      },
      white: {
        primary: "#ffffff"
      },
      transparent: {
        primary: "#0000"
      },
      interview: "#52000000"
    },
    overlay: "#1A000000",
    subscriptionsShowcase: {
      background: "#FFCC00"
    },
    subscriptionsSome: {
      card: "#c6c4c3",
      avatar_1: "#282820",
      avatar_2: "#181818"
    },
    view_all: "#F3F3F2",
    publications: {
      image_default: "#14000000"
    },
    subscriptionsAllSubs: {
      background: "#F5F5F5"
    },
    recommendations: {
      all_button: "#FF5317"
    },
    indicator_inactive: "#ADADAD",
    showcase: {
      text_background: "#0D000000"
    }
  }
};

export const result = mapDivToUnionFormat();

function mapDivToUnionFormat() {
  const result = {};
  walkItems(COLORS, (value, path) => {
    value = value.toLowerCase();
    const rgba = argb2rgba(value);
    const dotPath = path.join(".");

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
  return result;
}
