import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import KakaoVoice, {
  VOICE_MAN_DIALOG_BRIGHT,
  VOICE_WOMAN_READ_CALM,
  VOICE_MAN_READ_CALM,
  VOICE_WOMAN_DIALOG_BRIGHT,
} from 'react-native-kakao-voice';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [message, setMessage] = React.useState<string>('');
  const [voice, setVoice] = React.useState<string>(VOICE_WOMAN_READ_CALM);

  const onPress = React.useCallback(() => {
    KakaoVoice.play(message, voice, 1.0);
  }, [message, voice]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>목소리</Text>
      <Picker
        style={styles.picker}
        selectedValue={voice}
        onValueChange={(itemValue) => setVoice(itemValue)}
      >
        <Picker.Item label="차분한 여자" value={VOICE_WOMAN_READ_CALM} />
        <Picker.Item label="밝은 여자" value={VOICE_WOMAN_DIALOG_BRIGHT} />
        <Picker.Item label="차분한 남자" value={VOICE_MAN_READ_CALM} />
        <Picker.Item label="밝은 남자" value={VOICE_MAN_DIALOG_BRIGHT} />
      </Picker>

      <Text style={styles.label}>메시지</Text>
      <TextInput style={styles.input} onChangeText={setMessage} />

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>재생</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  picker: {
    marginBottom: 24,
  },
  label: {
    color: '#868e96',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#868e96',
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#495057',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    padding: 12,
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
  },
});
