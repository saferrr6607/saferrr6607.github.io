package com.safeher;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.math3.complex.Complex;

// import com.jlibrosa.audio.JLibrosa;
import com.jlibrosa.audio.exception.FileFormatNotSupportedException;
import com.jlibrosa.audio.wavFile.WavFileException;

import android.util.Log;
import android.widget.Toast;

import android.content.Context;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;

import com.chaquo.python.PyObject;
import com.chaquo.python.Python;

import com.chaquo.python.android.AndroidPlatform;

/**
 * 
 * This class tests the JLibrosa functionality for extracting MFCC and STFT
 * Audio features for given Wav file.
 * 
 * @author abhi-rawat1
 *
 */
public class MFCCModule extends ReactContextBaseJavaModule {

    Context context;
    // String TAG = "Python Running";

    MFCCModule(ReactApplicationContext context) {
        super(context);
        this.context = context.getApplicationContext();
    }

    @NonNull
    @Override
    public String getName() {
        return "MFCCModule";
    }

    @ReactMethod
    public void initialize(Callback callback) {

        if (!Python.isStarted()) {
            Python.start(new AndroidPlatform(this.context));
        }

        callback.invoke();

    }

    @ReactMethod
    public void extractMFCC(String audioFilePath, int sr, Callback callback)
            throws IOException, WavFileException, FileFormatNotSupportedException {

        Python py = Python.getInstance();
        PyObject pyobj = py.getModule("script");

        // sample rate
        // int defaultAudioDuration = -1; // -1 value implies the method to process
        // complete audio duration

        // JLibrosa jLibrosa = new JLibrosa();

        // float audioFeatureValues[] = jLibrosa.loadAndRead(audioFilePath, sr,
        // defaultAudioDuration);

        // int sampleRate = jLibrosa.getSampleRate();

        // float[][] mfccValues = jLibrosa.generateMFCCFeatures(audioFeatureValues,
        // sampleRate, 20);

        // Log.d("Track", "Sample Rate: " + sampleRate);
        // Log.d("Track", "Size of MFCC Feature Values: (" + mfccValues.length + " , " +
        // mfccValues[0].length + " )");
        // Log.d("Track", "");
        /**
         * the full audio processing will now rely on the python script. JLibrosa is not
         * used anymore
         */

        String obj = pyobj.callAttr("main", audioFilePath).toJava(String.class);

        callback.invoke(obj);

    }

}