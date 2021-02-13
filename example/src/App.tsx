import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import KakaoVoice from 'react-native-kakao-voice';

export default function App() {
  const [result] = React.useState<number | undefined>();

  React.useEffect(() => {
    KakaoVoice.play('안녕');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
