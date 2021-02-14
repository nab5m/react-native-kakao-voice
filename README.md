# react-native-kakao-voice

<img src="./assets/screenShot1.jpeg" alt="스크린샷1" width="150" />

본 프로젝트는 카카오 음성 합성 api를 리액트 네이티브에서 사용하는 것을 목표로 합니다.
안드로이드에서는 실제 기기에서만 테스트 가능합니다.[(참고)](https://devtalk.kakao.com/t/topic/94870)
ios도 연결 예정입니다.

kakao voice api

## Installation

```sh
npm install react-native-kakao-voice
react-native link react-native-kakao-voice
```

## Usage
example 프로젝트를 참고해주세요 <br>
### play(message: string, voice: string, speed: number)

```js
import KakaoVoice, {
  VOICE_MAN_DIALOG_BRIGHT,
  VOICE_WOMAN_READ_CALM,
  VOICE_MAN_READ_CALM,
  VOICE_WOMAN_DIALOG_BRIGHT,
} from 'react-native-kakao-voice';

// ...

KakaoVoice.play("안녕", VOICE_MAN_DIALOG_BRIGHT, 1.0);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
