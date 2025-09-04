import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

interface UserMenuProps {
  userEmail?: string;
}

export const UserMenu = ({ userEmail }: UserMenuProps) => {
  if (!userEmail) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm">
          Register
        </Button>
        <Button variant="accent" size="sm">
          Sign In
        </Button>
      </div>
    );
  }

  const initials = userEmail
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-muted-foreground hidden sm:block">
        Welcome, {userEmail.split('@')[0]}
      </span>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              <p className="font-medium">{userEmail}</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FontAwesomeIcon icon={faUser} className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FontAwesomeIcon icon={faCog} className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 h-4 w-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};