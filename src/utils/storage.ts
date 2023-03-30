import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  constructor(private key: string) {
    this.key = key;
  }

  async setValue(value: any) {
    try {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(this.key, stringValue);
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }

  async getValue() {
    try {
      const string = await AsyncStorage.getItem(this.key);
      if (string) return JSON.parse(string);
      return null;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }

  async clear() {
    await AsyncStorage.removeItem(this.key);
  }
}
