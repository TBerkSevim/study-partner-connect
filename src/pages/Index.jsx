import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-orange-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-orange-600">Welcome to StudyBuddy</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-center mb-4 text-orange-500">Find your perfect study partner today!</p>
            <Button className="mb-4 bg-orange-500 text-white">Start Searching</Button>
            <div className="w-full">
              <h2 className="text-lg mb-2 text-orange-600">Recently Viewed Profiles</h2>
              <ul className="space-y-2">
                <li className="p-2 border rounded bg-orange-200">Profile 1</li>
                <li className="p-2 border rounded bg-orange-200">Profile 2</li>
                <li className="p-2 border rounded bg-orange-200">Profile 3</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Index;