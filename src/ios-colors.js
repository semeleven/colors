import chroma from "chroma-js";
import { toArgba } from "./utils";

const rawColors = [
  'Text.primary = UIColor.hex("#000000")',
  'Text.secondary = UIColor.hex("#000000", alpha: 0.8)',
  'Text.tetriary = UIColor.hex("#000000", alpha: 0.5)',
  'Text.quaternary = UIColor.hex("#000000", alpha: 0.3)',
  'Text.quinary = UIColor.hex("#000000", alpha: 0.16)',
  'Text.primaryInverted = UIColor.hex("#FFFFFF")',
  'Text.secondaryInverted = UIColor.hex("#FFFFFF", alpha: 0.7)',
  'Text.tetriaryInverted = UIColor.hex("#FFFFFF", alpha: 0.5)',
  'Text.quaternaryInverted = UIColor.hex("#FFFFFF", alpha: 0.3)',
  'Text.quinaryInverted = UIColor.hex("#FFFFFF", alpha: 0.16)',
  'Text.defaultPriceDark = UIColor.hex("#FFFFFF", alpha: 0.8)',
  'Text.discountPriceLight = UIColor.hex("#FF3333")',
  'Text.discountPriceDark = UIColor.hex("#FB5C56")',
  'Text.previousPriceDark = UIColor.hex("#FFFFFF", alpha: 0.45)',
  'Text.ecomProductsSingleTitleDark = UIColor.hex("#FFFFFF", alpha: 0.6)',
  'Text.ecomProductsMultipleTitleDark = UIColor.hex("#FFFFFF", alpha: 0.8)',
  'Text.cardMetaInfoLight = UIColor.hex("#000000", alpha: 0.45)',
  'Text.cardMetaInfoDark = UIColor.hex("#FFFFFF", alpha: 0.45)',
  'Text.searchBarPlaceholder = UIColor.hex("#000000", alpha: 0.3)',
  'Text.menuExpandedInfoLight = UIColor.hex("#000000", alpha: 0.45)',
  'Text.adOldPrice = UIColor.hex("#000000", alpha: 0.45)',
  'Text.adDiscount = UIColor.hex("#FFFFFF")',
  'Text.adDiscountPrice = UIColor.hex("#FF3333")',
  'Text.overlayDisclaimer = UIColor.hex("#000000", alpha: 0.32)',
  'Background.primary = UIColor.hex("#FFFFFF")',
  'Background.secondary = UIColor.hex("#F0F1F5")',
  'Background.tetriary = UIColor.hex("#E7E9EF")',
  'Background.quaternary = UIColor.hex("#D0D1D9")',
  'Background.primaryInverted = UIColor.hex("#000000")',
  'Background.secondaryInverted = UIColor.hex("#252831")',
  'Background.feed = UIColor.hex("#F5F6F8")',
  'Background.updatedDesignFeed = UIColor.hex("#F3F2F2")',
  'Background.updatedEcomProductsCardLight = UIColor.hex("#F3F2F2")',
  'Background.updatedEcomProductsCardDark = UIColor.hex("#232321")',
  'Background.ecomProductsCardDark = UIColor.hex("#2E2F34")',
  'Background.priceStubLight = UIColor.hex("#333333", alpha: 0.08)',
  'Background.priceStubDark = UIColor.hex("#FFFFFF", alpha: 0.08)',
  'Background.clickToWatchWithSound = UIColor.hex("#333333", alpha: 0.85)',
  'Background.logoViewFaderColor = UIColor.hex("#31312D", alpha: 0.06)',
  'Background.searchBar = UIColor.hex("#000000", alpha: 0.06)',
  'Background.adDiscount = UIColor.hex("#FF3333")',
  'Background.imageOverlay = UIColor.hex("#000000", alpha: 0.05)',
  'Background.tappedAdVideo = UIColor.hex("#000000", alpha: 0.5)',
  'Background.adButton = UIColor.hex("#FFFFFF", alpha: 0.8)',
  'Background.videoControlsBackground = UIColor.hex("#000000", alpha: 0.2)',
  'Background.placeholderBackgroundInverted = UIColor.hex("#1A1A19")',
  'Background.ratingStarsBackground = UIColor.hex("#DDDEE1")',
  'Fade.regular = UIColor.hex("#000000", alpha: 0.5)',
  'Fade.light = UIColor.hex("#000000", alpha: 0.3)',
  'Fade.avatarsFade = UIColor.hex("#333333", alpha: 0.05)',
  'Accent.yellow = UIColor.hex("#FFCC00")',
  'Accent.blue = UIColor.hex("#0077FF")',
  'Accent.blueInverted = UIColor.hex("#80BBFF")',
  'Accent.red = UIColor.hex("#FF0000")',
  'Accent.green = UIColor.hex("#00B341")',
  'Brand.anthracite = UIColor.hex("#252630")',
  'Brand.amaranth = UIColor.hex("#E7403E")',
  'Other.imageBorder = UIColor.hex("#000000", alpha: 0.12)',
  'Other.stubsColor = UIColor.hex("#F2F2F2")',
  'Other.shadowColor = UIColor.hex("#0D142E")',
  'Other.buttonSecondaryInverted = UIColor.hex("#77756F")',
  'Separator.separator = UIColor.hex("#000000", alpha: 0.2)',
  'Separator.separatorLight = UIColor.hex("#000000", alpha: 0.08)',
  'Separator.separatorInverted = UIColor.hex("#FFFFFF", alpha: 0.4)',
  'NoImageAdCardBackground.option1[0] = UIColor.hex("#E22049")',
  'NoImageAdCardBackground.option1[1] = UIColor.hex("#EC6133")',
  'NoImageAdCardBackground.option2[0] = UIColor.hex("#5037DC")',
  'NoImageAdCardBackground.option2[1] = UIColor.hex("#2574FA")',
  'NoImageAdCardBackground.option3[0] = UIColor.hex("#3778E5")',
  'NoImageAdCardBackground.option4[0] = UIColor.hex("#DF5835")',
  'NoImageAdCardBackground.option5[0] = UIColor.hex("#4841DD")'
];

const result = {};

rawColors.forEach((el) => {
  const [dotPath, rawValue] = el.split(" = ");
  let { color, alpha } = stringToColor(rawValue);

  color = color.toLowerCase();
  const chromaColor = chroma(color);
  const [r, g, b] = chromaColor.rgba();
  const rgba = `rgba(${r},${g},${b},${alpha})`;

  const value = toArgba({
    a: alpha,
    r,
    g,
    b
  });

  if (result[value]) {
    result[value].place.push(dotPath);
    return;
  }

  result[value] = {
    value,
    alpha,
    rgba,
    place: [dotPath]
  };
});

export { result };

function stringToColor(rawColor) {
  const regex = /#([\da-fA-F]{3,})/g;
  const [color] = rawColor.match(regex);
  const alphaRegex = /alpha\D+([\d|.]+)/;
  const some = rawColor.match(alphaRegex);
  let alpha = 1;
  if (some) {
    alpha = +some[1];
  }

  return { color, alpha };
}
