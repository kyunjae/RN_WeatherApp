import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 2, backgroundColor: "tomato"}}>
          <Text>Hi! I'm going to make a RN App!</Text>
        </View>
        <View style={{flex: 3, backgroundColor: "teal"}}>

        </View>
        <View style={{flex: 1, backgroundColor: "orange"}}>

        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default App;
