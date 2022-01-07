import { Animated, View } from 'react-native';
import React, { Fragment } from 'react';
import s from './styles';
import type { SearchTemplateProps } from './types';

export const SearchTemplate: React.FC<SearchTemplateProps> = ({
  header,
  body,
  footer,
  headerStyle,
  bodyStyle,
  footerStyle,
  scrollable,
}) => {
  // useEffect(() => {
  //   LayoutAnimation.configureNext(
  //     LayoutAnimation.create(
  //       300,
  //       LayoutAnimation.Types.keyboard,
  //       LayoutAnimation.Properties.scaleXY
  //     )
  //   );
  // }, []);

  const BodyWrapper = scrollable ? Animated.ScrollView : Fragment;
  const bodyStyles = scrollable ? s.scrollableBody : s.body;
  const bodyWrapperStyles = scrollable ? s.scrollableBodyWrapper : undefined;

  return (
    <View style={[s.container]}>
      <View style={[s.header, headerStyle]}>{header}</View>
      <View style={[bodyStyles, bodyStyle]}>
        <BodyWrapper contentContainerStyle={bodyWrapperStyles}>
          {body}
        </BodyWrapper>
      </View>
      <View style={[s.footer, footerStyle]}>{footer}</View>
    </View>
  );
};
