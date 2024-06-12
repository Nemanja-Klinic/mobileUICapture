import React, { useEffect, useRef, useState } from 'react';
import { WebView, Alert } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Header from './webview-header';
import { webViewScript, defaultData } from './constants';
// import * as ImageManipulator from 'expo-image-manipulator';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';


const WebViewScreen = () => {
  const [screenshot, setScreenshot] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [userClicks, setUserClicks] = useState([]);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const webViewRef = useRef(null);

  if (status === null) {
    requestPermission();
  }

  const handleWebViewMessage = event => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      const { x, y } = JSON.parse(event.nativeEvent.data);
      const clickInfo = {
        tagName: data.tagName,
        id: data.id,
        class: data.class,
        x,
        y,
        url: currentUrl
      };
      onSaveImageAsync();
      setUserClicks(prevClicks => [...prevClicks, clickInfo]);
    } catch (error) {
      console.error('Error parsing document object:', error);
    }
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(webViewRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);

      if (localUri) {
        console.log("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const makeScreenshot = async () => {
  //   try {
  //     const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //     if (status !== 'granted') {
  //       Alert.alert('Permission to access media library is required!');
  //       return;
  //     }

  //     const uri = await viewShotRef.current.capture();
  //     const asset = await MediaLibrary.createAssetAsync(uri);
  //     await MediaLibrary.createAlbumAsync('Screenshots', asset, false);
  //     Alert.alert('Screenshot saved!');
  //   } catch (error) {
  //     console.error("Screenshot capture failed", error);
  //   }
  // };



  // const captureScreenshot = async (x, y) => {
  //   try {
  //     const uri = await captureRef(webViewRef, {
  //       format: 'jpg',
  //       quality: 0.8,
  //     });
  //     setScreenshot(uri);
  //     drawDotOnScreenshot(uri, x, y);
  //   } catch (error) {
  //     console.error('Error capturing screenshot:', error);
  //   }
  // };

  const handleWebViewNavigationStateChange = (navState) => {
    // console.log('URL', navState.url)
    setCurrentUrl(navState.url);
  };

  // useEffect(() => {
  //   console.log("🚀 ~ ss ~ ss:", screenshot)
  // }, [screenshot])

  return (
    <SafeAreaView style={styles.container} ref={webViewRef}>
      <Header />
      <WebView
        source={{ uri: 'https://www.amazon.com' }}
        style={{ flex: 1 }}
        onMessage={handleWebViewMessage}
        injectedJavaScript={webViewScript}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default WebViewScreen;
