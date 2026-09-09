import { Wheat, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div>
            <div className="flex items-center mb-1.5">
              <Wheat className="w-5 h-5 text-green-600" />
              <span className="ml-2 text-lg font-bold tracking-tight text-gray-900">
                AgriScribe<span className="text-green-500">.ai</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">AI-powered farming, made simple.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} AgriScribe-AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-300 max-w-lg text-center md:text-right">
            AI-generated crop insights are informational and should be verified with qualified agricultural professionals.
          </p>
        </div>

      </div>
    </footer>
  );
};
