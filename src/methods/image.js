import ImageResizer from 'react-native-image-resizer';
import {DEFAULT_USER_IMAGE_DIMENSION} from './../constants';

const getBase64ForUploadedImage = image => {
  if (image.mime && image.data) {
    const base64Image = `data:${image.mime};base64,${image.data}`;
    return base64Image;
  }
  return '';
};

/*
  For the options and API interface follow:
  https://www.npmjs.com/package/react-native-image-resizer
*/
const resizeImageToDimensions = async (
  image,
  maxWidth = DEFAULT_USER_IMAGE_DIMENSION,
  maxHeight = DEFAULT_USER_IMAGE_DIMENSION,
  quality = 100,
) => {
  const base64Image = getBase64ForUploadedImage(image);

  const compressFormat = 'JPEG';
  const rotation = 0;
  const outputPath = null;
  const keepMeta = true;

  const options = {
    onlyScaleDown: true,
    mode: 'stretch',
  };

  try {
    const resizedImage = await ImageResizer.createResizedImage(
      base64Image,
      maxWidth,
      maxHeight,
      compressFormat,
      quality,
      rotation,
      outputPath,
      keepMeta,
      options,
    );
    return resizedImage;
  } catch (err) {
    return null;
  }
};

const createAndFillArray = (num, func, params) =>
  Array(num).fill(func(num, params));

const getImagesSizesForCollage = (imagesNumber, ...collageWidthAndSpacing) => {
  const firstRowImagesNumber =
    imagesNumber === 2 ? 0 : Math.floor(imagesNumber / 2);
  const secondRowImagesNumber =
    imagesNumber === 2 ? 2 : Math.ceil(imagesNumber / 2);

  return createAndFillArray(
    firstRowImagesNumber,
    getImageSizes,
    collageWidthAndSpacing,
  ).concat(
    createAndFillArray(
      secondRowImagesNumber,
      getImageSizes,
      collageWidthAndSpacing,
    ),
  );
};

const getImageSizes = (imagesPerRow, collageWidthAndSpacing) => {
  if (imagesPerRow === 1) {
    return [
      getImageWidth(1, ...collageWidthAndSpacing),
      getImageWidth(5 / 3, ...collageWidthAndSpacing), // since single image in the row dimensions are ≈ 5:3
    ];
  }
  return Array(2).fill(getImageWidth(imagesPerRow, ...collageWidthAndSpacing));
};

const getImageWidth = (imagesPerRow, collageWidth, spacing) => {
  return (collageWidth - (imagesPerRow - 1) * spacing) / imagesPerRow;
};

export {
  getBase64ForUploadedImage,
  resizeImageToDimensions,
  getImagesSizesForCollage,
};
