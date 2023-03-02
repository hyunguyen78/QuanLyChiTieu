import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/Themes/Color';
import {fontScale, scale} from 'react-native-utils-scale';
import {TYPE} from '@/Themes/Fonts';

type Props = {
  item: any;
};

const ItemTransaction: React.FC<Props> = ({item}) => {
  const dataItem = new Array(3);
  const _renderItem = ({item, index}: any) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Image source={require('@/Assets/Icons/Category/food.png')} />
          <Text style={styles.itemTextName}>Food</Text>
        </View>
        <Text style={styles.itemTextName}> -70 $</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topDate}>SATURDAY, 25 JAN</Text>
        <Text style={styles.topDateMoney}>-570 $</Text>
      </View>
      <FlatList
        data={dataItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        ListHeaderComponent={() => <View style={styles.line} />}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
    </View>
  );
};

export default ItemTransaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    padding: scale(15),
    flex: 1,
    borderRadius: 15,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  topDate: {
    fontSize: fontScale(16),
    color: COLORS.GRAY_LIGHT,
    fontFamily: TYPE.SpaceGrotesk_Regular,
  },
  topDateMoney: {
    fontSize: fontScale(11),
    color: COLORS.GRAY_LIGHT,
    fontFamily: TYPE.SpaceGrotesk_Regular,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTextName: {
    color: COLORS.GRAY_DARK,
    fontSize: fontScale(15),
    fontFamily: TYPE.SpaceGrotesk_Light,
    marginLeft: scale(10),
  },
  line: {
    height: scale(1),
    backgroundColor: COLORS.LINE,
    marginVertical: scale(5),
  },
});
