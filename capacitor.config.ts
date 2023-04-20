import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SampleKeyboardApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      // style: KeyboardStyle.Dark,
      resizeOnFullScreen: true, // Android
    },
  },
};

export default config;
