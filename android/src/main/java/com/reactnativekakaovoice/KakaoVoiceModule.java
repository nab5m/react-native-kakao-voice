package com.reactnativekakaovoice;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import com.kakao.sdk.newtoneapi.TextToSpeechClient;
import com.kakao.sdk.newtoneapi.TextToSpeechManager;
import com.kakao.sdk.newtoneapi.TextToSpeechListener;

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

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void play(String message) {
        TextToSpeechClient ttsClient = new TextToSpeechClient.Builder()
                                  .setSpeechMode(TextToSpeechClient.NEWTONE_TALK_2)
                                  .setSpeechSpeed(1.0)
                                  .setSpeechVoice(TextToSpeechClient.NEWTONE_TALK_2)
                                  .setSampleRate(22050)
                                  .setListener(this)
                                  .build();
        ttsClient.play(message);
    }
}
