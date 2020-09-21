import React, { useState, useEffect } from 'react';

import './styles.scss';

// Componentes do Leaflet (mapa)
import L, { LayerGroup } from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';

// Banco de dados
import data from '../../data/neighborhoods.json';

// Funções
import { useDispatch } from 'react-redux';
import { createNeighborhood } from '../../store/ducks/neighborhood/actions';

// Tipos
import { Neighborhood } from '../../store/ducks/neighborhood/types';
import { Neighborhoods } from '../../services/types';

// Componentes do Bootstrap
import Form from 'react-bootstrap/Form';

const MapSearch: React.FC = () => {
  const dispatch = useDispatch();
  const neighborhoods: Neighborhoods[] = data.neighborhoods;

  // Posição inicial do mapa (João Pessoa)
  const initialPosition: [number, number] = [-7.1402162, -34.8881228];
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<Neighborhood[]>([]);

  const [zone, setZone] = useState(0);

  // Ref para o mapa do Leaflet
  const [mapRef, setMapRef] = useState();

  // Agrupamento de camadas do Leaflet (que armazenará os marcadores do mapa)
  const [layerGroup, setLayerGroup] = useState<LayerGroup>();

  // Sempre que a zona atualizar, armazenar no LocalStorage e atualizar bairro selecionado
  useEffect(() => {
    localStorage.setItem('@AtlasJP/Zone', JSON.stringify(zone));
    search();
  }, [zone]);

  useEffect(() => {
    // Atualizar marcadores do mapa ao atualizar os bairros selecionados
    if (selectedNeighborhood)
      addMarkersToMap();

    // Se houver um mapa renderizado e o grupo de camadas estiver undefined, setar
    // novo grupo de camadas e adicionar ao mapa
    if (mapRef && !layerGroup) {
      const newLayerGroup = L.layerGroup().addTo(mapRef as any);
      setLayerGroup(newLayerGroup as any);
    }
  }, [selectedNeighborhood, mapRef]);

  // Cria referência para o mapa e armazena no MapRef
  const setLeafletMapRef = (map: any) => setMapRef(map && map.leafletElement);

  const scrollToMessage = () => document.querySelector('#message')?.scrollIntoView({ behavior: 'smooth' });

  // Atualiza bairros pertencentes a zona selecionada
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
    // Se já houverem camadas adicionadas, apagar as camadas (tirar marcadores do mapa)
    if (layerGroup)
      layerGroup.clearLayers();

    selectedNeighborhood.map((mark: Neighborhood) => {
      // Cria um novo marcador e vincula popup
      const marker = L.marker(mark.location).bindPopup(mark.name);

      // Abre popup com mouse no marcador
      marker.on('mouseover', function (e) {
        marker.openPopup();
      });

      // Fecha popup se mouse sair do marcador
      marker.on('mouseout', function (e) {
        marker.closePopup();
      });

      // Atualiza estado do Redux e LocalStorage com bairro selecionado
      marker.on('click', function (e) {
        dispatch(createNeighborhood({ neighborhood: mark }));
        localStorage.setItem('@AtlasJP/neighborhood', JSON.stringify(mark));

        scrollToMessage();
      });

      // Adiciona marcador atual ao grupo de camadas
      layerGroup!.addLayer(marker);
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