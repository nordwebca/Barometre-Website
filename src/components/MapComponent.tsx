"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { Heart } from 'lucide-react';
import { useEffect } from 'react';

const locations = [
  { name: "Le Velours Rouge", location: "Vieux-Port, Montréal", coords: [45.508, -73.554], status: "Très actif", users: "138 en ligne" },
  { name: "L'Éclipse", location: "Plateau Mont-Royal, Montréal", coords: [45.523, -73.581], status: "Actif", users: "91 en ligne" },
  { name: "La Terrasse Boréale", location: "Saint-Roch, Québec", coords: [46.816, -71.220], status: "Très actif", users: "107 en ligne" },
  { name: "Le Campus Café", location: "Quartier universitaire, Québec", coords: [46.785, -71.268], status: "Actif", users: "72 en ligne" }
];

const createCustomIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <div style={{ color: '#D946EF', filter: 'drop-shadow(0 0 5px rgba(217,70,239,0.8))' }}>
      <Heart fill="currentColor" size={32} />
    </div>
  );
  return L.divIcon({
    html: iconMarkup,
    className: 'custom-leaflet-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
};

export default function MapComponent() {
  useEffect(() => {
    // Leaflet's default icon path issues fix (optional since we use custom divIcons)
    delete (L.Icon.Default.prototype as any)._getIconUrl;
  }, []);

  const customIcon = createCustomIcon();

  return (
    <div className="w-full h-full relative" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
      <MapContainer 
        center={[46.15, -72.4]} 
        zoom={8} 
        style={{ height: '100%', width: '100%', zIndex: 10 }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.coords as [number, number]} icon={customIcon}>
            <Popup className="custom-dark-popup">
              <div className="text-gray-900 font-body">
                <strong className="text-purple-600 block text-[16px] mb-1">{loc.name}</strong>
                <span className="block text-sm mb-1">{loc.location}</span>
                <span className="block text-xs font-bold text-gray-500">{loc.users}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
