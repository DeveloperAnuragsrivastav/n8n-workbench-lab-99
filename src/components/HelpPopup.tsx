import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

interface HelpPopupProps {
  trigger?: React.ReactNode;
}

export const HelpPopup = ({ trigger }: HelpPopupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <div onClick={() => setOpen(true)} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setOpen(true)}
          className="flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          Help
        </Button>
      )}
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold mb-4">
            Need Help? We're Here for You!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Company Info Header */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Workbench Support Team</h3>
            <p className="text-muted-foreground">We're available 24/7 to assist you</p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-lg font-mono text-primary">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-lg text-primary">support@workbench.ai</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Live Chat</h4>
                  <p className="text-sm text-muted-foreground">Available on our website</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Start Chat Now →
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Help */}
          <div className="bg-accent/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Quick Help</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Looking for something specific? Check out our most common questions:
            </p>
            <div className="space-y-1">
              <Button variant="link" className="p-0 h-auto text-sm justify-start">
                • How to upgrade my subscription?
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm justify-start">
                • Billing and payment issues
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm justify-start">
                • Getting started guide
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};