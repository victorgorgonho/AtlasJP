import React, { useState, useEffect } from 'react';

import './styles.scss';

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
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [selectedPosition, setSelectedPosition] = useState<any>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhoods[]>(data.neighborhoods);
  const [zone, setZone] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

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

  return (
    <div id="map">
      <div className="content">
        <main>
          <h1>Selecione sua zona.</h1>

          <Form className="form-search">
            <Form.Control
              as="select"
              onChange={(e: any) => setZone(e.target.value)}
            >
              <option value={0} > Selecione uma zona </option>
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

        </main>
        <div className="content-map">
          <Map center={initialPosition} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedPosition.map((mark: Neighborhood) => (
              <>
                {/* {console.log(mark)} */}
                <Marker position={mark.location} title={mark.name} />
              </>
            ))
            }

          </Map>
        </div>
      </div>
    </div>
  );
}

export default MapSearch;