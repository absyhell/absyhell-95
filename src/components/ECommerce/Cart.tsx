
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, MinusCircle, PlusCircle, CreditCard } from 'lucide-react';
import { Product } from './types';
import { useToast } from '@/hooks/use-toast';

interface CartProps {
  items: (Product & { quantity: number })[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  totalPrice: number;
}

export const Cart: React.FC<CartProps> = ({ 
  items, 
  removeFromCart, 
  updateQuantity,
  totalPrice 
}) => {
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: 'Order Placed!',
      description: `Your order of $${totalPrice.toFixed(2)} has been placed successfully.`,
      duration: 5000,
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="text-center p-12">
        <div className="mx-auto w-16 h-16 mb-4 text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
      </div>
    );
  }

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Shopping Cart ({items.length} items)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {items.map(item => (
              <div key={item.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                    <span className="font-medium text-xs text-center text-muted-foreground">Product</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="w-20 text-right font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-destructive hover:text-destructive/80" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="w-full flex justify-between items-center py-4 border-t">
            <span className="font-medium text-lg">Total</span>
            <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
          </div>
          <Button className="w-full" onClick={handleCheckout}>
            <CreditCard className="mr-2 h-4 w-4" /> Checkout Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
