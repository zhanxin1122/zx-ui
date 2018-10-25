import constant from './constant';
export const getFont = (textStyle, globalTextStyle) => {
  let fontStyle = textStyle.fontStyle
    ? textStyle.fontStyle
    : globalTextStyle && globalTextStyle.fontStyle
      ? globalTextStyle.fontStyle
      : '';
  let fontVariant = textStyle.fontVariant
    ? textStyle.fontVariant
    : globalTextStyle && globalTextStyle.fontVariant
      ? globalTextStyle.fontVariant
      : '';
  let fontWeight = textStyle.fontWeight
    ? textStyle.fontWeight
    : globalTextStyle && globalTextStyle.fontWeight
      ? globalTextStyle.fontWeight
      : constant.defaultFontWeight;
  let fontSize = textStyle.fontSize
    ? textStyle.fontSize
    : globalTextStyle && globalTextStyle.fontSize
      ? globalTextStyle.fontSize
      : constant.defaultFontSize;
  // let lineHeight = textStyle.lineHeight
  //   ? textStyle.lineHeight
  //   : globalTextStyle && globalTextStyle.lineHeight
  //     ? globalTextStyle.lineHeight
  //     : fontSize;
  let fontFamily = textStyle.fontFamily
    ? textStyle.fontFamily
    : globalTextStyle && globalTextStyle.fontFamily
      ? globalTextStyle.fontFamily
      : constant.defaultFontFamily;
  console.log(` ${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`.trim());
  return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`.trim();
};
export const getLegendColor = color => {
  if (color && color.length > 0) {
    return color;
  }
  return constant.defaultLegendColor;
};
export default {
  getFont,
  getLegendColor
};
