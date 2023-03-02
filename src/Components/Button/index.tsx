import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '@/Themes/Color';
import {scale} from 'react-native-utils-scale';

type Props = {
  color?: string[];
};

const CButton: React.FC<Props> = ({
  color = [COLORS.PRIMARY, COLORS.PINK_CHALK],
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <LinearGradient colors={color} style={styles.buttonLinear}>
        <Text>hehe</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    width: scale(200),
  },
  buttonLinear: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
  },
});
