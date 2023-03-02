import {COLORS} from '@/Themes/Color';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

const CIcon: React.FC<Props> = ({name, size = 28, color = COLORS.WHITE}) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default CIcon;
