import React, { useState } from "react";

// ============= STANDALONE SUBSCRIPTION PAGE =============
// Copy this entire file to your second website
// 
// REQUIRED DEPENDENCIES (install via npm/yarn):
// - React (obviously)
// - lucide-react (for icons)
// 
// OPTIONAL: You can replace lucide-react icons with any other icon library

// Simple Card component (inline)
const Card = ({ children, className = "", onClick }: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
}) => (
  <div 
    className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

// Simple Button component (inline)
const Button = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick,
  ...props 
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: any;
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
  };
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 py-2 text-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Badge component (inline)
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 ${className}`}>
    {children}
  </span>
);

// Icons (you can replace these with any icon library)
const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CrownIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// Main Subscription Component
interface StandaloneSubscriptionPageProps {
  onSubscribe: (plan: string) => void;
}

const StandaloneSubscriptionPage = ({ onSubscribe }: StandaloneSubscriptionPageProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$9",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "5 AI Projects",
        "Basic Templates",
        "Email Support",
        "1GB Storage"
      ],
      icon: ZapIcon,
      popular: false
    },
    {
      id: "pro",
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Most popular for professionals",
      features: [
        "Unlimited AI Projects",
        "Premium Templates",
        "Priority Support", 
        "10GB Storage",
        "Advanced Analytics",
        "Team Collaboration"
      ],
      icon: CrownIcon,
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom Integrations",
        "Dedicated Support",
        "Unlimited Storage",
        "Advanced Security",
        "Custom Branding"
      ],
      icon: CrownIcon,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {" "}Plan
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Subscribe to continue building amazing AI applications with unlimited access to our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <Card 
                key={plan.id}
                className={`relative p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                } ${
                  isSelected ? 'ring-2 ring-purple-500 shadow-xl' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={isSelected ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSubscribe(plan.id);
                  }}
                >
                  {isSelected ? "Subscribe Now" : "Select Plan"}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            All plans include a 14-day free trial. Cancel anytime.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Usage Example:
const App = () => {
  const handleSubscribe = (planId: string) => {
    console.log(`Subscribed to plan: ${planId}`);
    // Handle subscription logic here
    // e.g., redirect to payment, call API, etc.
  };

  return <StandaloneSubscriptionPage onSubscribe={handleSubscribe} />;
};

export default StandaloneSubscriptionPage;

// ============= INTEGRATION INSTRUCTIONS =============
/*
1. Install required dependencies:
   npm install react lucide-react
   
2. If you want to use Tailwind CSS, make sure it's installed:
   npm install tailwindcss

3. If you don't want to use Tailwind, replace all className with inline styles or CSS modules

4. Usage:
   import StandaloneSubscriptionPage from './StandaloneSubscriptionPage';
   
   function MyApp() {
     const handleSubscribe = (planId) => {
       // Your subscription logic
       console.log('Subscribed to:', planId);
     };
     
     return <StandaloneSubscriptionPage onSubscribe={handleSubscribe} />;
   }

5. Customize:
   - Change colors by modifying the gradient and color classes
   - Update plan details in the `plans` array
   - Replace icons with your preferred icon library
   - Modify styling to match your brand
*/