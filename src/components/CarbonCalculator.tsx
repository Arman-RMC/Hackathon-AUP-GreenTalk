
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Car, Home, ShoppingCart } from 'lucide-react';

const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    electricity: '',
    carMileage: '',
    publicTransport: '',
    shopping: ''
  });

  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateCarbon = () => {
    // Simple calculation for demonstration
    const electricityEmissions = Number(formData.electricity) * 0.85; // kWh to CO2
    const carEmissions = Number(formData.carMileage) * 0.404; // miles to CO2
    const publicTransportEmissions = Number(formData.publicTransport) * 0.14; // miles to CO2
    const shoppingEmissions = Number(formData.shopping) * 0.5; // $ to CO2

    const total = electricityEmissions + carEmissions + publicTransportEmissions + shoppingEmissions;
    setResult(Math.round(total * 100) / 100);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Carbon Footprint Calculator</CardTitle>
        <CardDescription>Calculate your carbon footprint by entering your monthly usage data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="electricity">Monthly Electricity Usage (kWh)</Label>
            </div>
            <Input
              id="electricity"
              name="electricity"
              type="number"
              placeholder="Enter kWh"
              value={formData.electricity}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="carMileage">Monthly Car Mileage</Label>
            </div>
            <Input
              id="carMileage"
              name="carMileage"
              type="number"
              placeholder="Enter miles driven"
              value={formData.carMileage}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="publicTransport">Monthly Public Transport (miles)</Label>
            </div>
            <Input
              id="publicTransport"
              name="publicTransport"
              type="number"
              placeholder="Enter miles traveled"
              value={formData.publicTransport}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="shopping">Monthly Shopping (USD)</Label>
            </div>
            <Input
              id="shopping"
              name="shopping"
              type="number"
              placeholder="Enter amount spent"
              value={formData.shopping}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button onClick={calculateCarbon} className="w-full">Calculate Carbon Footprint</Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-muted rounded-lg text-center">
            <p className="text-lg font-medium">Your Monthly Carbon Footprint</p>
            <p className="text-3xl font-bold text-primary">{result} kg CO₂</p>
            <p className="text-sm text-muted-foreground mt-2">
              This is an estimate based on average emissions factors
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CarbonCalculator;
