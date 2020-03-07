import StyleSystem from '@model/StyleSystem';

const DefaultTheme: StyleSystem = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff'],
    text: ['#333'],
    grayscales: {
      dark: ['#12171f', '#161a23', '#181c27', '#1f2330', '#252836', '#303645'],
      light: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    },
  },
};

export const DarkTheme: StyleSystem = {
  color: {
    ...DefaultTheme.color,
    bg: ['#232326'],
  },
};

export default DefaultTheme;