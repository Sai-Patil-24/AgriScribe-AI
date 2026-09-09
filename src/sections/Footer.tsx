import { Wheat, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          
          <div>
            <div className="flex items-center mb-2">
              <Wheat className="w-6 h-6 text-green-600" />
              <span className="ml-2 text-xl font-bold tracking-tight text-gray-900">
                AgriScribe<span className="text-green-500">-AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">AI-powered farming, made simple.</p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm font-semibold text-gray-600">
            <a href="#how-it-works" className="hover:text-green-600 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-green-600 transition-colors">Features</a>
            <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200">
            <Globe className="w-4 h-4 text-gray-500" />
            <span>English (EN)</span>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} AgriScribe-AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 max-w-2xl text-center md:text-right font-medium">
            AI-generated crop insights are informational and should be verified with qualified agricultural professionals where appropriate.
          </p>
        </div>

      </div>
    </footer>
  );
};
