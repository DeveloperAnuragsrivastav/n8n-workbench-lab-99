import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShield, faBrain } from "@fortawesome/free-solid-svg-icons";
import heroImage from "@/assets/hero-workbench.jpg";
interface LandingScreenProps {
  onGetWorkbench: () => void;
}
export const LandingScreen = ({
  onGetWorkbench
}: LandingScreenProps) => {
  return <div className="h-screen relative">
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
          <Button variant="hero" size="lg" onClick={onGetWorkbench} className="mb-8">
            Get Workbench
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
          <img src={heroImage} alt="AI Workbench Interface" className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl shadow-xl h-48 object-cover" />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="card-glow p-8 text-center group hover:scale-105 transition-all duration-300 border-accent/20">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                <img src="/lovable-uploads/5c17d351-135e-4b40-9bd3-57bdcddcb1ae.png" alt="Lightning Fast" className="w-8 h-8 object-contain mix-blend-multiply" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">Lightning Fast</h3>
            <p className="text-muted-foreground leading-relaxed">
              Deploy AI models and applications in seconds with our optimized infrastructure and cutting-edge technology
            </p>
          </Card>

          <Card className="card-glow p-8 text-center group hover:scale-105 transition-all duration-300 border-accent/20">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <img src="/lovable-uploads/0b728d5b-230e-49b9-a30e-f64fbc48b852.png" alt="Enterprise Building" className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Enterprise Ready</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built for scale with enterprise-grade security, compliance features, and robust infrastructure
            </p>
          </Card>

          <Card className="card-glow p-8 text-center group hover:scale-105 transition-all duration-300 border-accent/20">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-accent/40 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="drop-shadow-sm">
                  <radialGradient id="oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1" cx="-670.437" cy="617.13" r=".041" gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1ba1e3"></stop><stop offset="0" stopColor="#1ba1e3"></stop><stop offset=".3" stopColor="#5489d6"></stop><stop offset=".545" stopColor="#9b72cb"></stop><stop offset=".825" stopColor="#d96570"></stop><stop offset="1" stopColor="#f49c46"></stop></radialGradient><path fill="url(#oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1)" d="M22.882,31.557l-1.757,4.024c-0.675,1.547-2.816,1.547-3.491,0l-1.757-4.024	c-1.564-3.581-4.378-6.432-7.888-7.99l-4.836-2.147c-1.538-0.682-1.538-2.919,0-3.602l4.685-2.08	c3.601-1.598,6.465-4.554,8.002-8.258l1.78-4.288c0.66-1.591,2.859-1.591,3.52,0l1.78,4.288c1.537,3.703,4.402,6.659,8.002,8.258	l4.685,2.08c1.538,0.682,1.538,2.919,0,3.602l-4.836,2.147C27.26,25.126,24.446,27.976,22.882,31.557z"></path><radialGradient id="oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2" cx="-670.437" cy="617.13" r=".041" gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1ba1e3"></stop><stop offset="0" stopColor="#1ba1e3"></stop><stop offset=".3" stopColor="#5489d6"></stop><stop offset=".545" stopColor="#9b72cb"></stop><stop offset=".825" stopColor="#d96570"></stop><stop offset="1" stopColor="#f49c46"></stop></radialGradient><path fill="url(#oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2)" d="M39.21,44.246l-0.494,1.132	c-0.362,0.829-1.51,0.829-1.871,0l-0.494-1.132c-0.881-2.019-2.467-3.627-4.447-4.506l-1.522-0.676	c-0.823-0.366-0.823-1.562,0-1.928l1.437-0.639c2.03-0.902,3.645-2.569,4.511-4.657l0.507-1.224c0.354-0.853,1.533-0.853,1.886,0	l0.507,1.224c0.866,2.088,2.481,3.755,4.511,4.657l1.437,0.639c0.823,0.366,0.823,1.562,0,1.928l-1.522,0.676	C41.677,40.619,40.091,42.227,39.21,44.246z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">AI Powered</h3>
            <p className="text-muted-foreground leading-relaxed">
              Access state-of-the-art LLMs and AI tools to accelerate development with intelligent automation
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
    </div>;
};