import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native';

const { width:SCREEN_WIDTH } = Dimensions.get("window");

console.log(SCREEN_WIDTH)

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <ScrollView 
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        //indicatorStyle="white"
        contentContainerStyle={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View><View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather:{
    
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontWeight: "500",
    fontSize: 178,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});

export default App;
