package com.safeher;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.math3.complex.Complex;

import com.jlibrosa.audio.JLibrosa;
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

        // int defaultSampleRate = -1; // -1 value implies the method to use default
        // sample rate
        int defaultAudioDuration = -1; // -1 value implies the method to process complete audio duration

        JLibrosa jLibrosa = new JLibrosa();

        float audioFeatureValues[] = jLibrosa.loadAndRead(audioFilePath, sr, defaultAudioDuration);

        int sampleRate = jLibrosa.getSampleRate();

        float[][] mfccValues = jLibrosa.generateMFCCFeatures(audioFeatureValues, sampleRate, 20);

        Log.d("Track", "Sample Rate: " + sampleRate);
        Log.d("Track", "Size of MFCC Feature Values: (" + mfccValues.length + " , " + mfccValues[0].length + " )");
        Log.d("Track", "");

        String obj = pyobj.callAttr("main", audioFilePath).toJava(String.class);
        // String currentDirectory = System.getProperty("user.dir");
        // Log.d("Track", "Python path " + obj);
        // Log.d("Track", "Java path " + currentDirectory);
        // String[] obj = pyobj.callAttr("main", audioFilePath).toJava(String[].class);
        // for (int i = 0; i < obj.length; i++) {
        // Log.d("Track", "Track " + (i + 1) + " : " + obj[i]);
        // }
        callback.invoke(obj);

    }

    @ReactMethod
    public void LibrosaTest(String audioFilePath)
            throws IOException, WavFileException, FileFormatNotSupportedException {

        Python py = Python.getInstance();
        PyObject pyobj = py.getModule("script");
        // String audioFilePath = "audioFiles/1995-1826-0003.wav";
        int defaultSampleRate = -1; // -1 value implies the method to use default sample rate
        int defaultAudioDuration = -1; // -1 value implies the method to process complete audio duration

        JLibrosa jLibrosa = new JLibrosa();

        /*
         * To read the magnitude values of audio files - equivalent to
         * librosa.load('../audioFiles/1995-1826-0003.wav', sr=None) function
         */

        float audioFeatureValues[] = jLibrosa.loadAndRead(audioFilePath, defaultSampleRate, defaultAudioDuration);

        ArrayList<Float> audioFeatureValuesList = jLibrosa.loadAndReadAsList(audioFilePath, defaultSampleRate,
                defaultAudioDuration);

        /* To read the no of frames present in audio file */
        int nNoOfFrames = jLibrosa.getNoOfFrames();

        /* To read sample rate of audio file */
        int sampleRate = jLibrosa.getSampleRate();

        /* To read number of channels in audio file */
        int noOfChannels = jLibrosa.getNoOfChannels();

        Complex[][] stftComplexValues = jLibrosa.generateSTFTFeatures(audioFeatureValues, sampleRate, 40);

        float[] invSTFTValues = jLibrosa.generateInvSTFTFeatures(stftComplexValues, sampleRate, 40);

        float[][] melSpectrogram = jLibrosa.generateMelSpectroGram(audioFeatureValues, sampleRate, 2048, 128, 256);

        Log.d("Track", "/n/n");
        Log.d("Track", "***************************************");
        Log.d("Track", "***************************************");
        Log.d("Track", "***************************************");
        Log.d("Track", "/n/n");

        /*
         * To read the MFCC values of an audio file
         * equivalent to librosa.feature.mfcc(x, sr, n_mfcc=40) in python
         */

        float[][] mfccValues = jLibrosa.generateMFCCFeatures(audioFeatureValues, sampleRate, 40);

        float[] meanMFCCValues = jLibrosa.generateMeanMFCCFeatures(mfccValues, mfccValues.length, mfccValues[0].length);

        Log.d("Track", ".......");
        Log.d("Track", "Size of MFCC Feature Values: (" + mfccValues.length + " , " + mfccValues[0].length + " )");

        for (int i = 0; i < 1; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.printf("%.6f%n", mfccValues[i][j]);
            }
        }

        /*
         * To read the STFT values of an audio file
         * equivalent to librosa.core.stft(x, sr, n_mfcc=40) in python
         * Note STFT values return would be complex in nature with real and imaginary
         * values.
         */

        Complex[][] stftComplexValues1 = jLibrosa.generateSTFTFeatures(audioFeatureValues, sampleRate, 40);

        float[] invSTFTValues1 = jLibrosa.generateInvSTFTFeatures(stftComplexValues, sampleRate, 40);

        Log.d("Track", ".......");
        Log.d("Track", "Size of STFT Feature Values: (" + stftComplexValues.length + " , "
                + stftComplexValues[0].length + " )");

        for (int i = 0; i < 1; i++) {
            for (int j = 0; j < 10; j++) {
                double realValue = stftComplexValues[i][j].getReal();
                double imagValue = stftComplexValues[i][j].getImaginary();
                Log.d("Track", "Real and Imag values of STFT are " + realValue + "," + imagValue);
            }

        }

    }

}