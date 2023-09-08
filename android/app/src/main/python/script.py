import librosa
import numpy as np
import pickle as pkl

FRAME_SIZE = 1024
MAX_LENGTH = 500

import os
import json

from sklearn import svm

current_directory = os.getcwd()


def main(audio_path, max_length=500):
    y, sr = librosa.load(audio_path)

    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=20)

    #  Perform padding or truncation to ensure consistent shape
    if mfcc.shape[1] > max_length:
        mfcc = mfcc[:, :max_length]
    else:
        mfcc = np.pad(mfcc, ((0, 0), (0, max_length - mfcc.shape[1])), mode="constant")

    mfcc_feature = [mfcc]

    # Convert lists to numpy arrays
    X = np.array(mfcc_feature)

    # Reshape the MFCC features array to match the input requirements of SVM
    n_samples, n_mfcc, n_frames = X.shape
    X = X.reshape((n_samples, n_mfcc * n_frames))

    X_test = np.vstack(X)

    # Get the directory of the current script
    script_directory = os.path.dirname(os.path.abspath(__file__))
    pickle_file_path = script_directory + "/svc_model.pkl"
    json_file_path = script_directory + "/svm_model2.json"

    # Load the SVM model from the pickle file
    with open(pickle_file_path, "rb") as file:
        svm_model = pkl.load(file)

    # # Read the JSON file
    # with open(json_file_path, "r") as file:
    #     json_data = json.load(file)

    # # Deserialize the JSON data and convert it back into an SVM model object
    # svm_model = svm.SVC()
    # svm_model.set_params(**json_data)

    prediction = svm_model.predict(X_test)

    return f"{prediction[0]}"
