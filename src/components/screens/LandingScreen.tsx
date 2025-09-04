import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShield, faBrain } from "@fortawesome/free-solid-svg-icons";
import heroImage from "@/assets/hero-workbench.jpg";

interface LandingScreenProps {
  onGetWorkbench: () => void;
}

export const LandingScreen = ({ onGetWorkbench }: LandingScreenProps) => {
  return (
    <div className="h-screen relative">
      <ScrollArea className="h-full">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Workbench
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Build, deploy, and scale AI applications with our comprehensive development platform. 
            Access powerful tools, templates, and LLMs in one unified workspace.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onGetWorkbench}
            className="mb-8"
          >
            Get Workbench
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
          <img 
            src={heroImage} 
            alt="AI Workbench Interface" 
            className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl shadow-xl h-48 object-cover"
          />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-glow p-6 text-center">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faBolt} className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground text-sm">
              Deploy AI models and applications in seconds with our optimized infrastructure
            </p>
          </Card>

          <Card className="card-glow p-6 text-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faShield} className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">Enterprise Ready</h3>
            <p className="text-muted-foreground text-sm">
              Built for scale with enterprise-grade security and compliance features
            </p>
          </Card>

          <Card className="card-glow p-6 text-center">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faBrain} className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-3">AI Powered</h3>
            <p className="text-muted-foreground text-sm">
              Access state-of-the-art LLMs and AI tools to accelerate development
            </p>
          </Card>
        </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent rounded-full"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/5 to-transparent rounded-full"></div>
        </div>
      </ScrollArea>
    </div>
  );
};