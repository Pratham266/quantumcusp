import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  const phoneNumber = ""; // Placeholder, add actual number if provided
  const message = "Hi! I'm interested in your services.";
  
  // Use a generic wa.me link that opens the app/web interface
  // If phoneNumber is empty, it usually just opens the app, but better to have a number.
  // For now, I'll point to a generic link or just the homepage of WA if no number, 
  // but standard practice is wa.me/<number>. 
  // I will use a dummy number or just '#' and let user fill it, OR make it a 'contact' link style?
  // Actually, better to use a real-ish format or just `https://wa.me/` which might require a number.
  // Let's use `https://wa.me/` and if the user clicks it, it might ask for a number or open their chat list.
  // Safest is to just use a class generic link or ask user. 
  // Given I can't ask right now without stopping, I will use a placeholder and comment.
  const whatsappUrl = `https://wa.me/${9510459620}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </a>
  );
}
