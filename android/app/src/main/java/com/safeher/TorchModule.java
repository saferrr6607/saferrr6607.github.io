package com.safeher;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraManager;

import android.util.Log;
import android.widget.Toast;

import android.content.Context;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;

/**
 * 
 * This class tests the JLibrosa functionality for extracting MFCC and STFT
 * Audio features for given Wav file.
 * 
 * @author abhi-rawat1
 *
 */
public class TorchModule extends ReactContextBaseJavaModule {

    Context context;
    private CameraManager cameraManager;
    private String getCameraID;

    TorchModule(ReactApplicationContext context) {
        super(context);
        this.context = context.getApplicationContext();
    }

    @NonNull
    @Override
    public String getName() {
        return "TorchModule";
    }

}