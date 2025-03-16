"use client";

import Link from 'next/link';

interface FooterLink {
  href: string;
  label: string;
}

const socialLinks: FooterLink[] = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "Github" },
  { href: "#", label: "LinkedIn" },
];

const productLinks: FooterLink[] = [
  { href: "/features", label: "Features" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
];

const companyLinks: FooterLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const legalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/compliance", label: "Compliance" },
];

const Footer = () => {
  const renderSection = (title: string, links: FooterLink[]) => (
    <div>
      <h4 className="font-semibold mb-4 text-[#FCA311]">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:text-[#FCA311] transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSocialLinks = () => (
    <div>
      <h3 className="text-2xl font-bold text-[#FCA311] mb-4">Foyer</h3>
      <p className="text-platinum/80 mb-4">
        Revolutionizing smart home management with intelligent, 
        user-friendly technology.
      </p>
      <div className="flex space-x-4" aria-label="Social Media Links">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} className="text-platinum hover:text-[#FCA311] transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="bg-[#14213D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {renderSocialLinks()}
          {renderSection("Product", productLinks)}
          {renderSection("Company", companyLinks)}
          {renderSection("Legal", legalLinks)}
        </div>

        <div className="border-t border-platinum/20 mt-8 pt-6 text-center">
          <p className="text-platinum/80">
            © {new Date().getFullYear()} Foyer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
