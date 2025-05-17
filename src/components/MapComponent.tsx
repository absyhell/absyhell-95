
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  center: [number, number];
  zoom?: number;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  center, 
  zoom = 12,
  className = "h-[250px] w-full rounded-lg overflow-hidden" 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map
    // You need to replace this with your own Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtby1hY2NvdW50MTIzIiwiYSI6ImNsbXk2bzl0ZzBkOHYya3BrcWE0MXN0bjAifQ.H0OJIarBDDM-gEZbZbXu1A';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: zoom
    });
    
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    // Add marker at center position
    new mapboxgl.Marker()
      .setLngLat(center)
      .addTo(map.current);
      
    return () => {
      map.current?.remove();
    };
  }, [center, zoom]);
  
  return <div ref={mapContainer} className={className} />;
};

export default MapComponent;
