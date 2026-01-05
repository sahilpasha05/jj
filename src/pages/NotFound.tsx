import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition className="app-container flex items-center justify-center">
      <div className="px-4 text-center">
        <div className="w-20 h-20 rounded-3xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} className="text-destructive" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
        <p className="text-lg text-muted-foreground mb-2">Page Not Found</p>
        <p className="text-sm text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <button 
          onClick={() => navigate("/")}
          className="btn-cta inline-flex items-center justify-center gap-2 w-full max-w-xs"
        >
          <Home size={20} />
          Return to Home
        </button>
      </div>
    </PageTransition>
  );
};

export default NotFound;
