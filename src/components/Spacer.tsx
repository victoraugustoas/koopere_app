import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  flex?: number;
}

export function Spacer(props: SpacerProps) {
  return <View style={{flex: props.flex ?? 1}} />;
}
