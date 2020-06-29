import * as Location from 'expo-location';

// OpenCageData
export default class GeolocatorService {
  static apiKey = '1a0f0a33030643ef97bfd6fc409f6b2a';
  static getLocation = async () => {
    await Location.requestPermissionsAsync();

    const location = await Location.getCurrentPositionAsync({});

    if(location) {
      const url = `https://api.opencagedata.com/geocode/v1/json?key=${GeolocatorService.apiKey}&q=${location.coords.latitude},${location.coords.longitude}&pretty=1&no_annotations=1`;
      
      const response = await fetch(url);
      const result = await response.json();

      return result.results[0];
    }

    return 'blank';
  }
}
