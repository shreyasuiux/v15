import { motion } from 'motion/react';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onServiceClick?: (serviceTitle: string) => void;
  onProductClick?: (productTitle: string) => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
}

export function Footer({ onServiceClick, onProductClick, onWhoWeAreItemClick, onLogoClick }: FooterProps = {}) {
  // Define the mapping of footer items to their handlers
  const services = [
    { name: "Cloud Practice", handler: () => onServiceClick?.("Cloud Practice") },
    { name: "Digitalization", handler: () => onServiceClick?.("Digital & Product Engineering") }, // Maps to "Digital & Product Engineering"
    { name: "AI Agents", handler: () => onServiceClick?.("AI Agents") },
    { name: "Big Data", handler: () => onServiceClick?.("Big Data") },
    { name: "App Modernization", handler: () => onServiceClick?.("App Modernization") },
    { name: "Security", handler: () => onServiceClick?.("Security") },
    { name: "Database Management", handler: () => onServiceClick?.("Database Management") },
    { name: "ERP & Testing", handler: () => onServiceClick?.("ERP & Testing") },
  ];

  const products = [
    { name: "Atlas API Manager", handler: () => onProductClick?.("Atlas API Manager") },
    { name: "Agent Studio", handler: () => onProductClick?.("Agent Studio") },
    { name: "Oflohm Video", handler: () => onProductClick?.("Ottohm Video") }, // Maps to "Ottohm Video"
    { name: "ITSM Ticketing", handler: () => onProductClick?.("ITSM Ticketing") },
    { name: "AI Ops Platform", handler: () => onProductClick?.("AI Ops Platform") },
    { name: "Smart Contracts", handler: () => onProductClick?.("Smart Contracts") },
  ];

  const company = [
    { name: "About Us", handler: () => onWhoWeAreItemClick?.("About Us") },
    { name: "Our Team", handler: () => onWhoWeAreItemClick?.("Our Team") },
    { name: "Partners", handler: () => onWhoWeAreItemClick?.("Partners") },
    { name: "Careers", handler: () => onWhoWeAreItemClick?.("Careers") },
    { name: "News", handler: () => onWhoWeAreItemClick?.("News") },
    { name: "Contact", handler: () => onWhoWeAreItemClick?.("Contact") },
  ];

  return (
    <footer className="relative w-full bg-[#000000] border-t border-white/10 clear-both mt-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="mb-4" fill="white" onClick={onLogoClick} />
              <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 mt-3 leading-[1.6]">
                Applied Cloud Computing - Your comprehensive solution provider for digital transformation.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/applied-cloud-computing/posts/?feedView=all" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/appliedcloudcomputing/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/AppliedCloudComputing" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/@appliedcloudcomputing" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      item.handler();
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      item.handler();
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      item.handler();
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations Column */}
          <div>
            <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
              Office Locations
            </h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-purple-400 mb-2">
                  Mumbai (HQ)
                </h5>
                <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 leading-[1.6]">
                  201/202, New Era Business Park Road No. 33, Wagle Industrial Estate, Thane, 400604
                </p>
              </div>

              <div>
                <h5 className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-purple-400 mb-2">
                  Mumbai
                </h5>
                <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 leading-[1.6]">
                  Unit 102, Rupa Solitaire, Millennium Business Park, Mahape, Navi Mumbai
                </p>
              </div>

              <div>
                <h5 className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-purple-400 mb-2">
                  Pune
                </h5>
                <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 leading-[1.6]">
                  Office 305, White square, Hinjawadi, Wakad Rd, Pimpri-Chinchwad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-500">
            © 2025 Applied Cloud Computing. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 hover:text-purple-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 hover:text-purple-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 hover:text-purple-400 transition-colors duration-200"
            >
              Security & Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}