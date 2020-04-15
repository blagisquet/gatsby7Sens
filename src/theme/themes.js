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
  backgroundColor: darken(0.5, colors.black),
  frontColor: colors.white,
  titleColor: colors.primary 
}