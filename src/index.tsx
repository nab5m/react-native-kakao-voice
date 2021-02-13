import { NativeModules } from 'react-native';

type KakaoVoiceType = {
  play(message: string): void;
};

const { KakaoVoice } = NativeModules;

export default KakaoVoice as KakaoVoiceType;
