/**
 * Cities visited — edit this list to add or remove markers on the Places map.
 * Coordinates are [longitude, latitude] (GeoJSON order).
 * Optional markerOffset nudges the visible pin when cities sit too close at world scale.
 */
export const visitedCities = [
  {
    id: 'vancouver',
    city: 'Vancouver',
    country: 'Canada',
    coordinates: [-123.1207, 49.2827]
  },
  {
    id: 'winnipeg',
    city: 'Winnipeg',
    country: 'Canada',
    coordinates: [-97.1384, 49.8951]
  },
  {
    id: 'calgary',
    city: 'Calgary',
    country: 'Canada',
    coordinates: [-114.0719, 51.0447]
  },
  {
    id: 'toronto',
    city: 'Toronto',
    country: 'Canada',
    coordinates: [-79.3832, 43.6532],
    markerOffset: [4, -3]
  },
  {
    id: 'windsor',
    city: 'Windsor',
    country: 'Canada',
    coordinates: [-83.0364, 42.3149],
    markerOffset: [-4, 4]
  },
  {
    id: 'minneapolis',
    city: 'Minneapolis',
    country: 'United States',
    coordinates: [-93.265, 44.9778]
  },
  {
    id: 'boulder',
    city: 'Boulder',
    country: 'United States',
    coordinates: [-105.2705, 40.015]
  },
  {
    id: 'los-angeles',
    city: 'Los Angeles',
    country: 'United States',
    coordinates: [-118.2437, 34.0522]
  },
  {
    id: 'miami',
    city: 'Miami',
    country: 'United States',
    coordinates: [-80.1918, 25.7617],
    markerOffset: [0, 4]
  },
  {
    id: 'kissimmee',
    city: 'Kissimmee',
    country: 'United States',
    coordinates: [-81.4076, 28.2919],
    markerOffset: [0, -4]
  },
  {
    id: 'daejeon',
    city: 'Daejeon',
    country: 'South Korea',
    coordinates: [127.3845, 36.3504],
    markerOffset: [3, 5]
  },
  {
    id: 'seoul',
    city: 'Seoul',
    country: 'South Korea',
    coordinates: [126.978, 37.5665],
    markerOffset: [-3, -4]
  },
  {
    id: 'islamabad',
    city: 'Islamabad',
    country: 'Pakistan',
    coordinates: [73.0479, 33.6844]
  }
]
