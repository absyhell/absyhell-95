
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Film, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { toast } from '@/components/ui/sonner';

interface Movie {
  id: number;
  title: string;
  genre: string[];
  rating: number;
  year: number;
  image: string;
}

// Sample movie data
const movieData: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    rating: 4.8,
    year: 2014,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    genre: ["Drama", "Crime"],
    rating: 4.9,
    year: 1994,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Inception",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 4.7,
    year: 2010,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    rating: 4.9,
    year: 2008,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    rating: 4.8,
    year: 1994,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "The Matrix",
    genre: ["Sci-Fi", "Action"],
    rating: 4.7,
    year: 1999,
    image: "/placeholder.svg"
  }
];

const Cinematch: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState<Movie[]>(movieData);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  
  const allGenres = [...new Set(movieData.flatMap(movie => movie.genre))];
  
  // Filter movies based on search term and selected genres
  useEffect(() => {
    let filtered = movieData;
    
    if (searchTerm) {
      filtered = filtered.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedGenres.length > 0) {
      filtered = filtered.filter(movie => 
        selectedGenres.some(genre => movie.genre.includes(genre))
      );
    }
    
    setRecommendations(filtered);
  }, [searchTerm, selectedGenres]);
  
  const handleGenreClick = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) 
        : [...prev, genre]
    );
  };
  
  const handleGetRecommendation = () => {
    // In a real app, this would call an API or ML model
    toast.success("Analyzing your preferences...", {
      description: "Finding the perfect movie recommendations for you!"
    });
    
    // Simulate recommendation process
    setTimeout(() => {
      const shuffled = [...recommendations].sort(() => 0.5 - Math.random());
      setRecommendations(shuffled.slice(0, recommendations.length));
    }, 1500);
  };
  
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
              <h1 className="text-3xl md:text-5xl font-bold mb-2">CineMatch</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Discover your next favorite movie with our intelligent recommendation system
              </p>
            </div>
            <Film className="h-12 w-12 mt-4 md:mt-0" />
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for movies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Button 
            className="w-full" 
            onClick={handleGetRecommendation}
          >
            Get Recommendations
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {allGenres.map((genre) => (
            <Badge 
              key={genre} 
              variant={selectedGenres.includes(genre) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Recommendations Section */}
      <div className="container px-4 md:px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
        
        {recommendations.length > 0 ? (
          <Carousel className="w-full">
            <CarouselContent>
              {recommendations.map((movie) => (
                <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Film className="h-10 w-10 text-muted-foreground/50" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold truncate">{movie.title}</h3>
                        <span className="flex items-center text-amber-500">
                          <Star className="h-4 w-4 fill-current mr-1" />
                          {movie.rating}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {movie.year}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {movie.genre.map((g) => (
                          <Badge key={`${movie.id}-${g}`} variant="secondary" className="text-xs">
                            {g}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No movies match your current filters. Try adjusting your search.
          </div>
        )}
      </div>
      
      {/* Feature Section */}
      <div className="bg-muted/30 py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">How CineMatch Works</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Smart Analysis",
                description: "Our algorithm analyzes your viewing history and preferences to understand your taste."
              },
              {
                title: "Personalized Picks",
                description: "Get recommendations tailored specifically to your unique movie preferences."
              },
              {
                title: "Discover New Films",
                description: "Expand your horizons with carefully selected movies you might have missed."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinematch;
