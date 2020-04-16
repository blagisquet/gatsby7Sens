import { colors } from './helpers';
import { darken } from 'polished';

export const lightTheme = {
  name: 'light',
  backgroundColor: colors.white,
  fontColor: colors.black,
  titleColor: darken(0.2, colors.primary)
}

export const darkTheme = {
  name: 'dark',
  backgroundColor: colors.greyDarker,
  frontColor: colors.white,
  titleColor: colors.primary 
}