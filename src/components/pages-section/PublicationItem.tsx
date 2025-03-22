
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { FileText, ExternalLink, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PublicationItemProps {
  title: string;
  authors: string[];
  journal: string;
  volume?: string;
  pages?: string;
  year: number;
  doi?: string;
  url?: string;
  pdfUrl?: string;
  index: number;
  type?: "journal" | "preprint" | "conference";
  number?: number;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ 
  title, 
  authors, 
  journal, 
  volume,
  pages,
  year, 
  doi,
  url,
  pdfUrl,
  index,
  type = "journal",
  number
}) => {
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  // This would be replaced with your actual password validation logic
  const correctPassword = "getpdf"; // In a real app, this should be securely managed

  const handleDownloadPDF = () => {
    if (pdfUrl) {
      setPasswordDialogOpen(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setPasswordError(false);
      setPasswordDialogOpen(false);
      
      // Redirect to PDF
      window.open(pdfUrl, '_blank');
      
      // Reset password field
      setPassword('');
    } else {
      setPasswordError(true);
    }
  };

  // Format authors with "Aloka Kumar Sahoo" in bold
  const formattedAuthors = authors.map((author, idx) => {
    if (author === "Aloka Kumar Sahoo" || author === "Your Name") {
      return <strong key={idx}>{author}</strong>;
    }
    return <span key={idx}>{author}</span>;
  }).reduce((prev, curr, idx) => {
    return idx === 0 ? [curr] : [...prev, <span key={`sep-${idx}`}>, </span>, curr];
  }, [] as React.ReactNode[]);

  return (
    <div 
      className={cn(
        "group p-6 bg-white border border-gray-100 rounded-lg transition-all duration-300",
        "hover:shadow-md hover:border-gray-200 hover:bg-gray-50/50"
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-3">
          {number && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-medium">
              {number}
            </div>
          )}
          <div>
            <h3 className="text-lg font-medium mb-2 group-hover:text-gray-900 transition-colors">
              {title}
            </h3>
            
            <p className="text-sm text-gray-500 mb-2">
              {formattedAuthors}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{journal}</span>
              <span>•</span>
              <span>{volume} {pages} ({year})</span>
              {type === "preprint" && (
                <>
                  <span>•</span>
                  <span className="text-emerald-600 font-medium">Preprint</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          {pdfUrl && (
            <button
              onClick={handleDownloadPDF}
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Download PDF"
              title="Download PDF"
            >
              <Download size={18} />
            </button>
          )}
          
          {doi && (
            <a 
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="View publication"
              title="View publication"
            >
              <ExternalLink size={18} />
            </a>
          )}
          
          {url && (
            <a 
              href={`${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="View publication"
              title="View publication"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <Dialog open={passwordDialogOpen} onOpenChange={setPasswordDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Protected Publication</DialogTitle>
            <DialogDescription>
              This publication requires a password to download. Please enter the password below.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={passwordError ? "border-red-500" : ""}
              />
              {passwordError && (
                <p className="text-xs text-red-500">Incorrect password. Please try again.</p>
              )}
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setPasswordDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Download PDF
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PublicationItem;
