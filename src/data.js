export const API_KEY = 'AIzaSyALb9MzlD4_McsDoGQnrLLhQ69aCoIoXMs';

export const value_converter = (value) => { // Renamed function
  if (value > 1000000) {
    return Math.floor(value / 1000000) + 'M';
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + 'k';
  } else {
    return value;
  }
};
