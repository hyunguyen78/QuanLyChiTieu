import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontScale, scale} from 'react-native-utils-scale';
import {COLORS} from '@/Themes/Color';
import CIcon from '@/Components/Icon';
import {TYPE} from '@/Themes/Fonts';

type Props = {};

const BoxCalendar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topAction}>
        <TouchableOpacity>
          <CIcon name="chevron-back-outline" color={COLORS.GRAY_DARK} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.topActionText}>Junuary 2023</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <CIcon name="chevron-forward-outline" color={COLORS.GRAY_DARK} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.bottomMoney}>
        <View style={styles.bottomMoneyItem}>
          <Text style={styles.bottomMoneyItemText}>Income</Text>
          <Text
            style={{...styles.bottomMoneyItemNumber, color: COLORS.GRAY_DARK}}>
            3.000 $
          </Text>
        </View>
        <View style={styles.bottomMoneyItem}>
          <Text style={styles.bottomMoneyItemText}>Expenses</Text>
          <Text
            style={{...styles.bottomMoneyItemNumber, color: COLORS.PINK_CHALK}}>
            -2.000 $
          </Text>
        </View>
        <View style={styles.bottomMoneyItem}>
          <Text style={styles.bottomMoneyItemText}>Balance</Text>
          <Text style={{...styles.bottomMoneyItemNumber, color: COLORS.GREEN}}>
            1.000 $
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BoxCalendar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: scale(140),
    borderRadius: scale(20),
    padding: scale(15),
  },
  topAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topActionText: {
    fontSize: fontScale(18),
    color: COLORS.GRAY_DARK,
    fontFamily: TYPE.SpaceGrotesk_Regular,
  },
  line: {
    height: scale(1),
    backgroundColor: COLORS.LINE,
    marginTop: scale(10),
  },
  bottomMoney: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  bottomMoneyItem: {
    alignItems: 'center',
  },
  bottomMoneyItemText: {
    fontSize: fontScale(15),
    color: COLORS.GRAY_LIGHT,
    fontFamily: TYPE.SpaceGrotesk_Medium,
  },
  bottomMoneyItemNumber: {
    fontSize: fontScale(17),
    fontFamily: TYPE.SpaceGrotesk_Bold,
  },
});
