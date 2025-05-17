
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { WeatherDashboard } from '@/components/WeatherDashboard';

const Weather: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="container px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="text-white mb-6" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Weather Dashboard</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Real-time weather forecasts and interactive weather maps
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container px-4 md:px-6 py-12">
        <WeatherDashboard />
      </div>
    </div>
  );
};

export default Weather;
