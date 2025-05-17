
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Camera, Mic, MicOff, Video, VideoOff, Text } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const SmartLens: React.FC = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [convertedMode, setConvertedMode] = useState<'text' | 'voice'>('text');

  const toggleCamera = () => {
    if (!cameraActive) {
      toast.info("Requesting camera access...");
      
      // In a real implementation, this would access the camera
      // For this demo, we'll simulate accessing the camera
      setTimeout(() => {
        setCameraActive(true);
        toast.success("Camera activated successfully");
      }, 1000);
    } else {
      setCameraActive(false);
      toast.info("Camera deactivated");
    }
  };

  const toggleMic = () => {
    if (!micActive) {
      toast.info("Requesting microphone access...");
      
      // In a real implementation, this would access the microphone
      // For this demo, we'll simulate accessing the microphone
      setTimeout(() => {
        setMicActive(true);
        toast.success("Microphone activated successfully");
      }, 1000);
    } else {
      setMicActive(false);
      toast.info("Microphone deactivated");
    }
  };

  const simulateSignRecognition = () => {
    if (cameraActive) {
      const signPhrases = [
        "Hello, how are you?",
        "Nice to meet you",
        "Thank you for your help",
        "I need assistance please",
        "Can you understand me?",
        "I'm learning sign language",
      ];
      
      // Simulate sign language recognition with random phrases
      const randomPhrase = signPhrases[Math.floor(Math.random() * signPhrases.length)];
      setRecognizedText(randomPhrase);
      
      if (micActive && convertedMode === 'voice') {
        toast.info("Converting to speech: " + randomPhrase);
        // In a real app, this would use Web Speech API to speak the text
      }
    }
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (cameraActive) {
      // Simulate periodic sign language detection
      interval = setInterval(simulateSignRecognition, 5000) as unknown as number;
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cameraActive, micActive, convertedMode]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
        </div>
      </header>
      
      <main className="container px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold md:text-4xl">Smart Lens</h1>
            <p className="text-lg text-muted-foreground">
              Converting sign language to voice and text for improved accessibility
            </p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6 relative overflow-hidden border-2 border-muted">
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant={cameraActive ? "default" : "outline"}
                  size="icon"
                  onClick={toggleCamera}
                  className="rounded-full"
                  title={cameraActive ? "Turn camera off" : "Turn camera on"}
                >
                  {cameraActive ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                </Button>
                <Button
                  variant={micActive ? "default" : "outline"}
                  size="icon"
                  onClick={toggleMic}
                  className="rounded-full"
                  title={micActive ? "Turn microphone off" : "Turn microphone on"}
                >
                  {micActive ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>
              </div>
              
              {cameraActive ? (
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center p-4 text-white">
                    <Camera className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                    <p>Camera feed active</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Sign language detection running...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Camera is off</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Click the camera button to enable sign language detection
                    </p>
                  </div>
                </div>
              )}
            </Card>
            
            <Card className="p-6">
              <h2 className="font-semibold text-xl mb-4">Output</h2>
              
              <Tabs defaultValue="text" className="mb-6" onValueChange={(value) => setConvertedMode(value as 'text' | 'voice')}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="text">
                    <Text className="h-4 w-4 mr-2" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="voice">
                    <Mic className="h-4 w-4 mr-2" />
                    Voice
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="mt-4">
                  <div className="bg-muted rounded-lg p-4 min-h-[200px] flex items-center justify-center">
                    {recognizedText ? (
                      <p className="text-lg">{recognizedText}</p>
                    ) : (
                      <p className="text-muted-foreground">Turn on the camera to start converting sign language to text</p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="voice" className="mt-4">
                  <div className="bg-muted rounded-lg p-4 min-h-[200px] flex items-center justify-center">
                    {micActive ? (
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-8 w-1 bg-primary mx-1 animate-pulse"></div>
                          <div className="h-12 w-1 bg-primary mx-1 animate-pulse animation-delay-200"></div>
                          <div className="h-10 w-1 bg-primary mx-1 animate-pulse animation-delay-300"></div>
                          <div className="h-14 w-1 bg-primary mx-1 animate-pulse animation-delay-400"></div>
                          <div className="h-8 w-1 bg-primary mx-1 animate-pulse animation-delay-500"></div>
                        </div>
                        <p>{recognizedText ? "Converting to speech..." : "Waiting for sign language..."}</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <MicOff className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p className="text-muted-foreground">Turn on microphone to enable voice conversion</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="space-y-4">
                <h3 className="font-medium">Recent Translations</h3>
                <div className="space-y-2">
                  {recognizedText ? (
                    <>
                      <div className="bg-card border rounded-md p-3">
                        <p className="text-sm">{recognizedText}</p>
                        <p className="text-xs text-muted-foreground mt-1">Just now</p>
                      </div>
                      <div className="bg-card border rounded-md p-3">
                        <p className="text-sm">Hello, nice to meet you</p>
                        <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">No recent translations</p>
                  )}
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">How Smart Lens Works</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Camera className="h-10 w-10 text-primary" />
                  <h3 className="font-semibold text-xl">Sign Detection</h3>
                  <p className="text-muted-foreground">
                    Using computer vision and machine learning to recognize and interpret sign language gestures in real-time
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Text className="h-10 w-10 text-primary" />
                  <h3 className="font-semibold text-xl">Text Conversion</h3>
                  <p className="text-muted-foreground">
                    Converting detected signs into readable text that can be displayed on screen for deaf-blind communication
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Mic className="h-10 w-10 text-primary" />
                  <h3 className="font-semibold text-xl">Voice Synthesis</h3>
                  <p className="text-muted-foreground">
                    Transforming text into natural-sounding speech to enable communication with blind individuals
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmartLens;
