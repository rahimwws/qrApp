import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraView } from "expo-camera/next";
import { weatherApi } from "../config/url";
import { useAtom } from "jotai";
import axios from "axios";
import useWeatherData from "../features/useWeatherData";
import WeatherBlock from "../components/WeatherBlock";

const Scanner = () => {
  const [url, setUrl] = useAtom(weatherApi);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const { weatherData, loading } = useWeatherData(url);
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setShowScanner(false);
    setUrl(data.replace(/&amp;/g, "&"));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return showScanner ? (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          setShowScanner(true);
        }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>+</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator />
      ) : (
        weatherData && <WeatherBlock weatherData={weatherData} showButton= {true} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03a9f4",
    borderRadius: 30,
    elevation: 9,
    zIndex:2
  },
});
export default Scanner;
