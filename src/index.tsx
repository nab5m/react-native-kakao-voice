import { NativeModules } from 'react-native';

type KakaoVoiceType = {
  play(message: string, voice: string, speed: number): void;
  getConstants(): any;
};

const { KakaoVoice } = NativeModules;

export default KakaoVoice as KakaoVoiceType;

type Constants = {
  VOICE_WOMAN_READ_CALM: string;
  VOICE_WOMAN_DIALOG_BRIGHT: string;
  VOICE_MAN_DIALOG_BRIGHT: string;
  VOICE_MAN_READ_CALM: string;
};

const {
  VOICE_WOMAN_DIALOG_BRIGHT,
  VOICE_WOMAN_READ_CALM,
  VOICE_MAN_READ_CALM,
  VOICE_MAN_DIALOG_BRIGHT,
}: Constants = KakaoVoice.getConstants();

export {
  VOICE_WOMAN_DIALOG_BRIGHT,
  VOICE_WOMAN_READ_CALM,
  VOICE_MAN_READ_CALM,
  VOICE_MAN_DIALOG_BRIGHT,
};
