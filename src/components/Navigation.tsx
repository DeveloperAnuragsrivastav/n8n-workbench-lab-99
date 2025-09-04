import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/UserMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  userEmail?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const Navigation = ({ userEmail, showBackButton, onBack }: NavigationProps) => {
  return (
    <nav className="bg-nav border-b border-nav-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
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
          <div className="nav-brand">
            Workbench
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Marketplace
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Find Projects
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Workbench
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Blog
          </a>
        </div>
        
        <UserMenu userEmail={userEmail} />
      </div>
    </nav>
  );
};