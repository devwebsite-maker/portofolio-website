import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to reveal elements on scroll
export function setupRevealAnimation() {
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(item => {
      const windowHeight = window.innerHeight;
      const elementTop = (item as HTMLElement).getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        item.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealElements);
  // Initial check on load
  revealElements();
  
  // Cleanup function
  return () => window.removeEventListener('scroll', revealElements);
}

// Format phone number for WhatsApp link
export function formatWhatsAppLink(phone: string): string {
  // Remove any non-digit characters
  const cleanNumber = phone.replace(/\D/g, '');
  
  // If number doesn't start with country code, add it (Indonesia: 62)
  const phoneWithCountry = cleanNumber.startsWith('62') 
    ? cleanNumber 
    : `62${cleanNumber.startsWith('0') ? cleanNumber.substring(1) : cleanNumber}`;
  
  return `https://wa.me/${phoneWithCountry}`;
}
