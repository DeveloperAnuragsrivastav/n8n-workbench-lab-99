import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faChartBar, faRocket, faUsers } from "@fortawesome/free-solid-svg-icons";
import demoImage from "@/assets/dashboard-demo.jpg";

interface DemoScreenProps {
  onStartJourney: () => void;
}

export const DemoScreen = ({ onStartJourney }: DemoScreenProps) => {
  const features = [
    {
      title: "Visual Workflow Builder",
      description: "Drag and drop components to build complex AI workflows",
      icon: faWrench
    },
    {
      title: "Real-time Monitoring",
      description: "Track performance, costs, and usage across all deployments",
      icon: faChartBar
    },
    {
      title: "One-Click Deployment",
      description: "Deploy to any cloud provider with a single click",
      icon: faRocket
    },
    {
      title: "Collaborative Development",
      description: "Work together with your team in shared workspaces",
      icon: faUsers
    }
  ];

  const setupSteps = [
    {
      title: "Install Docker",
      command: "curl -fsSL https://get.docker.com -o get-docker.sh",
      description: "Container platform for consistent environments"
    },
    {
      title: "Install n8n",
      command: "npm install -g n8n",
      description: "Workflow automation tool for connecting services"
    },
    {
      title: "Install Ollama",
      command: "curl -fsSL https://ollama.ai/install.sh | sh",
      description: "Local LLM runtime for privacy-first AI"
    }
  ];

  return (
    <div className="h-screen">
      <ScrollArea className="h-full">
        <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Three Main Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          
          {/* Demo GIF Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-center">
              See It In <span className="text-primary">Action</span>
            </h2>
            <Card className="card-glow overflow-hidden">
              <div className="relative">
                <img 
                  src={demoImage} 
                  alt="Workbench Demo" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                  <div className="bg-primary rounded-full p-3 cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Interactive Demo</h3>
                <p className="text-muted-foreground text-sm">
                  Watch how easy it is to build, deploy, and manage AI applications with our platform.
                </p>
              </div>
            </Card>
          </div>

          {/* Features Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Core <span className="text-primary">Features</span>
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card key={index} className="card-glow p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">
                      <FontAwesomeIcon icon={feature.icon} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-xs">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Setup Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Quick <span className="text-primary">Setup</span>
            </h2>
            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <Card key={index} className="card-glow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold">{step.title}</h3>
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-2 mb-2">
                    <code className="text-xs text-muted-foreground break-all">
                      {step.command}
                    </code>
                  </div>
                  <p className="text-muted-foreground text-xs">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Build the <span className="text-primary">Future</span>?
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of developers building next-generation AI applications with our platform.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onStartJourney}
          >
            Start Your Journey
          </Button>
        </div>
        </div>
      </ScrollArea>
    </div>
  );
};