import { NativeModules } from 'react-native';

type KakaoVoiceType = {
  multiply(a: number, b: number): Promise<number>;
};

const { KakaoVoice } = NativeModules;

export default KakaoVoice as KakaoVoiceType;
