const createRem = (size: number) => `${size / 16}rem`;

const size = {
  xxxs: createRem(8),
  xxs: createRem(10),
  xs: createRem(12),
  small: createRem(14),
  base: createRem(16),
  lg: createRem(18),
  xl: createRem(20),
  xxl: createRem(22),
  xxxl: createRem(24),
  long: createRem(32),
  longlong: createRem(64),
  title: createRem(50)
};
const color = {
  sky: 'rgb(107, 181, 255)',
  grey: 'rgb(175 177 179)',
  white: 'white',
  background: '#F0F1F2',
  border: '#E4E5E6',
}

export default {
  size, color
};
