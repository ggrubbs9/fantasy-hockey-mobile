import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {LocalNotification} from './services/LocalPushController';

const App = () => {
  const handleButtonPress = () => {
    console.log('hit');
    // LocalNotification();
  };

  useEffect(() => {
    var today = new Date().getMinutes();
    console.log(today);
    if (today > 10) {
      LocalNotification();
    }
  });

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{marginTop: 20}}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
