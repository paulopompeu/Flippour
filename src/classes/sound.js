import RNS from "react-native-sound";
const { MAIN_BUNDLE } = RNS;

export class Sound {
  constructor(name, soundsEnabled, onLoaded = () => {}) {
    // shim sound funcs
    this.sound = soundsEnabled
      ? new RNS(`${name}.mp3`, MAIN_BUNDLE, onLoaded)
      : { play: () => {}, stop: () => {} };
  }

  loop = () => this.sound.setNumberOfLoops(-1);

  play = () => this.sound.play();

  stop = () => this.sound.stop();
}