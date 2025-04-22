
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Award, Trophy } from 'lucide-react';

const SustainabilityScore = () => {
  // In a real app, this would come from an API or calculation based on user activities
  const score = 78;
  const recentAchievements = [
    { id: 1, title: "Bike Commuter", description: "Used bicycle for commuting 10 times" },
    { id: 2, title: "Energy Saver", description: "Reduced electricity usage by 15%" },
    { id: 3, title: "Green Shopper", description: "Purchased 5 sustainable products" }
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle>Sustainability Score</CardTitle>
          <CardDescription>Your environmental impact rating</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 mb-4">
              <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-4xl font-bold">{score}</span>
              </div>
            </div>
            <Progress value={score} className="w-full h-2 mb-2" />
            <div className="flex justify-between w-full text-xs text-muted-foreground">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="font-medium mb-2 flex items-center gap-1">
              <Award className="h-4 w-4" />
              <span>Rating: Eco-Hero</span>
            </div>
            <p className="text-sm text-muted-foreground">
              You're in the top 15% of eco-conscious users in your region!
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentAchievements.map((achievement) => (
              <li key={achievement.id} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SustainabilityScore;
