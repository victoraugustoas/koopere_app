import React from 'react';
import {View} from 'react-native';

interface SizedBoxProps {
  height?: number;
  width?: number;
}

export function SizedBox(props: SizedBoxProps) {
  return <View style={{height: props.height, width: props.width}} />;
}
