
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Product } from './types';

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="h-48 bg-muted">
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg text-muted-foreground">Product Image</span>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{product.name}</CardTitle>
              <Badge variant="outline">{product.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full flex items-center gap-2" 
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
