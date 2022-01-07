import type { ReactChild } from 'react';
import type { ViewStyle } from 'react-native';

export type SearchTemplateProps = {
  header?: ReactChild;
  body?: ReactChild;
  footer?: ReactChild;
  headerStyle?: ViewStyle;
  bodyStyle?: ViewStyle;
  footerStyle?: ViewStyle;
  scrollable?: boolean;
};
