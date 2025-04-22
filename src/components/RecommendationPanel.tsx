
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Car, Lightbulb, ShoppingBag, Check, ChevronRight } from 'lucide-react';

// Sample data - in a real app, this would come from an API based on user's activities
const recommendations = {
  travel: [
    {
      id: 1,
      title: "Switch to carpooling for work commute",
      description: "Sharing rides with colleagues can reduce your travel emissions by up to 40%",
      impact: "High",
      savings: "102kg CO₂ / month",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Consider using public transport",
      description: "Taking the bus twice a week can reduce your carbon footprint significantly",
      impact: "Medium",
      savings: "65kg CO₂ / month",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Use a bike for short trips",
      description: "Cycling for trips under 2 miles is healthier and produces zero emissions",
      impact: "Medium",
      savings: "45kg CO₂ / month",
      difficulty: "Medium"
    }
  ],
  electricity: [
    {
      id: 1,
      title: "Switch to LED light bulbs",
      description: "LED bulbs use 75% less energy than traditional incandescent bulbs",
      impact: "Medium",
      savings: "40kg CO₂ / month",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Unplug devices when not in use",
      description: "Standby power can account for up to 10% of household electricity use",
      impact: "Low",
      savings: "25kg CO₂ / month",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Consider solar panel installation",
      description: "Solar panels can reduce your electricity-related emissions significantly",
      impact: "High",
      savings: "200kg CO₂ / month",
      difficulty: "Hard"
    }
  ],
  shopping: [
    {
      id: 1,
      title: "Buy local produce",
      description: "Local food requires less transportation and often has a lower carbon footprint",
      impact: "Medium",
      savings: "35kg CO₂ / month",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Reduce meat consumption",
      description: "Try plant-based meals a few times a week to reduce your food carbon footprint",
      impact: "High",
      savings: "75kg CO₂ / month",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Choose products with minimal packaging",
      description: "Excessive packaging contributes to waste and higher carbon emissions",
      impact: "Low",
      savings: "20kg CO₂ / month",
      difficulty: "Easy"
    }
  ]
};

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'High':
      return 'bg-green-100 text-green-800';
    case 'Medium':
      return 'bg-blue-100 text-blue-800';
    case 'Low':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'Hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const RecommendationPanel = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Personalized Recommendations</CardTitle>
        <CardDescription>
          Suggested actions to reduce your carbon footprint based on your activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="travel">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="travel" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Travel</span>
            </TabsTrigger>
            <TabsTrigger value="electricity" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span>Electricity</span>
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Shopping</span>
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(recommendations).map(([category, items]) => (
            <TabsContent key={category} value={category} className="pt-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{item.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant="outline" className={getImpactColor(item.impact)}>
                            {item.impact} Impact
                          </Badge>
                          <Badge variant="outline" className={getDifficultyColor(item.difficulty)}>
                            {item.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-primary text-sm font-medium">{item.savings}</div>
                        <div className="flex gap-3">
                          <button className="text-sm flex items-center gap-1 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-md transition-colors">
                            <Check className="h-4 w-4" />
                            <span>I did this</span>
                          </button>
                          <button className="text-sm flex items-center gap-1 bg-secondary/10 hover:bg-secondary/20 text-secondary px-3 py-1 rounded-md transition-colors">
                            <span>Details</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RecommendationPanel;
