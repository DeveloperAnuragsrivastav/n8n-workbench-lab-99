import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserMenu } from "@/components/UserMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faWrench, faRobot, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import demoImage from "@/assets/dashboard-demo.jpg";

interface DashboardScreenProps {
  userEmail?: string;
  onBack?: () => void;
}

export const DashboardScreen = ({ userEmail, onBack }: DashboardScreenProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [remainingDays] = useState(27);

  const headerItems = [
    { id: 'build', label: 'Build', icon: faWrench },
    { id: 'llm', label: 'LLM', icon: faRobot },
    { id: 'template', label: 'Template', icon: faClipboard }
  ];

  const accounts = [
    { name: 'Production', status: 'active', usage: '85%' },
    { name: 'Development', status: 'active', usage: '42%' },
    { name: 'Staging', status: 'inactive', usage: '12%' }
  ];

  const notifications = [
    { type: 'success', message: 'Model deployment completed', time: '2m ago' },
    { type: 'warning', message: 'High CPU usage detected', time: '5m ago' },
    { type: 'info', message: 'Weekly report available', time: '1h ago' }
  ];

  const renderMainContent = () => {
    if (!activeSection) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <img 
              src={demoImage} 
              alt="Dashboard Demo" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl mb-8"
            />
            <h3 className="text-2xl font-bold mb-4">Welcome to Your Workbench</h3>
            <p className="text-muted-foreground">
              Select an option from the header to get started with building AI applications.
            </p>
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'build':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Build Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-glow p-6">
                <h3 className="text-xl font-bold mb-4">New Project</h3>
                <p className="text-muted-foreground mb-4">Start building a new AI application from scratch</p>
                <Button variant="hero">Create Project</Button>
              </Card>
              <Card className="card-glow p-6">
                <h3 className="text-xl font-bold mb-4">Import Project</h3>
                <p className="text-muted-foreground mb-4">Import an existing project from Git repository</p>
                <Button variant="secondary">Import from Git</Button>
              </Card>
            </div>
          </div>
        );
      case 'llm':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Language Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {['GPT-4', 'Claude-3', 'Llama-2'].map((model) => (
                <Card key={model} className="card-glow p-6">
                  <h3 className="text-xl font-bold mb-4">{model}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status: Active</span>
                    <Button variant="accent" size="sm">Configure</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      case 'template':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Chatbot', 'Document AI', 'Image Generator', 'Data Analyzer', 'API Assistant', 'Workflow Builder'].map((template) => (
                <Card key={template} className="card-glow p-6">
                  <h3 className="text-lg font-bold mb-3">{template}</h3>
                  <p className="text-muted-foreground text-sm mb-4">Ready-to-use template for {template.toLowerCase()}</p>
                  <Button variant="outline" size="sm" className="w-full">Use Template</Button>
                </Card>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-nav border-b border-nav-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {onBack && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                <span>Back</span>
              </Button>
            )}
            <div className="nav-brand">Workbench</div>
            <div className="flex items-center space-x-4">
              {headerItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "hero" : "ghost"}
                  onClick={() => setActiveSection(item.id)} 
                  className="flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Remaining Days: <span className="text-primary font-bold">{remainingDays}</span>
            </div>
            <UserMenu userEmail={userEmail} />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex">
        {/* Left Sidebar - Accounts */}
        <div className="dashboard-sidebar">
          <ScrollArea className="h-full">
            <div className="p-4 border-b border-sidebar-border">
              <h3 className="text-base font-bold mb-3">Accounts</h3>
              <div className="space-y-2">
              {accounts.map((account, index) => (
                <Card key={index} className="p-3 bg-sidebar-accent">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{account.name}</span>
                    <span className={`text-xs px-1 py-0.5 rounded-full ${
                      account.status === 'active' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {account.status}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Usage: {account.usage}</div>
                </Card>
              ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <main className="dashboard-main">
          <ScrollArea className="h-full">
            {renderMainContent()}
          </ScrollArea>
        </main>

        {/* Right Sidebar - Notifications */}
        <div className="dashboard-sidebar">
          <ScrollArea className="h-full">
            <div className="p-4 border-b border-sidebar-border">
              <h3 className="text-base font-bold mb-3">Notifications</h3>
              <div className="space-y-2">
              {notifications.map((notification, index) => (
                <Card key={index} className="p-3 bg-sidebar-accent">
                  <div className="flex items-start space-x-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${
                      notification.type === 'success' ? 'bg-green-500' :
                      notification.type === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-xs">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{notification.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};