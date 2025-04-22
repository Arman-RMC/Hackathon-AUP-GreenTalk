
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Car, ShoppingBag, Lightbulb } from 'lucide-react';
import { 
  Line, 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Legend, 
  Tooltip
} from 'recharts';

// Sample data - in a real app, this would come from an API
const carbonData = [
  { name: 'Jan', Travel: 120, Electricity: 80, Shopping: 40, Total: 240 },
  { name: 'Feb', Travel: 100, Electricity: 75, Shopping: 45, Total: 220 },
  { name: 'Mar', Travel: 110, Electricity: 70, Shopping: 50, Total: 230 },
  { name: 'Apr', Travel: 90, Electricity: 65, Shopping: 35, Total: 190 },
  { name: 'May', Travel: 85, Electricity: 70, Shopping: 30, Total: 185 },
  { name: 'Jun', Travel: 95, Electricity: 85, Shopping: 40, Total: 220 },
];

const categoryData = [
  { name: 'Travel', value: 595, icon: Car },
  { name: 'Electricity', value: 445, icon: Lightbulb },
  { name: 'Shopping', value: 240, icon: ShoppingBag },
];

const CarbonTracker = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Carbon Footprint Tracker</CardTitle>
        <CardDescription>Track your carbon emissions across different categories</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trends">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trends" className="pt-4">
            <div className="h-[300px]">
              <ChartContainer 
                config={{
                  Travel: { color: "#4CAF50" },
                  Electricity: { color: "#2196F3" },
                  Shopping: { color: "#9C27B0" },
                  Total: { color: "#FF5722" }
                }}
              >
                <LineChart data={carbonData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="Travel" stroke="#4CAF50" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="Electricity" stroke="#2196F3" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="Shopping" stroke="#9C27B0" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="Total" stroke="#FF5722" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ChartContainer>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Your carbon footprint has decreased by 23% compared to last month
            </div>
          </TabsContent>
          
          <TabsContent value="categories" className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="CO₂ (kg)" fill="#4CAF50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {categoryData.map((item) => (
                <Card key={item.name} className="bg-muted/50">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-2xl font-bold">{item.value} kg</p>
                    <p className="text-xs text-muted-foreground">CO₂ equivalent</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <ChartTooltipContent
        className="bg-background border border-border shadow-lg"
        payload={payload} 
        active={active} 
        label={label}
      />
    );
  }
  return null;
};

export default CarbonTracker;
