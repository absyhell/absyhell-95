
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ShoppingBag, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ProductGrid } from './ProductGrid';
import { Cart } from './Cart';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 149.99,
    image: '/placeholder.svg',
    description: 'High-quality wireless headphones with noise cancellation technology.',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 299.99,
    image: '/placeholder.svg',
    description: 'Latest smartwatch with heart rate monitoring and GPS tracking.',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 249.99,
    image: '/placeholder.svg',
    description: 'Comfortable office chair designed for long hours of sitting.',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Organic Cotton T-shirt',
    price: 29.99,
    image: '/placeholder.svg',
    description: 'Eco-friendly t-shirt made from 100% organic cotton.',
    category: 'Clothing',
  },
  {
    id: 5,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    image: '/placeholder.svg',
    description: 'Durable water bottle that keeps beverages cold for 24 hours or hot for 12 hours.',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Premium Coffee Maker',
    price: 129.99,
    image: '/placeholder.svg',
    description: 'Automatic coffee maker with programmable settings and thermal carafe.',
    category: 'Kitchen',
  }
];

type ViewType = 'products' | 'cart';

const ECommerceComponent: React.FC = () => {
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);
  const [currentView, setCurrentView] = useState<ViewType>('products');
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-card rounded-lg shadow-sm p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Ayush's Shop</h1>
          <div className="flex gap-4">
            <Button 
              variant={currentView === 'products' ? 'default' : 'outline'}
              onClick={() => setCurrentView('products')}
              className="flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Products
            </Button>
            <Button 
              variant={currentView === 'cart' ? 'default' : 'outline'}
              onClick={() => setCurrentView('cart')}
              className="flex items-center gap-2 relative"
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
              {totalItems > 0 && (
                <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>

      {currentView === 'products' ? (
        <ProductGrid products={products} addToCart={addToCart} />
      ) : (
        <Cart 
          items={cartItems} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default ECommerceComponent;
