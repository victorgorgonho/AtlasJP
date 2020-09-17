import React, { useState, useEffect, useRef } from 'react';

import './styles.scss';

import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Form from 'react-bootstrap/Form';
import data from '../../data/neighborhoods.json';

interface Neighborhoods {
  zone: number;
  neighborhood: any;
}

interface Neighborhood {
  id: number;
  name: string;
  location: [number, number];
}

const MapSearch: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([-7.1402162, -34.8881228]);
  const [selectedPosition, setSelectedPosition] = useState<any>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhoods[]>(data.neighborhoods);
  const [zone, setZone] = useState(0);

  const [mapRef, setMapRef] = useState();
  const [layerGroup, setLayerGroup] = useState();

  useEffect(() => {
    search();
  }, [zone]);

  const search = () => {
    neighborhoods.map((item: Neighborhoods) => {
      if (Number(zone) === item.zone) {
        setSelectedPosition(item.neighborhood);
        console.log(selectedPosition);
      } else if (Number(zone) === 0) {
        setSelectedPosition([]);
      }
    })
  }

  useEffect(() => {
    if (selectedPosition)
      addMarkersToMap();

    console.log('mapRef1: ', mapRef);
    console.log('layerGroup1: ', layerGroup);
    if (mapRef && !layerGroup) {
      const newLayerGroup = L.layerGroup().addTo(mapRef as any);
      setLayerGroup(newLayerGroup as any);
    }
  }, [selectedPosition, mapRef])

  const setLeafletMapRef = (map: any) => setMapRef(map && map.leafletElement);

  const addMarkersToMap = () => {
    if (layerGroup)
      layerGroup.clearLayers();

    selectedPosition.map((mark: Neighborhood) => {
      const marker = L.marker(mark.location).bindPopup(mark.name);

      marker.on('mouseover', function (e) {
        marker.openPopup();
      });
      /* marker.on('mouseout', function (e) {
        marker.closePopup();
      }); */
      marker.on('click', function (e) {
        console.log('clickado');
      });

      layerGroup.addLayer(marker);
    });
  }

  return (
    <div id="map">
      <div className="content">
        <main>
          <h1>{zone !== 0 ? 'Selecione seu bairro no mapa' : 'Selecione a zona que seu bairro pertence'}</h1>
        </main>
        <div className="content-map">
          <Form className="form-search">
            <Form.Control
              as="select"
              onChange={(e: any) => setZone(Number(e.target.value))}
            >
              <option value={0}> Selecione uma zona </option>
              {
                neighborhoods.map((data: Neighborhoods) => (
                  <option
                    key={data.zone}
                    value={data.zone}
                  >
                    {`Zona ${data.zone}`}
                  </option>
                ))
              }
            </Form.Control>
          </Form>
          <Map center={initialPosition} zoom={12} ref={setLeafletMapRef} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </div>
      </div>
    </div>
  );
}

export default MapSearch;