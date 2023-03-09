import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '@/Themes/Color';
import {fontScale, scale} from 'react-native-utils-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TYPE} from '@/Themes/Fonts';
const {width: W} = Dimensions.get('window');
type Props = {
  valueHeader: any;
};

const Header: React.FC<Props> = ({valueHeader}) => {
  return (
    <Animated.View>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={[COLORS.PRIMARY, COLORS.PINK_CHALK]}
        style={{...styles.container}}
      />
      <View
        style={{
          position: 'absolute',
          top: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: scale(20),
          }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/247327370_1482461048797754_6143793570964966705_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rUteaXjnxMEAX9Wpxse&tn=e3CERpPpOrVm_Ksf&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCdLMqqNlg3ThjwPFiH1qiH5pSzqX42vfpm1LixEPRZeQ&oe=6403C337',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={30}
                color={COLORS.WHITE}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.boxTextTitle}>OVERVIEW</Text>
          <Text style={styles.boxTextSub}>
            Here is a list of your transactions.
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: scale(350),
    width: W - 120,
    left: scale(60),
    top: -85,
    borderRadius: scale(300),
    transform: [{scaleX: 2.5}],
  },
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
  },
  boxText: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: scale(10),
  },
  boxTextTitle: {
    fontSize: fontScale(30),
    color: COLORS.WHITE,
    fontFamily: TYPE.SpaceGrotesk_Bold,
  },
  boxTextSub: {
    fontSize: fontScale(16),
    color: COLORS.WHITE,
    opacity: 0.5,
    marginTop: scale(5),
    fontFamily: TYPE.SpaceGrotesk_Light,
  },
});
