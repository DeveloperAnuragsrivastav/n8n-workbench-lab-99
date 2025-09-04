import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faClipboard, faRobot, faWrench } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import hpLogo from "@/assets/brands/hp-logo.png";
import dellLogo from "@/assets/brands/dell-logo.png";
import awsLogo from "@/assets/brands/aws-logo.png";
import googleLogo from "@/assets/brands/google-logo.png";
import microsoftLogo from "@/assets/brands/microsoft-logo.png";
import ibmLogo from "@/assets/brands/ibm-logo.png";
import oracleLogo from "@/assets/brands/oracle-logo.png";
import metaLogo from "@/assets/brands/meta-logo.png";

interface BrandsScreenProps {
  onEmailSubmit: (email: string) => void;
}

export const BrandsScreen = ({ onEmailSubmit }: BrandsScreenProps) => {
  const [email, setEmail] = useState("");

  const brands = [
    { name: "HP", logo: hpLogo },
    { name: "Dell", logo: dellLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Google", logo: googleLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Oracle", logo: oracleLogo },
    { name: "Meta", logo: metaLogo }
  ];

  const features = [
    {
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, GCP with unified management",
      icon: faCloud
    },
    {
      title: "Pre-built Templates",
      description: "100+ ready-to-use AI application templates",
      icon: faClipboard
    },
    {
      title: "LLM Integration",
      description: "Connect with GPT, Claude, Llama, and custom models",
      icon: faRobot
    },
    {
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface for complex AI workflows",
      icon: faWrench
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onEmailSubmit(email);
    }
  };

  return (
    <div className="h-screen">
      <ScrollArea className="h-full">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
          
            {/* Left Side - Brands */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">
                Trusted by <span className="text-primary">Leading Brands</span>
              </h2>
            <div className="brand-grid">
              {brands.map((brand, index) => (
                <div key={index} className="brand-card">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">{brand.name}</h3>
                </div> 
              ))}
            </div>
            </div>

            {/* Right Side - Email Form */}
            <div className="space-y-6">
            <Card className="card-glow p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Enter Your Email to Begin Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                  required
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Start Your Journey
                </Button>
              </form>
            </Card>
            </div>
          </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            What We're <span className="text-primary">Offering</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-glow p-4 text-center">
                <div className="text-3xl mb-3">
                  <FontAwesomeIcon icon={feature.icon} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </ScrollArea>
    </div>
  );
};