import React, { useState, useEffect } from 'react';

import './styles.scss';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import Form from 'react-bootstrap/Form';
import data from '../../data/neighborhoods.json';

import { useDispatch } from 'react-redux';
import { createNeighborhood } from '../../store/ducks/neighborhood/actions';

interface Neighborhoods {
  zone: number;
  neighborhood: any;
}

interface Neighborhood {
  id: number;
  name: string;
  image_url: string;
  location: [number, number];
}

const MapSearch: React.FC = () => {
  const dispatch = useDispatch();
  const neighborhoods: Neighborhoods[] = data.neighborhoods;
  const initialPosition: [number, number] = [-7.1402162, -34.8881228];

  const [selectedNeighborhood, setSelectedNeighborhood] = useState<Neighborhood[]>([]);
  const [zone, setZone] = useState(0);
  const [mapRef, setMapRef] = useState();
  const [layerGroup, setLayerGroup] = useState();

  useEffect(() => {
    localStorage.setItem('@AtlasJP/Zone', JSON.stringify(zone));
    search();
  }, [zone]);

  useEffect(() => {
    if (selectedNeighborhood)
      addMarkersToMap();

    if (mapRef && !layerGroup) {
      const newLayerGroup = L.layerGroup().addTo(mapRef as any);
      setLayerGroup(newLayerGroup as any);
    }
  }, [selectedNeighborhood, mapRef]);

  const setLeafletMapRef = (map: any) => setMapRef(map && map.leafletElement);

  const search = () => {
    neighborhoods.map((item: Neighborhoods) => {
      if (Number(zone) === item.zone) {
        setSelectedNeighborhood(item.neighborhood);
      } else if (Number(zone) === 0) {
        setSelectedNeighborhood([]);
      }
    })
  }

  const addMarkersToMap = () => {
    if (layerGroup)
      layerGroup.clearLayers();

    selectedNeighborhood.map((mark: Neighborhood) => {
      const marker = L.marker(mark.location).bindPopup(mark.name);

      marker.on('mouseover', function (e) {
        marker.openPopup();
      });
      marker.on('mouseout', function (e) {
        marker.closePopup();
      });
      marker.on('click', function (e) {
        dispatch(createNeighborhood({ neighborhood: mark }));
        localStorage.setItem('@AtlasJP/neighborhood', JSON.stringify(mark));

        document.querySelector('#message')?.scrollIntoView({ behavior: 'smooth' });
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