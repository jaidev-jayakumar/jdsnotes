'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';

function FitBounds({ coords }: { coords: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (coords.length > 0) {
      map.fitBounds(coords, { padding: [28, 28] });
    }
  }, [map, coords]);
  return null;
}

export default function RunMap({ coords }: { coords: [number, number][] }) {
  if (coords.length === 0) return null;
  const center = coords[Math.floor(coords.length / 2)];
  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      <Polyline
        positions={coords}
        pathOptions={{ color: '#8B4513', weight: 3.5, opacity: 0.9 }}
      />
      <FitBounds coords={coords} />
    </MapContainer>
  );
}
