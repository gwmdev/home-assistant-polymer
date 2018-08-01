import Leaflet from 'leaflet';
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.4&key=7f7f365bef0eb1e213221b8c1d995947"></script>


// Sets up a Leaflet map on the provided DOM element
export default function setupLeafletMap(mapElement) {
  const map = Leaflet.map(mapElement);
  const style = document.createElement('link');
  style.setAttribute('href', '/static/images/leaflet/leaflet.css');
  style.setAttribute('rel', 'stylesheet');
  mapElement.parentNode.appendChild(style);
  map.setView([51.505, -0.09], 13);
  Leaflet.tileLayer(
    'https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
    {
      attribution: '&copy; <a href="http://ditu.amap.com/">高德地图</a> 版权所有, &copy;',
      maxZoom: 18,
    }
  ).addTo(map);

  return map;
}
