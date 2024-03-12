import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.firstBlock}>
          <View style={{ flex: 1 }}>
            <Image source={require('./assets/Oval.png')} alt='No Image' style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Octocat</Text>
            <Text style={{ color: 'blue', fontSize: 17 }}>@octocat</Text>
            <Text style={{ fontSize: 19 }}>Joined 25 Jan 2011</Text>
          </View>

        </View>
        <View style={styles.secondBlock}>
          <Text style={{ textAlign: 'justify', fontSize: 16,color:'gray' }}>
            Minim labore in in velit mollit anim reprehenderit aliqua veniam consectetur
            commodo quis. Est adipisicing do cillum duis magna eu. Non ad voluptate aute
            magna exercitation enim excepteur esse. Adipisicing proident quis anim fugiat
            irure laboris cupidatat est laboris eiusmod nulla.
          </Text>
        </View>
        <View style={styles.thirdBlock}>
          <View style={{alignItems:'center'}}>
            <Text style={[styles.thirdBlockStyle,styles.thirdBlockFontColor]}>Repos</Text>
            <Text style={styles.thirdBlockStyle}>8</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={[styles.thirdBlockStyle,styles.thirdBlockFontColor]}>Followers</Text>
            <Text style={styles.thirdBlockStyle}>3839</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={[styles.thirdBlockStyle,styles.thirdBlockFontColor]}>Following</Text>
            <Text style={styles.thirdBlockStyle}>9</Text>
          </View>
        </View>
        <View style={styles.forthBlock}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
            <View style={{ flex: 1 }}>
              <Image source={require('./assets/003-pin.png')} alt='No Image' style={{ width: 35, height: 50 }} />
            </View>
            <Text style={{ flex: 3,fontSize:20 }}>San Francisco</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
            <View style={{ flex: 1 }}>
              <Image source={require('./assets/002-url.png')} alt='No Image' style={{ width: 50, height: 50 }} />
            </View>
            <Text style={{ flex: 3,fontSize:20 }}>https://github.blog</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <View style={{ flex: 1 }}>
              <Image source={require('./assets/004-twitter.png')} alt='No Image' style={{ width: 50, height: 50,tintColor:'gray' }} />
            </View>
            <Text style={{ flex: 3 ,fontSize:20,color:'gray'}}>Not Available</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
          <View style={{ flex: 1 }}>
            <Image source={require('./assets/001-office-building.png')} alt='No Image' style={{ width: 50, height: 50 }} />
            </View>
            <Text style={{ flex: 3,fontSize:20 }}>@github</Text>
          </View>
        </View>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    marginHorizontal: 20
  },
  firstBlock: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
    paddingHorizontal: 20
  },

  secondBlock: {
    flex: 0.2,
    width: '100%',

  },
  thirdBlock: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#F6F8FF',
    paddingVertical: 20,
    paddingHorizontal: 30,

    borderRadius: 20
  },
  thirdBlockStyle: {
    fontSize: 20
  },
  thirdBlockFontColor:{
    color:'gray'
  },
  forthBlock: {
    flex: 0.4,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    gap: 20
  }
});
