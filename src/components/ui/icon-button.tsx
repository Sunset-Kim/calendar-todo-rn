import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type IconButtonProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  iconStyle?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
} & PressableProps;

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  color = 'black',
  iconStyle,
  pressableStyle,
  ...props
}) => {
  return (
    <Pressable
      style={[styles.pressable, pressableStyle]}
      {...props}
    >
      {({ pressed }) => (
        <Ionicons
          name={name}
          size={size}
          color={pressed ? 'gray' : color}
          style={[styles.icon, iconStyle]}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
});

export default IconButton;
