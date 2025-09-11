import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { LandingScreen } from "@/components/screens/LandingScreen";
import { BrandsScreen } from "@/components/screens/BrandsScreen";
import { DemoScreen } from "@/components/screens/DemoScreen";
import { SubscriptionScreen } from "@/components/screens/SubscriptionScreen";
import { DashboardScreen } from "@/components/screens/DashboardScreen";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [userEmail, setUserEmail] = useState("");
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [tempEmail, setTempEmail] = useState("");
  const { toast } = useToast();

  const handleGetWorkbench = () => {
    setShowEmailDialog(true);
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setCurrentScreen(2);
    toast({
      title: "Welcome aboard! 🚀",
      description: `Email ${email} registered successfully.`,
    });
  };

  const handleEmailDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempEmail) {
      setShowEmailDialog(false);
      handleEmailSubmit(tempEmail);
      setTempEmail("");
    }
  };

  const handleBrandsEmailSubmit = (email: string) => {
    setUserEmail(email);
    setCurrentScreen(3);
    toast({
      title: "Journey Started! ✨",
      description: "Proceeding to the demo section.",
    });
  };

  const handleStartJourney = () => {
    setCurrentScreen(4);
    toast({
      title: "Choose Your Plan! ✨",
      description: "Select a subscription to continue your journey.",
    });
  };

  const handleSubscribe = (plan: string) => {
    setCurrentScreen(5);
    toast({
      title: "Welcome to Your Workbench! 🎉",
      description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} plan activated. You're now ready to build amazing AI applications.`,
    });
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 1:
        return <LandingScreen onGetWorkbench={handleGetWorkbench} />;
      case 2:
        return <BrandsScreen onEmailSubmit={handleBrandsEmailSubmit} />;
      case 3:
        return <DemoScreen onStartJourney={handleStartJourney} />;
      case 4:
        return <SubscriptionScreen onSubscribe={handleSubscribe} />;
      case 5:
        return <DashboardScreen userEmail={userEmail} onBack={handleBack} />;
      default:
        return <LandingScreen onGetWorkbench={handleGetWorkbench} />;
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {currentScreen !== 5 && (
        <Navigation 
          userEmail={userEmail} 
          showBackButton={currentScreen > 1}
          onBack={handleBack}
        />
      )}
      
      {renderCurrentScreen()}

      {/* Email Dialog */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Enter Your Email
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEmailDialogSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="your@email.com"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className="h-12 text-lg"
              required
            />
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
            >
              Get Started
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
