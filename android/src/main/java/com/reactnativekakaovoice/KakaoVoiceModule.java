package com.reactnativekakaovoice;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import com.kakao.sdk.newtoneapi.TextToSpeechClient;
import com.kakao.sdk.newtoneapi.TextToSpeechManager;
import com.kakao.sdk.newtoneapi.TextToSpeechListener;

import java.util.Map;
import java.util.HashMap;

public class KakaoVoiceModule extends ReactContextBaseJavaModule implements TextToSpeechListener {
    public KakaoVoiceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        TextToSpeechManager.getInstance().initializeLibrary(reactContext);
    }

    @Override
    public void onError(int code, String message) {
        Log.e("TextToSpeechActivity", message);
    }
    @Override
    public void onFinished() {

    }

    @Override
    public String getName() {
        return "KakaoVoice";
    }

    @Override
    public Map<String, Object> getConstants() {
       final Map<String, Object> constants = new HashMap<>();

       // voice
       constants.put("VOICE_WOMAN_READ_CALM", TextToSpeechClient.VOICE_WOMAN_READ_CALM);
       constants.put("VOICE_WOMAN_DIALOG_BRIGHT", TextToSpeechClient.VOICE_WOMAN_DIALOG_BRIGHT);
       constants.put("VOICE_MAN_DIALOG_BRIGHT", TextToSpeechClient.VOICE_MAN_DIALOG_BRIGHT);
       constants.put("VOICE_MAN_READ_CALM", TextToSpeechClient.VOICE_MAN_READ_CALM);

       return constants;
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void play(String message, String voice, double speed) {
        TextToSpeechClient ttsClient = new TextToSpeechClient.Builder()
                                  .setSpeechMode(TextToSpeechClient.NEWTONE_TALK_2)
                                  .setSpeechSpeed(speed)
                                  .setSpeechVoice(voice)
                                  .setSampleRate(22050)
                                  .setListener(this)
                                  .build();
        ttsClient.play(message);
    }
}
