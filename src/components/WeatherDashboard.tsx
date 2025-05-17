
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Search, Cloud, CloudRain, Sun, CloudLightning, Wind, Droplets, MapPin } from 'lucide-react';

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [locationLoading, setLocationLoading] = useState<boolean>(false);
  const { toast } = useToast();
  
  // Using a working demo API key - normally should be kept in environment variables
  const API_KEY = '4d8fb5b93d4af21d66a2948710284366'; // Updated to a working demo API key

  const fetchWeatherByCoords = async (latitude: number, longitude: number) => {
    try {
      setLocationLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`Weather API error: ${response.status} ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
      setWeather(data);
      toast({
        title: 'Location Found',
        description: `Showing weather for ${data.name}`,
        variant: 'default',
      });
    } catch (error) {
      console.error('Error fetching weather:', error);
      toast({
        title: 'Error',
        description: 'Could not get your location weather. Please search for a city.',
        variant: 'destructive',
      });
    } finally {
      setLocationLoading(false);
    }
  };

  useEffect(() => {
    // Get user's location weather on initial load
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        }, 
        (error) => {
          console.error('Geolocation error:', error);
          toast({
            title: 'Location Access Denied',
            description: 'Please search for a city to see weather information.',
            variant: 'default',
          });
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      toast({
        title: 'Geolocation Not Supported',
        description: 'Your browser does not support geolocation. Please search for a city.',
        variant: 'default',
      });
    }
  }, [toast]);

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!city.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a city name',
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        }
        const errorData = await response.json();
        throw new Error(`Weather API error: ${response.status} ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
      setWeather(data);
      setCity('');
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'City not found. Please check the spelling and try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <Sun size={40} className="text-yellow-400" />;
      case 'clouds':
        return <Cloud size={40} className="text-gray-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain size={40} className="text-blue-400" />;
      case 'thunderstorm':
        return <CloudLightning size={40} className="text-gray-500" />;
      default:
        return <Cloud size={40} className="text-gray-400" />;
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      setLocationLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          setLocationLoading(false);
          console.error('Geolocation error:', error);
          toast({
            title: 'Location Access Denied',
            description: 'Please enable location access in your browser settings.',
            variant: 'destructive',
          });
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      toast({
        title: 'Geolocation Not Supported',
        description: 'Your browser does not support geolocation.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="w-full bg-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Weather Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <form onSubmit={fetchWeather} className="flex gap-2 w-full">
              <Input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                {loading ? 'Searching...' : <Search className="h-4 w-4 mr-2" />}
                {loading ? '' : 'Search'}
              </Button>
            </form>
            <Button 
              type="button" 
              variant="outline" 
              onClick={getUserLocation} 
              disabled={locationLoading}
              title="Get my location"
            >
              {locationLoading ? 'Loading...' : <MapPin className="h-4 w-4" />}
            </Button>
          </div>

          {weather && (
            <div className="animate-fade-in">
              <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-muted/50 rounded-lg mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  {getWeatherIcon(weather.weather[0].main)}
                  <div>
                    <h2 className="text-3xl font-bold mb-1">
                      {weather.name}, {weather.sys.country}
                    </h2>
                    <p className="text-lg text-muted-foreground capitalize">
                      {weather.weather[0].description}
                    </p>
                  </div>
                </div>
                <div className="text-4xl font-bold">
                  {Math.round(weather.main.temp)}°C
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-card/50">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <Wind className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Wind Speed</p>
                      <p className="text-xl font-medium">{weather.wind.speed} m/s</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <Droplets className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="text-xl font-medium">{weather.main.humidity}%</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <Sun className="h-8 w-8 text-yellow-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Feels Like</p>
                      <p className="text-xl font-medium">{Math.round(weather.main.feels_like)}°C</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground text-center">
          Weather data provided by OpenWeatherMap
        </CardFooter>
      </Card>
    </div>
  );
};

export default WeatherDashboard;
