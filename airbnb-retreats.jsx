import { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BedDouble,
  Bell,
  Building2,
  Calendar,
  CalendarDays,
  Car,
  Check,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  DollarSign,
  Download,
  Eye,
  Globe,
  Heart,
  Loader2,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  Mountain,
  Pencil,
  Plane,
  Plus,
  Receipt,
  Search,
  Send,
  Share,
  Share2,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  Tent,
  TreePalm,
  TrendingUp,
  UserCircle,
  UserPlus,
  Users,
  Utensils,
  Waves,
  Wifi
} from "lucide-react";

const IMG = {
  cabin: "https://images.unsplash.com/photo-1635713686954-99acab439aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmluJTIwY29ycG9yYXRlJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  beach: "https://images.unsplash.com/photo-1765939946756-278cab6bc888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwZXN0YXRlJTIwZ3JvdXAlMjB2YWNhdGlvbnxlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ranch: "https://images.unsplash.com/photo-1657587851068-8767c76fea45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByYW5jaCUyMG1lZXRpbmclMjBzcGFjZXxlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  wine: "https://images.unsplash.com/photo-1641830845418-2cba6d2ab45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMHRlYW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  hiking: "https://images.unsplash.com/photo-1770563181870-eca60076ffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaGlraW5nJTIwZ3JvdXAlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzc1ODUzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  cooking: "https://images.unsplash.com/photo-1762994576926-b8268190a2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBncm91cCUyMGFjdGl2aXR5fGVufDF8fHx8MTc3NTg1MzU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
  yoga: "https://images.unsplash.com/photo-1767452985665-fb3a6c9f4009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcmV0cmVhdCUyMHdlbGxuZXNzJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzU4NTM1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  sonoma: "https://images.unsplash.com/photo-1730151506069-8f55a6b6c5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25vbWElMjB2aW5leWFyZCUyMGVzdGF0ZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzU4NTM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  austin: "https://images.unsplash.com/photo-1593195150513-c8aab7e7bcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0aW4lMjB0ZXhhcyUyMG1vZGVybiUyMGxvZnR8ZW58MXx8fHwxNzc1ODUzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  denver: "https://images.unsplash.com/photo-1702136413923-585f8ff680b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW52ZXIlMjBtb3VudGFpbiUyMGhvdXNlJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzU4NTM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  villa: "https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHN3aW1taW5nJTIwcG9vbCUyMGFlcmlhbHxlbnwxfHx8fDE3NzU4NTM1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  kayak: "https://images.unsplash.com/photo-1759845564654-694348a5a4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnVpbGRpbmclMjBrYXlha2luZyUyMG9jZWFufGVufDF8fHx8MTc3NTg1MzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  interior: "https://images.unsplash.com/photo-1757262798677-ab4af4455a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tJTIwc3BhY2lvdXN8ZW58MXx8fHwxNzc1ODUzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  cowork: "https://images.unsplash.com/photo-1516866131298-d6af09fa97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMG1vZGVybiUyMGJyaWdodHxlbnwxfHx8fDE3NzU4NTM1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

const properties = [
  { id: "1", image: IMG.sonoma, title: "Vineyard Estate in Sonoma", location: "Sonoma, California", price: "$1,850", rating: 4.97, reviews: 124, beds: 8, guests: 20, retreatReady: true, superhost: true },
  { id: "2", image: IMG.austin, title: "Modern Loft Complex", location: "Austin, Texas", price: "$980", rating: 4.92, reviews: 87, beds: 6, guests: 16, retreatReady: true, superhost: true },
  { id: "3", image: IMG.denver, title: "Mountain Lodge Retreat", location: "Boulder, Colorado", price: "$2,200", rating: 4.98, reviews: 203, beds: 10, guests: 25, retreatReady: true },
  { id: "4", image: IMG.cabin, title: "Woodland Cabin Estate", location: "Lake Tahoe, California", price: "$1,450", rating: 4.95, reviews: 156, beds: 7, guests: 18, retreatReady: true, superhost: true },
  { id: "5", image: IMG.villa, title: "Luxury Pool Villa", location: "Scottsdale, Arizona", price: "$3,100", rating: 5.0, reviews: 67, beds: 12, guests: 30, retreatReady: true },
  { id: "6", image: IMG.beach, title: "Oceanfront Compound", location: "Malibu, California", price: "$4,500", rating: 4.96, reviews: 91, beds: 9, guests: 22, retreatReady: true, superhost: true },
  { id: "7", image: IMG.interior, title: "Designer Townhouse", location: "Brooklyn, New York", price: "$1,200", rating: 4.89, reviews: 178, beds: 5, guests: 14, retreatReady: true },
  { id: "8", image: IMG.ranch, title: "Desert Ranch Estate", location: "Sedona, Arizona", price: "$2,800", rating: 4.94, reviews: 45, beds: 11, guests: 28, retreatReady: true },
];

const experiences = [
  { id: "e1", image: IMG.wine, title: "Private Wine Tasting & Vineyard Tour", category: "Team Building", price: "$1,200", rating: 4.98, reviews: 342, duration: "3 hrs", groupSize: "10–30" },
  { id: "e2", image: IMG.hiking, title: "Guided Mountain Trek & Picnic", category: "Adventure", price: "$800", rating: 4.95, reviews: 218, duration: "5 hrs", groupSize: "8–25" },
  { id: "e3", image: IMG.cooking, title: "Farm-to-Table Cooking Class", category: "Culinary", price: "$950", rating: 4.97, reviews: 156, duration: "3 hrs", groupSize: "10–20" },
  { id: "e4", image: IMG.yoga, title: "Sunrise Yoga & Wellness Workshop", category: "Wellness", price: "$600", rating: 4.93, reviews: 289, duration: "2 hrs", groupSize: "10–40" },
  { id: "e5", image: IMG.kayak, title: "Ocean Kayaking Adventure", category: "Adventure", price: "$1,100", rating: 4.91, reviews: 134, duration: "4 hrs", groupSize: "8–20" },
  { id: "e6", image: IMG.cowork, title: "Innovation Workshop & Brainstorm", category: "Strategy", price: "$1,500", rating: 4.96, reviews: 87, duration: "4 hrs", groupSize: "10–50" },
];

const categories = [
  { icon: Building2, label: "Urban" },
  { icon: Mountain, label: "Mountain" },
  { icon: TreePalm, label: "Tropical" },
  { icon: Waves, label: "Lakefront" },
  { icon: Tent, label: "Glamping" },
];

function Header({ currentPage, onNavigate }) {
  const isHome = currentPage === 'home';
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 shrink-0">
            <svg width="102" height="32" viewBox="0 0 102 32" fill="none">
              <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.49-.95-.76-1.4-.32-.49-.69-.99-1.2-1.4-.99-.81-2.22-1.24-3.49-1.24-1.29 0-2.49.45-3.49 1.24-.49.41-.87.91-1.19 1.4-.27.45-.51.93-.76 1.4l-.1.2c-2.47 4.8-4.83 9.68-7.02 14.48l-.04.05c-.22.38-.44.78-.64 1.18-.24.49-.47 1.02-.62 1.58-.49 1.86-.16 3.82.93 5.34 1.07 1.5 2.7 2.43 4.58 2.63.52.06 1.06.04 1.58-.04.61-.09 1.24-.3 1.86-.6.75-.37 1.47-.89 2.23-1.57.93-.84 1.88-1.93 2.93-3.32 1.05 1.39 2.01 2.48 2.93 3.32.76.68 1.48 1.2 2.23 1.57.62.3 1.25.51 1.86.6.52.08 1.06.1 1.58.04 1.88-.2 3.52-1.13 4.58-2.63 1.09-1.52 1.42-3.48.93-5.34-.14-.54-.37-1.07-.61-1.56zm-13.7 2.27c-1.57-2.03-2.61-3.87-3.09-5.44-.19-.65-.27-1.22-.25-1.72.01-.45.12-.84.3-1.17.2-.38.5-.68.9-.88.35-.18.76-.28 1.21-.28.64 0 1.24.22 1.73.64.5.42.83 1 .97 1.66.28 1.27.02 2.89-.77 4.83-.23.55-.56 1.25-1 2.36zm7.5-5.44c-.48 1.57-1.52 3.41-3.09 5.44-.44-1.11-.77-1.81-1-2.36-.79-1.94-1.05-3.56-.77-4.83.14-.66.47-1.24.97-1.66.49-.42 1.09-.64 1.73-.64.45 0 .86.1 1.21.28.4.2.7.5.9.88.18.33.29.72.3 1.17.02.5-.06 1.07-.25 1.72z" fill="#FF385C"/>
              <path d="M41.14 20.24c0-2.36 1.64-3.98 3.78-3.98s3.78 1.62 3.78 3.98c0 2.38-1.64 3.98-3.78 3.98s-3.78-1.6-3.78-3.98zm5.82 0c0-1.44-.8-2.4-2.04-2.4s-2.04.96-2.04 2.4c0 1.46.8 2.4 2.04 2.4s2.04-.94 2.04-2.4zM50.1 9.96h1.68v14.08H50.1V9.96zm4.28 0h1.68v14.08h-1.68V9.96zm9.04 6.3c2.14 0 3.78 1.62 3.78 3.98 0 2.38-1.64 3.98-3.78 3.98s-3.78-1.6-3.78-3.98c0-2.36 1.64-3.98 3.78-3.98zm0 1.58c-1.24 0-2.04.96-2.04 2.4 0 1.46.8 2.4 2.04 2.4s2.04-.94 2.04-2.4c0-1.44-.8-2.4-2.04-2.4zm5.66-1.42h1.6v1.24c.56-.86 1.44-1.4 2.66-1.4 1.86 0 3.02 1.28 3.02 3.26v5.52h-1.68v-5.14c0-1.28-.66-2.06-1.82-2.06-1.2 0-2.1.88-2.1 2.2v4.98h-1.68V16.42zm11.98 7.82c-.64 0-1.18-.14-1.62-.4-.44-.26-.76-.62-.98-1.06v1.26h-1.6V9.96h1.68v7.66c.22-.46.56-.84.98-1.12.44-.28.96-.44 1.58-.44 1.86 0 3.32 1.62 3.32 3.98 0 2.38-1.46 4.2-3.36 4.2zm-.34-6.4c-1.22 0-2.24.94-2.24 2.4 0 1.48 1.02 2.4 2.24 2.4 1.24 0 2.08-.94 2.08-2.4 0-1.44-.84-2.4-2.08-2.4zm5.66-1.42h1.6v1.24c.56-.86 1.44-1.4 2.66-1.4 1.86 0 3.02 1.28 3.02 3.26v5.52h-1.68v-5.14c0-1.28-.66-2.06-1.82-2.06-1.2 0-2.1.88-2.1 2.2v4.98h-1.68V16.42zm11.98 7.82c-2.14 0-3.78-1.6-3.78-3.98 0-2.36 1.64-3.98 3.78-3.98 2.14 0 3.42 1.58 3.42 3.86v.58h-5.46c.14 1.28 1.02 2.08 2.3 2.08.88 0 1.56-.38 1.9-1.02l1.34.72c-.66 1.1-1.78 1.74-3.5 1.74zm-2-4.7h3.72c-.1-1.16-.86-1.88-1.84-1.88-1.04 0-1.74.7-1.88 1.88z" fill="#FF385C"/>
            </svg>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('home')} className={`pb-1 text-[14px] transition-colors ${isHome ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"}`}>Retreats</button>
            <button onClick={() => onNavigate('brief')} className={`pb-1 text-[14px] transition-colors ${currentPage === 'brief' ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"}`}>Plan a Retreat</button>
            <button onClick={() => onNavigate('guest-hub')} className={`pb-1 text-[14px] transition-colors ${currentPage === 'guest-hub' ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"}`}>Guest Hub</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-[14px] hover:bg-gray-100 px-3 py-2 rounded-full transition-colors">Switch to hosting</button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Globe className="w-4 h-4" /></button>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md transition-shadow">
              <Menu className="w-4 h-4" />
              <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center"><UserCircle className="w-6 h-6 text-white" /></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchBar({ onNavigate }) {
  return (
    <div className="max-w-[850px] mx-auto border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center" onClick={() => onNavigate("brief")}>
      <div className="flex-1 px-7 py-3 border-r border-gray-200"><div className="text-[12px] font-[500]">Where</div><div className="text-[14px] text-gray-400">Search destinations</div></div>
      <div className="px-6 py-3 border-r border-gray-200"><div className="text-[12px] font-[500]">When</div><div className="text-[14px] text-gray-400">Add dates</div></div>
      <div className="px-6 py-3 border-r border-gray-200"><div className="text-[12px] font-[500]">Team size</div><div className="text-[14px] text-gray-400">Add guests</div></div>
      <div className="flex-1 px-6 py-3 flex items-center justify-between">
        <div><div className="text-[12px] font-[500]">Vibe</div><div className="text-[14px] text-gray-400">Add description</div></div>
        <button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white p-3 rounded-full transition-colors"><Search className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

function PropertyCard({ property, onClick }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {property.retreatReady && <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-[12px] shadow-sm flex items-center gap-1"><span className="font-[500]">Retreat Ready</span><span className="text-[#FF385C]">✦</span></div>}
        <button className="absolute top-3 right-3 p-1.5 hover:scale-110 transition-transform" onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}>
          <Heart className={`w-6 h-6 ${liked ? "fill-[#FF385C] text-[#FF385C]" : "fill-black/30 text-white stroke-[1.5]"}`} />
        </button>
        {property.superhost && <div className="absolute bottom-3 left-3 bg-white rounded-full px-2.5 py-1 text-[11px] shadow-sm"><span className="font-[500]">Guest favorite</span></div>}
      </div>
      <div className="space-y-0.5">
        <div className="flex items-start justify-between">
          <h3 className="text-[15px] font-[500] truncate pr-2">{property.title}</h3>
          <div className="flex items-center gap-1 shrink-0"><Star className="w-3.5 h-3.5 fill-black" /><span className="text-[14px]">{property.rating}</span></div>
        </div>
        <p className="text-[14px] text-gray-500">{property.location}</p>
        <div className="flex items-center gap-2 text-[13px] text-gray-500">
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{property.guests} guests</span><span>·</span><span>{property.beds} beds</span>
        </div>
        <p className="text-[15px] mt-1"><span className="font-[500]">{property.price}</span><span className="text-gray-500"> / night</span></p>
      </div>
    </div>
  );
}

function ExperienceCard({ experience }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
        <img src={experience.image} alt={experience.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-[12px] shadow-sm font-[500]">{experience.category}</div>
        <button className="absolute top-3 right-3 p-1.5 hover:scale-110 transition-transform" onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}>
          <Heart className={`w-6 h-6 ${liked ? "fill-[#FF385C] text-[#FF385C]" : "fill-black/30 text-white stroke-[1.5]"}`} />
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1 text-[13px]">
          <Star className="w-3.5 h-3.5 fill-black" /><span className="font-[500]">{experience.rating}</span><span className="text-gray-500">({experience.reviews})</span>
        </div>
        <h3 className="text-[15px] font-[500]">{experience.title}</h3>
        <div className="flex items-center gap-3 text-[13px] text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{experience.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{experience.groupSize}</span>
        </div>
        <p className="text-[15px]"><span className="font-[500]">{experience.price}</span><span className="text-gray-500"> / group</span></p>
      </div>
    </div>
  );
}

function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <div className="bg-white pt-6 pb-8 px-6 md:px-10 lg:px-20"><SearchBar onNavigate={onNavigate} /></div>
      <div className="border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex items-center gap-8 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button key={cat.label} className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity shrink-0 pb-2 border-b-2 border-transparent hover:border-black">
                <cat.icon className="w-6 h-6" /><span className="text-[12px] font-[500] whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
            <div className="ml-auto shrink-0">
              <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2.5 text-[13px] font-[500] hover:bg-gray-50">
                <Shield className="w-4 h-4" />Retreat Ready only
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 mt-8">
        <div className="bg-gradient-to-r from-[#BD1E59] to-[#FF385C] rounded-2xl p-8 md:p-12 text-white cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("brief")}>
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3"><Sparkles className="w-5 h-5" /><span className="text-[13px] font-[500] uppercase tracking-wide opacity-90">New</span></div>
              <h2 className="text-[28px] md:text-[32px] font-[700] mb-3 leading-tight">Plan your retreat in minutes, not months</h2>
              <p className="text-[16px] opacity-90 mb-6 leading-relaxed">Tell us about your team and we'll generate complete retreat options — venue, activities, and itinerary — with all-in pricing. From 40 hours of planning to under 8.</p>
              <button className="bg-white text-[#FF385C] px-6 py-3 rounded-lg font-[500] text-[15px] hover:bg-gray-50 transition-colors">Start your retreat brief →</button>
            </div>
            <div className="flex gap-3 text-[13px]">
              {[{ icon: Receipt, text: "All-in pricing" }, { icon: Users, text: "Guest coordination" }, { icon: Shield, text: "AirCover for Retreats" }].map((item) => (
                <div key={item.text} className="bg-white/15 rounded-xl px-4 py-3 backdrop-blur-sm">
                  <item.icon className="w-5 h-5 mb-2" /><div className="font-[500]">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3"><h2 className="text-[22px] font-[600]">Retreat-Ready homes</h2><ArrowRight className="w-5 h-5" /></div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30" disabled><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.slice(0, 8).map((p) => (
            <PropertyCard key={p.id} property={p} onClick={() => onNavigate("property", { propertyId: p.id })} />
          ))}
        </div>
      </section>
      <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 mt-14">
        <h2 className="text-[22px] font-[600] mb-2">Teams like yours love these</h2>
        <p className="text-gray-500 text-[15px] mb-6">Based on tech teams of 20–30 booking 4-day retreats</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ location: "Sonoma, CA", stat: "Most booked", desc: "Vineyard estates with meeting space", image: IMG.sonoma }, { location: "Boulder, CO", stat: "Highest rated", desc: "Mountain lodges near hiking trails", image: IMG.denver }, { location: "Austin, TX", stat: "Best value", desc: "Urban lofts with creative spaces", image: IMG.austin }].map((item) => (
            <div key={item.location} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-3">
                <img src={item.image} alt={item.location} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-[12px] font-[500] mb-2 inline-block">{item.stat}</span>
                  <h3 className="text-[18px] font-[600]">{item.location}</h3>
                  <p className="text-[14px] opacity-90">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 mt-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3"><h2 className="text-[22px] font-[600]">Retreat Experiences</h2><ArrowRight className="w-5 h-5" /></div>
            <p className="text-gray-500 text-[15px] mt-1">Team building activities bookable alongside your stay</p>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30" disabled><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {experiences.map((e) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </div>
      </section>
      <section className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 mt-16 mb-16">
        <h2 className="text-[22px] font-[600] mb-8 text-center">How Airbnb Retreats works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[{ step: "1", title: "Describe your retreat", desc: "Tell us your team size, dates, budget, and vibe. Our AI handles the rest." }, { step: "2", title: "Pick a package", desc: "Choose from AI-generated options with venue, activities, and all-in pricing." }, { step: "3", title: "Coordinate your team", desc: "Share the Guest Hub link to collect RSVPs, dietary needs, and room preferences." }, { step: "4", title: "Show up and connect", desc: "Everything's handled — from room assignments to host prep briefs." }].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#FF385C] text-white flex items-center justify-center text-[18px] font-[600] mx-auto mb-4">{s.step}</div>
              <h3 className="text-[16px] font-[500] mb-2">{s.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] text-gray-500">
            <div className="flex items-center gap-4"><span>© 2026 Airbnb, Inc.</span><span>·</span><span>Privacy</span><span>·</span><span>Terms</span><span>·</span><span>Sitemap</span></div>
            <div className="flex items-center gap-4"><span>English (US)</span><span>$ USD</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ═══ RetreatBrief Page ═══
  Sparkles, MapPin, Calendar, Users, ChevronRight, ChevronLeft,
  Check, Loader2, Star, Clock, Heart, X, DollarSign

/* ─── Data ─── */
const vibes = [
  { id: "strategic", label: "Strategic Offsite", emoji: "🎯", desc: "Planning, roadmaps & deep work sessions" },
  { id: "bonding", label: "Team Bonding", emoji: "🤝", desc: "Build trust, connection & team morale" },
  { id: "kickoff", label: "Project Kickoff", emoji: "🚀", desc: "Alignment, brainstorming & momentum" },
  { id: "celebration", label: "Celebration", emoji: "🎉", desc: "Milestones, wins & team appreciation" },
  { id: "wellness", label: "Wellness Retreat", emoji: "🧘", desc: "Recharge with mindfulness & nature" },
  { id: "hackathon", label: "Hackathon", emoji: "💻", desc: "Build, prototype & ship together" },
];

const locations = [
  { name: "San Francisco", region: "Bay Area, CA", image: "https://images.unsplash.com/photo-1609780604352-4aac2b12fff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBmcmFuY2lzY28lMjBnb2xkZW4lMjBnYXRlJTIwYnJpZGdlJTIwYWVyaWFsfGVufDF8fHx8MTc3NTg1NDkxNXww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "New York", region: "NYC Metro", image: "https://images.unsplash.com/photo-1694408614917-561080671282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmUlMjBldmVuaW5nfGVufDF8fHx8MTc3NTg1NDkxNXww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Austin", region: "Texas", image: "https://images.unsplash.com/photo-1746047226443-2ba1d7bfaef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0aW4lMjB0ZXhhcyUyMGRvd250b3duJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc1ODU0OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Sonoma", region: "Wine Country, CA", image: "https://images.unsplash.com/photo-1680324418337-8911b24f3d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25vbWElMjB2YWxsZXklMjB2aW5leWFyZCUyMGdyZWVufGVufDF8fHx8MTc3NTg1NDkxNnww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Lake Tahoe", region: "Sierra Nevada, CA", image: "https://images.unsplash.com/photo-1655740408918-d0c4c87054bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwdGFob2UlMjB3aW50ZXIlMjBzbm93fGVufDF8fHx8MTc3NTg1NDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Sedona", region: "Arizona", image: "https://images.unsplash.com/photo-1745882094247-ef63654f99c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRvbmElMjByZWQlMjByb2NrcyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzU4NTQ5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Malibu", region: "Southern CA", image: "https://images.unsplash.com/photo-1741546654551-9df96d565f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxpYnUlMjBjYWxpZm9ybmlhJTIwY29hc3RsaW5lfGVufDF8fHx8MTc3NTg1NDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Denver", region: "Boulder, CO", image: "https://images.unsplash.com/photo-1702136413923-585f8ff680b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW52ZXIlMjBtb3VudGFpbiUyMGhvdXNlJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzU4NTM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080" },
];

const briefExperiences = [
  { id: "exp1", title: "Sunrise Yoga & Meditation", host: "with Maya", category: "Wellness", image: "https://images.unsplash.com/photo-1760774714285-61ff516f86c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ3JvdXAlMjB5b2dhJTIwc3VucmlzZXxlbnwxfHx8fDE3NzU4NTQ1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080", price: 45, duration: "1.5 hrs", rating: 4.97, reviews: 312, groupSize: "10–40", desc: "Begin the day centered with a professional instructor on a scenic hilltop." },
  { id: "exp2", title: "Farm-to-Table Cooking", host: "with Chef Marco", category: "Culinary", image: "https://images.unsplash.com/photo-1683624328172-88fb24625ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29va2luZyUyMGNsYXNzfGVufDF8fHx8MTc3NTg1NDU2NXww&ixlib=rb-4.1.0&q=80&w=1080", price: 85, duration: "3 hrs", rating: 4.98, reviews: 186, groupSize: "10–20", desc: "Cook a seasonal Italian meal with a Michelin-trained local chef." },
  { id: "exp3", title: "Mountain Trek & Picnic", host: "with Jake", category: "Adventure", image: "https://images.unsplash.com/photo-1733041453976-e4a98467c389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGdyb3VwJTIwdHJhaWx8ZW58MXx8fHwxNzc1ODU0NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080", price: 65, duration: "5 hrs", rating: 4.95, reviews: 228, groupSize: "8–25", desc: "Scenic trails with an expert guide, ending with a gourmet hilltop picnic." },
  { id: "exp4", title: "Pottery Workshop", host: "with Aya", category: "Creative", image: "https://images.unsplash.com/photo-1710834925630-7dee6c880b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd29ya3Nob3AlMjBoYW5kcyUyMGNsYXl8ZW58MXx8fHwxNzc1Nzg3ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080", price: 75, duration: "2.5 hrs", rating: 4.93, reviews: 97, groupSize: "8–16", desc: "Hands-on ceramics with a local artist — take your creations home." },
  { id: "exp5", title: "Ocean Kayaking", host: "with Carlos", category: "Adventure", image: "https://images.unsplash.com/photo-1766946580189-bab407807044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMG9jZWFuJTIwdGVhbSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzU4NTQ1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080", price: 90, duration: "4 hrs", rating: 4.91, reviews: 143, groupSize: "8–20", desc: "Paddle through coastal waters spotting wildlife with expert guides." },
  { id: "exp6", title: "Cocktail Mixology", host: "with Sofia", category: "Culinary", image: "https://images.unsplash.com/photo-1774404040490-fe1d1d121223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMG1peG9sb2d5JTIwY2xhc3MlMjBiYXJ0ZW5kZXJ8ZW58MXx8fHwxNzc1ODU0NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080", price: 55, duration: "2 hrs", rating: 4.96, reviews: 205, groupSize: "10–30", desc: "Learn to craft signature cocktails with a professional mixologist." },
  { id: "exp7", title: "Stargazing Night Tour", host: "with Dr. Chen", category: "Wellness", image: "https://images.unsplash.com/photo-1652806724292-381ff63977b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyZ2F6aW5nJTIwbmlnaHQlMjBza3klMjB0ZWxlc2NvcGV8ZW58MXx8fHwxNzc1ODU0NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080", price: 40, duration: "2 hrs", rating: 4.99, reviews: 87, groupSize: "10–50", desc: "Guided constellation tour with professional telescopes under dark skies." },
];

const categoryFilters = ["All", "Wellness", "Culinary", "Adventure", "Creative"];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/* ─── Calendar ─── */
function CalendarPicker({ startDate, endDate, onSelect }) {
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 1);
  });

  const prevMonth = () => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
  const nextMonth = () => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));

  const months = [viewMonth, new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1)];
  const today = new Date(); today.setHours(0, 0, 0, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-16">
          {months.map((m, i) => (
            <span key={i} className="text-[15px] font-[600]">{MONTHS[m.getMonth()]} {m.getFullYear()}</span>
          ))}
        </div>
        <button onClick={nextMonth} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-10">
        {months.map((month, mi) => {
          const year = month.getFullYear();
          const m = month.getMonth();
          const firstDay = new Date(year, m, 1).getDay();
          const daysInMonth = new Date(year, m + 1, 0).getDate();

          return (
            <div key={mi} className="flex-1">
              <div className="grid grid-cols-7 mb-2">
                {DAYS_SHORT.map((d) => (
                  <div key={d} className="text-[12px] text-gray-500 font-[500] text-center py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} className="h-11" />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const date = new Date(year, m, i + 1);
                  const isPast = date < today;
                  const isStart = startDate && date.getTime() === startDate.getTime();
                  const isEnd = endDate && date.getTime() === endDate.getTime();
                  const isInRange = startDate && endDate && date > startDate && date < endDate;
                  const isSelected = isStart || isEnd;

                  let bgClass = "";
                  let textClass = isPast ? "text-gray-300" : "text-gray-800";
                  let roundClass = "";

                  if (isSelected) {
                    bgClass = "bg-[#222222]";
                    textClass = "text-white";
                    roundClass = "rounded-full";
                  } else if (isInRange) {
                    bgClass = "bg-[#F7F7F7]";
                  }

                  // Range edge rounding
                  let wrapClass = "";
                  if (isStart && endDate) wrapClass = "bg-gradient-to-r from-transparent to-[#F7F7F7] rounded-l-full";
                  if (isEnd && startDate) wrapClass = "bg-gradient-to-l from-transparent to-[#F7F7F7] rounded-r-full";

                  return (
                    <div key={i} className={`h-11 flex items-center justify-center ${isInRange && !isSelected ? "bg-[#F7F7F7]" : ""} ${isStart && endDate && !isEnd ? "rounded-l-full bg-gradient-to-r from-transparent via-[#F7F7F7] to-[#F7F7F7]" : ""} ${isEnd && startDate && !isStart ? "rounded-r-full bg-gradient-to-l from-transparent via-[#F7F7F7] to-[#F7F7F7]" : ""}`}>
                      <button
                        disabled={isPast}
                        onClick={() => !isPast && onSelect(date)}
                        className={`w-10 h-10 text-[14px] font-[400] flex items-center justify-center transition-all
                          ${bgClass} ${textClass} ${roundClass}
                          ${!isPast && !isSelected ? "hover:border hover:border-gray-800 hover:rounded-full" : ""}
                          ${isPast ? "cursor-not-allowed" : "cursor-pointer"}
                        `}
                      >
                        {i + 1}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
function RetreatBrief({ onNavigate }) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [expCategoryFilter, setExpCategoryFilter] = useState("All");
  const calendarRef = useRef(null);

  const [form, setForm] = useState({
    location: "",
    startDate: null,
    endDate: null,
    teamSize: "",
    budget: "",
    vibes: [],
    selectedExperiences: [],
  });

  // Close calendar on outside click
  useEffect(() => {
    function handleClick(e) {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    }
    if (showCalendar) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showCalendar]);

  const toggleVibe = (id) => {
    setForm((f) => ({
      ...f,
      vibes: f.vibes.includes(id) ? f.vibes.filter((v) => v !== id) : f.vibes.length < 3 ? [...f.vibes, id] : f.vibes,
    }));
  };

  const toggleExperience = (id) => {
    setForm((f) => ({
      ...f,
      selectedExperiences: f.selectedExperiences.includes(id)
        ? f.selectedExperiences.filter((e) => e !== id)
        : [...f.selectedExperiences, id],
    }));
  };

  const handleDateSelect = (date) => {
    if (!form.startDate || (form.startDate && form.endDate)) {
      setForm((f) => ({ ...f, startDate: date, endDate: null }));
    } else if (date > form.startDate) {
      setForm((f) => ({ ...f, endDate: date }));
    } else {
      setForm((f) => ({ ...f, startDate: date, endDate: null }));
    }
  };

  const formatDateRange = () => {
    if (!form.startDate) return "";
    const opts = { month: "short", day: "numeric" };
    const s = form.startDate.toLocaleDateString("en-US", opts);
    if (!form.endDate) return s;
    const e = form.endDate.toLocaleDateString("en-US", { ...opts, year: "numeric" });
    return `${s} – ${e}`;
  };

  const getNights = () => {
    if (!form.startDate || !form.endDate) return 0;
    return Math.round((form.endDate.getTime() - form.startDate.getTime()) / (1000 * 60 * 60 * 24));
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => onNavigate("results"), 2500);
  };

  const filteredExperiences = expCategoryFilter === "All"
    ? briefExperiences
    : briefExperiences.filter((e) => e.category === expCategoryFilter);

  const teamSizeNum = parseInt(form.teamSize) || 20;
  const selectedExpTotal = form.selectedExperiences.reduce((sum, id) => {
    const exp = briefExperiences.find((e) => e.id === id);
    return sum + (exp ? exp.price * teamSizeNum : 0);
  }, 0);

  const stepLabels = ["Location & Dates", "Vibe & Budget", "Experiences", "Review & Generate"];

  return (
    <div className="min-h-screen bg-white">
      {/* Top progress bar */}
      <div className="sticky top-[80px] z-30 bg-white border-b border-gray-100">
        <div className="max-w-[960px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            {stepLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => i < step && setStep(i)}
                className={`flex items-center gap-2 text-[13px] font-[500] transition-colors ${
                  i === step ? "text-[#222222]" : i < step ? "text-[#FF385C] cursor-pointer" : "text-gray-400"
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-[600] transition-all ${
                  i < step ? "bg-[#FF385C] text-white" : i === step ? "bg-[#222222] text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className="hidden md:inline">{label}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-1.5">
            {stepLabels.map((_, i) => (
              <div key={i} className={`h-[3px] flex-1 rounded-full transition-all duration-500 ${
                i < step ? "bg-[#FF385C]" : i === step ? "bg-[#222222]" : "bg-gray-200"
              }`} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-6 pt-10 pb-32">
        {/* Step Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF385C]/10 to-[#BD1E59]/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-[#FF385C]" />
            <span className="text-[13px] font-[600] text-[#FF385C]">AI-Powered Retreat Planning</span>
          </div>
          <h1 className="text-[32px] md:text-[36px] font-[700] tracking-tight leading-tight mb-3 text-[#222222]">
            {step === 0 && "Where should your team escape to?"}
            {step === 1 && "Set the tone for your retreat"}
            {step === 2 && "Bundle Airbnb Experiences"}
            {step === 3 && "Your retreat brief is ready"}
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-[600px]">
            {step === 0 && "Pick a destination and dates — we'll match you with Retreat-Ready properties perfect for your team."}
            {step === 1 && "Choose the vibe and budget range so we can curate the right activities and agenda."}
            {step === 2 && "Add team building activities for an all-inclusive retreat package. You can always change these later."}
            {step === 3 && "Review everything below. Our AI will generate 2–3 complete retreat packages tailored to your brief."}
          </p>
        </div>

        {/* ─── STEP 0: Location & Dates ─── */}
        {step === 0 && (
          <div className="space-y-10">
            {/* Location Grid */}
            <div>
              <h2 className="text-[18px] font-[600] mb-1 text-[#222222]">Choose a destination</h2>
              <p className="text-[14px] text-gray-500 mb-5">All locations have Retreat-Ready certified properties</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((loc) => {
                  const selected = form.location === loc.name;
                  return (
                    <button
                      key={loc.name}
                      onClick={() => setForm((f) => ({ ...f, location: loc.name }))}
                      className={`relative rounded-2xl overflow-hidden aspect-[4/3] group transition-all ${
                        selected ? "ring-2 ring-[#222222] ring-offset-2" : "hover:shadow-lg"
                      }`}
                    >
                      <img src={loc.image} alt={loc.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {selected && (
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#222222] flex items-center justify-center shadow-lg">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-[15px] font-[600] text-white">{loc.name}</div>
                        <div className="text-[12px] text-white/80">{loc.region}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Team Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div ref={calendarRef}>
                <h2 className="text-[18px] font-[600] mb-1 text-[#222222]">When are you going?</h2>
                <p className="text-[14px] text-gray-500 mb-4">Most teams book 3–5 night retreats</p>
                <div className="relative">
                  <button
                    className={`w-full border-2 rounded-2xl px-5 py-4 text-left flex items-center gap-4 transition-all ${
                      showCalendar ? "border-[#222222]" : "border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => setShowCalendar(!showCalendar)}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F7F7F7] flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-[#FF385C]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] font-[500] text-gray-500 uppercase tracking-wide mb-0.5">Check-in / Check-out</div>
                      <div className={`text-[16px] ${formatDateRange() ? "font-[500] text-[#222222]" : "text-gray-400"}`}>
                        {formatDateRange() || "Add dates"}
                      </div>
                    </div>
                    {getNights() > 0 && (
                      <span className="bg-[#222222] text-white text-[12px] font-[600] rounded-full px-3 py-1">
                        {getNights()} nights
                      </span>
                    )}
                  </button>

                  {showCalendar && (
                    <div className="absolute top-full left-0 mt-3 z-50 bg-white rounded-3xl shadow-[0_6px_40px_rgba(0,0,0,0.14)] border border-gray-200 p-8 w-[min(calc(100vw-48px),680px)]">
                      <CalendarPicker startDate={form.startDate} endDate={form.endDate} onSelect={handleDateSelect} />
                      <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                        <button
                          onClick={() => setForm((f) => ({ ...f, startDate: null, endDate: null }))}
                          className="text-[14px] font-[500] underline text-gray-600 hover:text-[#222222]"
                        >
                          Clear dates
                        </button>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] text-gray-500">
                            {form.startDate && form.endDate
                              ? `${getNights()} nights selected`
                              : form.startDate ? "Select checkout" : "Select check-in"}
                          </span>
                          <button
                            className="bg-[#222222] text-white px-6 py-2.5 rounded-xl text-[14px] font-[500] hover:bg-black transition-colors disabled:opacity-40"
                            disabled={!form.startDate || !form.endDate}
                            onClick={() => setShowCalendar(false)}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-[18px] font-[600] mb-1 text-[#222222]">How big is your team?</h2>
                <p className="text-[14px] text-gray-500 mb-4">We'll find properties that fit your group</p>
                <div className={`border-2 rounded-2xl px-5 py-4 flex items-center gap-4 transition-all focus-within:border-[#222222] ${form.teamSize ? "border-gray-200" : "border-gray-200"}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#F7F7F7] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#FF385C]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[12px] font-[500] text-gray-500 uppercase tracking-wide mb-0.5">Team size</div>
                    <input
                      type="text"
                      placeholder="e.g. 25 people"
                      className="w-full text-[16px] font-[500] text-[#222222] placeholder-gray-400 outline-none bg-transparent"
                      value={form.teamSize}
                      onChange={(e) => setForm((f) => ({ ...f, teamSize: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 1: Vibe & Budget ─── */}
        {step === 1 && (
          <div className="space-y-10">
            <div>
              <h2 className="text-[18px] font-[600] mb-1 text-[#222222]">What's the vibe?</h2>
              <p className="text-[14px] text-gray-500 mb-5">Select up to 3 that match your retreat goals</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {vibes.map((v) => {
                  const selected = form.vibes.includes(v.id);
                  return (
                    <button
                      key={v.id}
                      className={`relative p-6 rounded-2xl border-2 text-left transition-all ${
                        selected ? "border-[#222222] bg-[#F7F7F7]" : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                      }`}
                      onClick={() => toggleVibe(v.id)}
                    >
                      {selected && (
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#222222] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                      <div className="text-[32px] mb-3">{v.emoji}</div>
                      <div className="text-[16px] font-[600] text-[#222222] mb-1">{v.label}</div>
                      <div className="text-[14px] text-gray-500 leading-relaxed">{v.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-10">
              <h2 className="text-[18px] font-[600] mb-1 text-[#222222]">What's your budget?</h2>
              <p className="text-[14px] text-gray-500 mb-5">Per person, including accommodation and activities</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "$1,000–$2,000", sub: "Budget-friendly", icon: "$" },
                  { label: "$2,000–$3,500", sub: "Most popular", icon: "$$", popular: true },
                  { label: "$3,500–$5,000", sub: "Premium", icon: "$$$" },
                  { label: "$5,000+", sub: "Luxury", icon: "$$$$" },
                ].map((b) => {
                  const selected = form.budget === b.label;
                  return (
                    <button
                      key={b.label}
                      className={`relative p-5 rounded-2xl border-2 text-left transition-all ${
                        selected ? "border-[#222222] bg-[#F7F7F7]" : "border-gray-200 hover:border-gray-400"
                      }`}
                      onClick={() => setForm((f) => ({ ...f, budget: b.label }))}
                    >
                      {selected && (
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#222222] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                      <div className="text-[20px] font-[700] text-[#222222] mb-0.5">{b.icon}</div>
                      <div className="text-[15px] font-[500] text-[#222222]">{b.label}</div>
                      <div className="text-[13px] text-gray-500 mt-0.5">{b.sub}</div>
                      {b.popular && (
                        <div className="mt-3 inline-flex items-center gap-1 bg-[#FF385C]/10 text-[#FF385C] text-[11px] font-[600] rounded-full px-2.5 py-1 uppercase tracking-wide">
                          <Star className="w-3 h-3 fill-[#FF385C]" /> Most popular
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 2: Experiences ─── */}
        {step === 2 && (
          <div className="space-y-8">
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setExpCategoryFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-[500] whitespace-nowrap transition-all border ${
                    expCategoryFilter === cat
                      ? "bg-[#222222] text-white border-[#222222]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#222222]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Experience cards — Airbnb-style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredExperiences.map((exp) => {
                const selected = form.selectedExperiences.includes(exp.id);
                return (
                  <div
                    key={exp.id}
                    onClick={() => toggleExperience(exp.id)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all group ${
                      selected ? "ring-2 ring-[#222222] ring-offset-2" : "hover:shadow-lg"
                    }`}
                  >
                    <div className="flex bg-white border border-gray-200 rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="w-[180px] h-[180px] shrink-0 relative overflow-hidden">
                        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <button
                          onClick={(e) => { e.stopPropagation(); }}
                          className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${selected ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-600"}`} />
                        </button>
                        {selected && (
                          <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#222222] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <div className="text-[12px] font-[600] text-[#FF385C] uppercase tracking-wide mb-1">{exp.category}</div>
                          <h3 className="text-[16px] font-[600] text-[#222222] leading-snug mb-0.5">{exp.title}</h3>
                          <p className="text-[13px] text-gray-500 mb-2">{exp.host}</p>
                          <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">{exp.desc}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-3 text-[13px] text-gray-500">
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exp.duration}</span>
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{exp.groupSize}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-0.5 text-[13px]">
                              <Star className="w-3.5 h-3.5 fill-[#222222] text-[#222222]" />
                              <span className="font-[600]">{exp.rating}</span>
                              <span className="text-gray-500">({exp.reviews})</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-[16px] font-[600] text-[#222222]">${exp.price}</span>
                          <span className="text-[13px] text-gray-500"> / person</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating summary bar */}
            {form.selectedExperiences.length > 0 && (
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-40">
                <div className="max-w-[960px] mx-auto px-6 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-[14px]">
                      <span className="font-[600]">{form.selectedExperiences.length} experience{form.selectedExperiences.length > 1 ? "s" : ""}</span>
                      <span className="text-gray-500"> selected</span>
                    </div>
                    <div className="text-[13px] text-gray-500">
                      Est. <span className="font-[600] text-[#222222]">${selectedExpTotal.toLocaleString()}</span> for {teamSizeNum} guests
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                      {form.selectedExperiences.slice(0, 4).map((id) => {
                        const exp = briefExperiences.find((e) => e.id === id);
                        return exp ? (
                          <div key={id} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                            <img src={exp.image} alt="" className="w-full h-full object-cover" />
                          </div>
                        ) : null;
                      })}
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-6 py-3 rounded-xl font-[500] text-[14px] flex items-center gap-2 transition-colors"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── STEP 3: Review ─── */}
        {step === 3 && (
          <div className="space-y-8">
            {/* Brief Summary Card */}
            <div className="bg-[#F7F7F7] rounded-3xl p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Destination", value: form.location || "Not set", icon: MapPin },
                  { label: "Dates", value: formatDateRange() || "Not set", sub: getNights() > 0 ? `${getNights()} nights` : undefined, icon: Calendar },
                  { label: "Team size", value: form.teamSize || "Not set", icon: Users },
                  { label: "Budget", value: form.budget || "Not set", icon: DollarSign },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF385C]/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#FF385C]" />
                    </div>
                    <div className="text-[12px] font-[500] text-gray-500 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="text-[15px] font-[600] text-[#222222]">{item.value}</div>
                    {item.sub && <div className="text-[12px] text-gray-500 mt-0.5">{item.sub}</div>}
                  </div>
                ))}
              </div>

              {/* Vibes */}
              {form.vibes.length > 0 && (
                <div>
                  <div className="text-[12px] font-[500] text-gray-500 uppercase tracking-wide mb-2">Retreat vibe</div>
                  <div className="flex gap-2 flex-wrap">
                    {form.vibes.map((v) => {
                      const vibe = vibes.find((vi) => vi.id === v);
                      return (
                        <span key={v} className="bg-white rounded-full px-4 py-2 text-[14px] font-[500] text-[#222222] border border-gray-200">
                          {vibe?.emoji} {vibe?.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Experiences */}
              {form.selectedExperiences.length > 0 && (
                <div>
                  <div className="text-[12px] font-[500] text-gray-500 uppercase tracking-wide mb-3">
                    Bundled briefExperiences ({form.selectedExperiences.length})
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {form.selectedExperiences.map((id) => {
                      const exp = briefExperiences.find((e) => e.id === id);
                      return exp ? (
                        <div key={id} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-200">
                          <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[14px] font-[500] text-[#222222] truncate">{exp.title}</div>
                            <div className="text-[12px] text-gray-500">{exp.duration} · {exp.host}</div>
                          </div>
                          <div className="text-[14px] font-[600] text-[#222222] shrink-0">${exp.price}/pp</div>
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="mt-4 flex justify-between items-center bg-white rounded-xl p-4 border border-gray-200">
                    <span className="text-[14px] text-gray-500">Estimated briefExperiences total</span>
                    <span className="text-[18px] font-[700] text-[#222222]">${selectedExpTotal.toLocaleString()}<span className="text-[13px] font-[400] text-gray-500"> for {teamSizeNum} guests</span></span>
                  </div>
                </div>
              )}
            </div>

            {/* AI CTA */}
            <div className="bg-gradient-to-br from-[#222222] to-[#1a1a1a] rounded-3xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-[600] mb-2">Ready to generate your retreat</h3>
                  <p className="text-[15px] text-white/70 leading-relaxed mb-6 max-w-[500px]">
                    Our AI will create 2–3 complete retreat packages with hand-picked properties, your selected activities woven into a daily itinerary, and transparent all-in pricing.
                  </p>
                  <button
                    className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-3.5 rounded-xl font-[500] text-[16px] flex items-center gap-2.5 transition-all hover:shadow-lg hover:shadow-[#FF385C]/25 disabled:opacity-60"
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Generating your options...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        <span>Generate retreat options</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      {step !== 3 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
          {/* Hide when experience summary bar is showing */}
          {!(step === 2 && form.selectedExperiences.length > 0) && (
            <div className="max-w-[960px] mx-auto px-6 py-4 flex items-center justify-between">
              <button
                className={`text-[15px] font-[600] underline text-[#222222] hover:text-black ${step === 0 ? "invisible" : ""}`}
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </button>
              <button
                className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-3.5 rounded-xl font-[500] text-[16px] flex items-center gap-2 transition-colors"
                onClick={() => { setShowCalendar(false); setStep((s) => s + 1); }}
              >
                {step === 2
                  ? (form.selectedExperiences.length > 0 ? "Review brief" : "Skip & review")
                  : "Continue"
                }
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


// ═══ RetreatResults Page ═══

const RESULTS_IMG = {
  sonoma: "https://images.unsplash.com/photo-1775344215207-ed90e37ece72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25vbWElMjB2aW5leWFyZCUyMGhvdXNlJTIwbHV4dXJ5JTIwZXN0YXRlfGVufDF8fHx8MTc3NTg1NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  denver: "https://images.unsplash.com/photo-1613800076171-57ce704ab08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW52ZXIlMjBtb3VudGFpbiUyMGxvZGdlJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzU4NTU1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  austin: "https://images.unsplash.com/photo-1593195150513-c8aab7e7bcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0aW4lMjB0ZXhhcyUyMG1vZGVybiUyMGxvZnR8ZW58MXx8fHwxNzc1ODUzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  sf: "https://images.unsplash.com/photo-1611272267060-82338bad4112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBmcmFuY2lzY28lMjBtb2Rlcm4lMjBob21lJTIwdmljdG9yaWFufGVufDF8fHx8MTc3NTg1NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  nyc: "https://images.unsplash.com/photo-1650470005778-8c17e72e38e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9va2x5biUyMG55YyUyMHdhcmVob3VzZSUyMGxvZnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU4NTU1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  tahoe: "https://images.unsplash.com/photo-1608801320394-0dcbb482c849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwdGFob2UlMjBjYWJpbiUyMHNub3clMjBsdXh1cnl8ZW58MXx8fHwxNzc1ODU1NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  sedona: "https://images.unsplash.com/photo-1611796995582-513419ba0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRvbmElMjBkZXNlcnQlMjBsdXh1cnklMjB2aWxsYXxlbnwxfHx8fDE3NzU4NTU1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  malibu: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWxpYnUlMjBiZWFjaCUyMGhvdXNlJTIwbW9kZXJufGVufDF8fHx8MTc3NTg1NTU0NHww&ixlib=rb-4.1.0&q=80&w=1080",
  wine: "https://images.unsplash.com/photo-1641830845418-2cba6d2ab45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMHRlYW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  hiking: "https://images.unsplash.com/photo-1770563181870-eca60076ffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaGlraW5nJTIwZ3JvdXAlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzc1ODUzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  yoga: "https://images.unsplash.com/photo-1767452985665-fb3a6c9f4009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcmV0cmVhdCUyMHdlbGxuZXNzJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzU4NTM1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  cooking: "https://images.unsplash.com/photo-1683624328172-88fb24625ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29va2luZyUyMGNsYXNzfGVufDF8fHx8MTc3NTg1NDU2NXww&ixlib=rb-4.1.0&q=80&w=1080",
  pool: "https://images.unsplash.com/photo-1667842288007-ea49b67ce9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBvb2wlMjBjYWJhbmF8ZW58MXx8fHwxNzc1ODU1NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
};


const allOptions = [
  // Sonoma
  { id: "sonoma-1", tag: "Best Match", tagColor: "bg-[#FF385C]", title: "Sonoma Wine Country Retreat", subtitle: "4 nights · Strategic offsite with vineyard experiences", city: "Sonoma", image: RESULTS_IMG.sonoma, property: "Vineyard Estate in Sonoma", rating: 4.97, reviews: 124, guests: 25, beds: 8, amenities: ["WiFi 100+ Mbps", "Meeting room", "Pool", "Chef's kitchen"],
    experiences: [{ name: "Private Wine Tasting & Vineyard Tour", image: RESULTS_IMG.wine, time: "Day 2, 2 PM", price: "$1,200" }, { name: "Sunrise Yoga & Wellness", image: RESULTS_IMG.yoga, time: "Day 3, 7 AM", price: "$600" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in & welcome drinks", "5 PM — Team mixer & tour", "7 PM — Catered farm dinner"] }, { day: "Day 2", items: ["9 AM — Strategy session", "12 PM — Lunch", "2 PM — Vineyard wine tasting", "7 PM — Group dinner"] }, { day: "Day 3", items: ["7 AM — Sunrise yoga", "9 AM — Breakouts", "2 PM — Free time / hiking", "6 PM — Farewell BBQ"] }, { day: "Day 4", items: ["9 AM — Wrap-up", "11 AM — Check-out"] }],
    pricing: { property: "$7,400", experiences: "$1,800", cleaning: "$350", service: "$956", total: "$10,506", perPerson: "$420" } },
  { id: "sonoma-2", tag: "Premium", tagColor: "bg-purple-600", title: "Sonoma Hilltop Estate", subtitle: "4 nights · Luxury vineyard compound with private chef", city: "Sonoma", image: RESULTS_IMG.pool, property: "Hilltop Estate & Vineyards", rating: 5.0, reviews: 42, guests: 20, beds: 7, amenities: ["WiFi 200+ Mbps", "Private chef", "Infinity pool", "Wine cellar"],
    experiences: [{ name: "Farm-to-Table Cooking Class", image: RESULTS_IMG.cooking, time: "Day 2, 4 PM", price: "$950" }, { name: "Private Wine Blending Workshop", image: RESULTS_IMG.wine, time: "Day 3, 2 PM", price: "$1,400" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — VIP arrival & champagne", "5 PM — Property tour", "7 PM — Chef's tasting menu"] }, { day: "Day 2", items: ["9 AM — Workshop", "12 PM — Lunch", "4 PM — Cooking class", "8 PM — Wine dinner"] }, { day: "Day 3", items: ["8 AM — Yoga", "10 AM — Sessions", "2 PM — Wine blending", "7 PM — Celebration dinner"] }, { day: "Day 4", items: ["9 AM — Brunch & reflections", "12 PM — Check-out"] }],
    pricing: { property: "$12,000", experiences: "$2,350", cleaning: "$500", service: "$1,485", total: "$16,335", perPerson: "$817" } },
  // San Francisco
  { id: "sf-1", tag: "Best Match", tagColor: "bg-[#FF385C]", title: "Bay Area Innovation Hub", subtitle: "3 nights · Urban offsite with startup energy", city: "San Francisco", image: RESULTS_IMG.sf, property: "Pacific Heights Modern Home", rating: 4.94, reviews: 98, guests: 20, beds: 6, amenities: ["WiFi 500+ Mbps", "Home office", "Rooftop deck", "City views"],
    experiences: [{ name: "Bay Sailing Team Challenge", image: RESULTS_IMG.hiking, time: "Day 2, 1 PM", price: "$1,600" }, { name: "Chinatown Food Tour", image: RESULTS_IMG.cooking, time: "Day 2, 6 PM", price: "$800" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in", "4 PM — Kickoff & planning", "7 PM — Dinner in North Beach"] }, { day: "Day 2", items: ["9 AM — Strategy sessions", "1 PM — Bay sailing", "6 PM — Chinatown food tour"] }, { day: "Day 3", items: ["8 AM — Yoga in the park", "10 AM — Demo day", "1 PM — Check-out lunch"] }],
    pricing: { property: "$4,500", experiences: "$2,400", cleaning: "$250", service: "$715", total: "$7,865", perPerson: "$393" } },
  { id: "sf-2", tag: "Best Value", tagColor: "bg-amber-600", title: "Mission District Creative Loft", subtitle: "3 nights · Art-forward workspace in the heart of SF", city: "San Francisco", image: RESULTS_IMG.sf, property: "Mission Loft Complex", rating: 4.89, reviews: 156, guests: 16, beds: 5, amenities: ["WiFi 300+ Mbps", "Whiteboard walls", "Espresso bar", "Bike storage"],
    experiences: [{ name: "Street Art Walking Tour", image: RESULTS_IMG.hiking, time: "Day 2, 2 PM", price: "$600" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Check-in", "3 PM — Team kickoff", "7 PM — Taqueria crawl"] }, { day: "Day 2", items: ["9 AM — Hackathon", "2 PM — Street art tour", "7 PM — Group dinner"] }, { day: "Day 3", items: ["9 AM — Demos & wrap-up", "12 PM — Check-out"] }],
    pricing: { property: "$2,700", experiences: "$600", cleaning: "$150", service: "$345", total: "$3,795", perPerson: "$237" } },
  // New York
  { id: "nyc-1", tag: "Best Match", tagColor: "bg-[#FF385C]", title: "Brooklyn Warehouse Retreat", subtitle: "3 nights · Creative energy meets NYC culture", city: "New York", image: RESULTS_IMG.nyc, property: "Williamsburg Industrial Loft", rating: 4.91, reviews: 178, guests: 22, beds: 7, amenities: ["WiFi 500+ Mbps", "Presentation space", "Rooftop", "Full kitchen"],
    experiences: [{ name: "Brooklyn Food & Culture Walk", image: RESULTS_IMG.cooking, time: "Day 1, 5 PM", price: "$1,100" }, { name: "Jazz Club Team Night", image: RESULTS_IMG.wine, time: "Day 2, 8 PM", price: "$900" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Check-in", "3 PM — Kickoff", "5 PM — Brooklyn food walk"] }, { day: "Day 2", items: ["9 AM — Strategy day", "12 PM — Lunch", "2 PM — Breakouts", "8 PM — Jazz club"] }, { day: "Day 3", items: ["9 AM — Action planning", "12 PM — Farewell brunch", "2 PM — Check-out"] }],
    pricing: { property: "$5,400", experiences: "$2,000", cleaning: "$300", service: "$770", total: "$8,470", perPerson: "$385" } },
  { id: "nyc-2", tag: "Premium", tagColor: "bg-purple-600", title: "Manhattan Penthouse Experience", subtitle: "3 nights · Skyline views and world-class dining", city: "New York", image: RESULTS_IMG.nyc, property: "Tribeca Penthouse", rating: 4.99, reviews: 34, guests: 18, beds: 6, amenities: ["WiFi 1 Gbps", "Private terrace", "Concierge", "City panorama"],
    experiences: [{ name: "Private Chef's Table Dinner", image: RESULTS_IMG.cooking, time: "Day 2, 7 PM", price: "$2,400" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in", "4 PM — Rooftop welcome", "7 PM — Dinner at Eleven Madison Park"] }, { day: "Day 2", items: ["9 AM — Workshop", "12 PM — Catered lunch", "7 PM — Chef's table"] }, { day: "Day 3", items: ["9 AM — Wrap-up", "11 AM — Check-out"] }],
    pricing: { property: "$9,000", experiences: "$2,400", cleaning: "$400", service: "$1,180", total: "$12,980", perPerson: "$721" } },
  // Austin
  { id: "austin-1", tag: "Best Value", tagColor: "bg-amber-600", title: "Austin Creative Loft Retreat", subtitle: "3 nights · Hackathon-style in the live music capital", city: "Austin", image: RESULTS_IMG.austin, property: "East Austin Loft Complex", rating: 4.92, reviews: 87, guests: 25, beds: 6, amenities: ["WiFi 200+ Mbps", "Whiteboard walls", "Rooftop", "Nearby restaurants"],
    experiences: [{ name: "BBQ Cookoff Team Challenge", image: RESULTS_IMG.cooking, time: "Day 2, 5 PM", price: "$950" }, { name: "Live Music Pub Crawl", image: RESULTS_IMG.wine, time: "Day 2, 8 PM", price: "$600" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Check-in", "3 PM — Kickoff", "7 PM — Welcome dinner on 6th St"] }, { day: "Day 2", items: ["9 AM — Hackathon", "12 PM — Tacos", "5 PM — BBQ Cookoff", "8 PM — Live music"] }, { day: "Day 3", items: ["9 AM — Demo day", "12 PM — Wrap-up lunch", "2 PM — Check-out"] }],
    pricing: { property: "$2,940", experiences: "$1,550", cleaning: "$200", service: "$469", total: "$5,159", perPerson: "$206" } },
  { id: "austin-2", tag: "Nature Pick", tagColor: "bg-emerald-600", title: "Hill Country Ranch Retreat", subtitle: "4 nights · Texas nature meets team bonding", city: "Austin", image: RESULTS_IMG.austin, property: "Hill Country Estate", rating: 4.95, reviews: 63, guests: 20, beds: 8, amenities: ["WiFi 100 Mbps", "Fire pit", "Pool", "BBQ pavilion"],
    experiences: [{ name: "Sunrise Horseback Ride", image: RESULTS_IMG.hiking, time: "Day 2, 7 AM", price: "$1,200" }, { name: "Stargazing Night", image: RESULTS_IMG.yoga, time: "Day 3, 9 PM", price: "$400" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in", "5 PM — Ranch tour", "7 PM — BBQ dinner"] }, { day: "Day 2", items: ["7 AM — Horseback ride", "10 AM — Strategy", "2 PM — Pool time", "7 PM — Dinner"] }, { day: "Day 3", items: ["9 AM — Workshops", "12 PM — Lunch", "3 PM — Free time", "9 PM — Stargazing"] }, { day: "Day 4", items: ["9 AM — Wrap-up", "11 AM — Check-out"] }],
    pricing: { property: "$6,400", experiences: "$1,600", cleaning: "$300", service: "$830", total: "$9,130", perPerson: "$457" } },
  // Lake Tahoe
  { id: "tahoe-1", tag: "Best Match", tagColor: "bg-[#FF385C]", title: "Tahoe Lakefront Lodge", subtitle: "4 nights · Mountain serenity meets team focus", city: "Lake Tahoe", image: RESULTS_IMG.tahoe, property: "North Shore Lodge", rating: 4.96, reviews: 156, guests: 22, beds: 9, amenities: ["WiFi 100+ Mbps", "Hot tub", "Ski storage", "Lake access"],
    experiences: [{ name: "Guided Snowshoe Trek", image: RESULTS_IMG.hiking, time: "Day 2, 9 AM", price: "$800" }, { name: "Lake Kayak Adventure", image: RESULTS_IMG.hiking, time: "Day 3, 10 AM", price: "$900" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in", "5 PM — Lakeside mixer", "7 PM — Lodge dinner"] }, { day: "Day 2", items: ["9 AM — Snowshoe trek", "1 PM — Lunch", "3 PM — Strategy", "7 PM — Hot tub & dinner"] }, { day: "Day 3", items: ["8 AM — Yoga", "10 AM — Kayaking", "2 PM — Breakouts", "7 PM — Farewell bonfire"] }, { day: "Day 4", items: ["9 AM — Reflections", "11 AM — Check-out"] }],
    pricing: { property: "$7,200", experiences: "$1,700", cleaning: "$350", service: "$925", total: "$10,175", perPerson: "$463" } },
  { id: "tahoe-2", tag: "Premium", tagColor: "bg-purple-600", title: "Tahoe Ski Chalet Estate", subtitle: "4 nights · Slope-side luxury for winter retreats", city: "Lake Tahoe", image: RESULTS_IMG.tahoe, property: "Squaw Valley Chalet", rating: 4.98, reviews: 78, guests: 18, beds: 7, amenities: ["WiFi 200+ Mbps", "Sauna", "Fireplace lounge", "Ski-in/ski-out"],
    experiences: [{ name: "Private Ski Lesson & Race", image: RESULTS_IMG.hiking, time: "Day 2, 10 AM", price: "$2,000" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Check-in", "4 PM — Welcome", "7 PM — Fondue dinner"] }, { day: "Day 2", items: ["10 AM — Ski day", "4 PM — Après-ski", "7 PM — Chef's dinner"] }, { day: "Day 3", items: ["9 AM — Workshop", "12 PM — Lunch", "2 PM — Free time", "7 PM — Celebration dinner"] }, { day: "Day 4", items: ["9 AM — Wrap-up", "11 AM — Check-out"] }],
    pricing: { property: "$11,200", experiences: "$2,000", cleaning: "$450", service: "$1,365", total: "$15,015", perPerson: "$834" } },
  // Sedona
  { id: "sedona-1", tag: "Best Match", tagColor: "bg-[#FF385C]", title: "Sedona Red Rock Retreat", subtitle: "4 nights · Desert wellness and deep strategy", city: "Sedona", image: RESULTS_IMG.sedona, property: "Red Rock Desert Estate", rating: 4.94, reviews: 45, guests: 20, beds: 8, amenities: ["WiFi 100+ Mbps", "Meditation garden", "Heated pool", "Fire pit"],
    experiences: [{ name: "Guided Red Rock Hike & Meditation", image: RESULTS_IMG.hiking, time: "Day 2, 7 AM", price: "$900" }, { name: "Desert Stargazing Experience", image: RESULTS_IMG.yoga, time: "Day 3, 8 PM", price: "$500" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in & welcome", "5 PM — Sunset vortex walk", "7 PM — Desert dinner"] }, { day: "Day 2", items: ["7 AM — Red Rock hike", "11 AM — Strategy sessions", "2 PM — Pool time", "7 PM — Group dinner"] }, { day: "Day 3", items: ["8 AM — Yoga", "10 AM — Breakouts", "3 PM — Spa time", "8 PM — Stargazing"] }, { day: "Day 4", items: ["9 AM — Closing circle", "11 AM — Check-out"] }],
    pricing: { property: "$8,000", experiences: "$1,400", cleaning: "$350", service: "$975", total: "$10,725", perPerson: "$536" } },
  { id: "sedona-2", tag: "Wellness Pick", tagColor: "bg-teal-600", title: "Sedona Spa & Wellness Estate", subtitle: "5 nights · Transformative wellness immersion", city: "Sedona", image: RESULTS_IMG.sedona, property: "Canyon View Wellness Center", rating: 4.99, reviews: 28, guests: 16, beds: 6, amenities: ["WiFi 100 Mbps", "Private spa", "Yoga studio", "Organic garden"],
    experiences: [{ name: "Sound Healing Ceremony", image: RESULTS_IMG.yoga, time: "Day 2, 6 PM", price: "$800" }, { name: "Desert Foraging & Farm Dinner", image: RESULTS_IMG.cooking, time: "Day 4, 4 PM", price: "$1,100" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Arrival", "4 PM — Opening ceremony", "7 PM — Farm dinner"] }, { day: "Day 2", items: ["7 AM — Yoga", "9 AM — Workshop", "3 PM — Spa", "6 PM — Sound healing"] }, { day: "Day 3", items: ["8 AM — Meditation", "10 AM — Strategy", "2 PM — Hike", "7 PM — Dinner"] }, { day: "Day 4", items: ["8 AM — Breathwork", "10 AM — Sessions", "4 PM — Foraging dinner"] }, { day: "Day 5", items: ["8 AM — Closing yoga", "10 AM — Check-out"] }],
    pricing: { property: "$12,500", experiences: "$1,900", cleaning: "$400", service: "$1,480", total: "$16,280", perPerson: "$1,018" } },
  // Malibu
  { id: "malibu-1", tag: "Best Match", tagColor: "bg-[#FF385C]", title: "Malibu Oceanfront Retreat", subtitle: "4 nights · Pacific views and creative energy", city: "Malibu", image: RESULTS_IMG.malibu, property: "Carbon Beach Estate", rating: 4.96, reviews: 91, guests: 22, beds: 9, amenities: ["WiFi 200+ Mbps", "Private beach", "Deck", "Outdoor kitchen"],
    experiences: [{ name: "Surf Lesson & Beach Games", image: RESULTS_IMG.hiking, time: "Day 2, 10 AM", price: "$1,300" }, { name: "Sunset Cocktail Masterclass", image: RESULTS_IMG.wine, time: "Day 3, 5 PM", price: "$700" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in", "5 PM — Beach welcome", "7 PM — Seafood dinner on deck"] }, { day: "Day 2", items: ["8 AM — Beach yoga", "10 AM — Surf lesson", "1 PM — Lunch", "3 PM — Strategy", "7 PM — Dinner in Malibu"] }, { day: "Day 3", items: ["9 AM — Workshops", "12 PM — Lunch", "2 PM — Free time", "5 PM — Cocktail class", "7 PM — BBQ"] }, { day: "Day 4", items: ["9 AM — Wrap-up", "11 AM — Check-out"] }],
    pricing: { property: "$9,800", experiences: "$2,000", cleaning: "$400", service: "$1,220", total: "$13,420", perPerson: "$610" } },
  { id: "malibu-2", tag: "Premium", tagColor: "bg-purple-600", title: "Malibu Canyon Villa", subtitle: "4 nights · Secluded luxury in the Santa Monica mountains", city: "Malibu", image: RESULTS_IMG.malibu, property: "Canyon Hideaway Estate", rating: 4.98, reviews: 36, guests: 16, beds: 6, amenities: ["WiFi 150+ Mbps", "Infinity pool", "Home theater", "Wine cave"],
    experiences: [{ name: "Private Horseback Beach Ride", image: RESULTS_IMG.hiking, time: "Day 2, 3 PM", price: "$1,800" }],
    itinerary: [{ day: "Day 1", items: ["3 PM — Check-in", "5 PM — Pool welcome", "7 PM — Private chef dinner"] }, { day: "Day 2", items: ["9 AM — Sessions", "12 PM — Lunch", "3 PM — Horseback ride", "8 PM — Movie night"] }, { day: "Day 3", items: ["8 AM — Yoga", "10 AM — Breakouts", "3 PM — Wine tasting", "7 PM — Canyon BBQ"] }, { day: "Day 4", items: ["9 AM — Wrap-up", "11 AM — Check-out"] }],
    pricing: { property: "$14,400", experiences: "$1,800", cleaning: "$500", service: "$1,670", total: "$18,370", perPerson: "$1,148" } },
  // Denver
  { id: "denver-1", tag: "Adventure Pick", tagColor: "bg-emerald-600", title: "Boulder Mountain Lodge", subtitle: "4 nights · Altitude and attitude for adventurous teams", city: "Denver", image: RESULTS_IMG.denver, property: "Boulder Canyon Lodge", rating: 4.98, reviews: 203, guests: 25, beds: 10, amenities: ["WiFi 75 Mbps", "Conference room", "Hot tub", "Fire pit"],
    experiences: [{ name: "Guided Mountain Trek & Picnic", image: RESULTS_IMG.hiking, time: "Day 2, 9 AM", price: "$800" }, { name: "Sunrise Yoga & Meditation", image: RESULTS_IMG.yoga, time: "Day 3, 6:30 AM", price: "$600" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Check-in", "4 PM — Team hike (easy trail)", "7 PM — Welcome dinner by fire pit"] }, { day: "Day 2", items: ["9 AM — Mountain trek + picnic", "3 PM — Strategy workshop", "7 PM — Dinner in Boulder"] }, { day: "Day 3", items: ["6:30 AM — Yoga", "9 AM — Planning sessions", "1 PM — Free afternoon", "6 PM — BBQ & stargazing"] }, { day: "Day 4", items: ["9 AM — Closing session", "11 AM — Check-out"] }],
    pricing: { property: "$8,800", experiences: "$1,400", cleaning: "$400", service: "$1,060", total: "$11,660", perPerson: "$466" } },
  { id: "denver-2", tag: "Best Value", tagColor: "bg-amber-600", title: "Denver Downtown Retreat", subtitle: "3 nights · Urban mountain town vibes", city: "Denver", image: RESULTS_IMG.denver, property: "RiNo District Warehouse", rating: 4.90, reviews: 112, guests: 20, beds: 6, amenities: ["WiFi 300+ Mbps", "Open floor plan", "Rooftop", "Bike access"],
    experiences: [{ name: "Brewery & Distillery Tour", image: RESULTS_IMG.wine, time: "Day 2, 3 PM", price: "$700" }],
    itinerary: [{ day: "Day 1", items: ["2 PM — Check-in", "3 PM — Kickoff", "7 PM — RiNo dinner"] }, { day: "Day 2", items: ["9 AM — Strategy", "12 PM — Lunch", "3 PM — Brewery tour", "7 PM — Group dinner"] }, { day: "Day 3", items: ["9 AM — Action planning", "12 PM — Check-out lunch"] }],
    pricing: { property: "$3,600", experiences: "$700", cleaning: "$200", service: "$450", total: "$4,950", perPerson: "$248" } },
];

function RetreatResults({ onNavigate, pageData }) {
  const [searchParams] = [new URLSearchParams(), () => {}];
  const [expanded, setExpanded] = useState(null);
  const [saved, setSaved] = useState([]);

  const city = searchParams.get("city") || "";
  const teamSize = searchParams.get("teamSize") || "25";
  const dates = searchParams.get("dates") || "Jun 10 – Jun 14, 2026";
  const nights = searchParams.get("nights") || "4";
  const vibesParam = searchParams.get("vibes") || "";

  // Filter options by city, fallback to all if no city
  const options = city
    ? allOptions.filter((o) => o.city.toLowerCase() === city.toLowerCase())
    : allOptions.slice(0, 3);

  // Auto-expand first
  const firstId = options[0]?.id || null;
  const effectiveExpanded = expanded === null && firstId ? firstId : expanded;

  const toggleSaved = (id) => {
    setSaved((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="max-w-[1080px] mx-auto px-6 py-10">
        {/* Back link */}
        <button onClick={() => onNavigate("brief")} className="flex items-center gap-2 text-[14px] text-gray-500 hover:text-[#222222] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to retreat brief
        </button>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF385C]/10 to-[#BD1E59]/10 rounded-full px-4 py-1.5 mb-3">
              <Sparkles className="w-4 h-4 text-[#FF385C]" />
              <span className="text-[13px] font-[600] text-[#FF385C]">AI-Generated Retreat Options</span>
            </div>
            <h1 className="text-[30px] font-[700] text-[#222222] mb-2">
              {city ? `${options.length} options in ${city}` : "Your retreat options"}
            </h1>
            <div className="flex items-center gap-3 text-[14px] text-gray-500 flex-wrap">
              {city && <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{city}</span>}
              <span>·</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{teamSize} people</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{dates || `${nights} nights`}</span>
              {vibesParam && <>
                <span>·</span>
                <span>{vibesParam.split(",").filter(Boolean).join(", ")}</span>
              </>}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {options.map((opt) => {
            const isOpen = effectiveExpanded === opt.id;
            const isSaved = saved.includes(opt.id);
            return (
              <div key={opt.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-[340px] shrink-0 relative">
                    <img src={opt.image} alt={opt.title} className="w-full h-60 md:h-full object-cover" />
                    <div className={`absolute top-4 left-4 ${opt.tagColor} text-white rounded-full px-3.5 py-1.5 text-[12px] font-[600] shadow-md`}>
                      {opt.tag}
                    </div>
                    <button onClick={() => toggleSaved(opt.id)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors">
                      <Heart className={`w-5 h-5 ${isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-600"}`} />
                    </button>
                  </div>
                  <div className="flex-1 p-6 md:p-7">
                    <h2 className="text-[22px] font-[600] text-[#222222] mb-1">{opt.title}</h2>
                    <p className="text-[14px] text-gray-500 mb-3">{opt.subtitle}</p>

                    <div className="flex items-center gap-4 text-[13px] text-gray-600 mb-4">
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-[#222222] text-[#222222]" /><span className="font-[600]">{opt.rating}</span> ({opt.reviews})</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />Up to {opt.guests}</span>
                      <span>{opt.beds} bedrooms</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {opt.amenities.map((a) => (
                        <span key={a} className="bg-[#F7F7F7] rounded-full px-3 py-1.5 text-[12px] font-[500] text-gray-600">{a}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-[24px] font-[700] text-[#222222]">{opt.pricing.total}</span>
                        <span className="text-[14px] text-gray-500 ml-2">all-in · {opt.pricing.perPerson}/person</span>
                      </div>
                      <div className="flex gap-3">
                        <button
                          className="text-[14px] font-[500] underline flex items-center gap-1 text-gray-600 hover:text-[#222222]"
                          onClick={() => setExpanded(isOpen ? null : opt.id)}
                        >
                          {isOpen ? "Hide" : "Details"} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        <button
                          className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-6 py-2.5 rounded-xl text-[14px] font-[600] transition-colors"
                          onClick={() => onNavigate("/property/1")}
                        >
                          Book this retreat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-gray-100 px-6 md:px-7 py-7 bg-[#FAFAFA]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-[16px] font-[600] text-[#222222] mb-4 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#FF385C]" /> Included Experiences
                        </h3>
                        <div className="space-y-3">
                          {opt.experiences.map((exp) => (
                            <div key={exp.name} className="flex gap-4 items-center bg-white rounded-xl p-3 border border-gray-100">
                              <img src={exp.image} alt={exp.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                              <div className="flex-1">
                                <p className="text-[14px] font-[500] text-[#222222]">{exp.name}</p>
                                <p className="text-[13px] text-gray-500">{exp.time}</p>
                              </div>
                              <span className="text-[14px] font-[600] text-[#222222] shrink-0">{exp.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[16px] font-[600] text-[#222222] mb-4 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#FF385C]" /> Daily Itinerary
                        </h3>
                        <div className="space-y-4">
                          {opt.itinerary.map((day) => (
                            <div key={day.day}>
                              <p className="text-[13px] font-[600] text-[#FF385C] mb-1.5">{day.day}</p>
                              <div className="space-y-1.5 ml-3 border-l-2 border-gray-200 pl-4">
                                {day.items.map((item, i) => (
                                  <p key={i} className="text-[13px] text-gray-600">{item}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-[16px] font-[600] text-[#222222] mb-4 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#FF385C]" /> All-in pricing breakdown
                      </h3>
                      <div className="max-w-md bg-white rounded-xl p-5 border border-gray-100 space-y-3 text-[14px]">
                        <div className="flex justify-between"><span className="text-gray-600">Property ({nights} nights)</span><span className="font-[500]">{opt.pricing.property}</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">Experiences</span><span className="font-[500]">{opt.pricing.experiences}</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">Cleaning fee</span><span className="font-[500]">{opt.pricing.cleaning}</span></div>
                        <div className="flex justify-between"><span className="text-gray-600">Airbnb service fee</span><span className="font-[500]">{opt.pricing.service}</span></div>
                        <div className="flex justify-between pt-3 border-t border-gray-200 text-[16px] font-[700]"><span>Total</span><span>{opt.pricing.total}</span></div>
                        <div className="flex justify-between text-[13px] text-gray-500"><span>Per person ({teamSize} guests)</span><span className="font-[600] text-[#222222]">{opt.pricing.perPerson}</span></div>
                      </div>
                      <button className="mt-4 text-[13px] text-[#FF385C] font-[500] underline hover:text-[#E31C5F]">Export PDF for finance approval</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// ═══ PropertyDetail Page ═══

const DETAIL_IMG = {
  main: "https://images.unsplash.com/photo-1730151506069-8f55a6b6c5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25vbWElMjB2aW5leWFyZCUyMGVzdGF0ZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzU4NTM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  interior: "https://images.unsplash.com/photo-1757262798677-ab4af4455a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tJTIwc3BhY2lvdXN8ZW58MXx8fHwxNzc1ODUzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  pool: "https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHN3aW1taW5nJTIwcG9vbCUyMGFlcmlhbHxlbnwxfHx8fDE3NzU4NTM1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  cowork: "https://images.unsplash.com/photo-1516866131298-d6af09fa97b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMG1vZGVybiUyMGJyaWdodHxlbnwxfHx8fDE3NzU4NTM1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ranch: "https://images.unsplash.com/photo-1657587851068-8767c76fea45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByYW5jaCUyMG1lZXRpbmclMjBzcGFjZXxlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  wine: "https://images.unsplash.com/photo-1641830845418-2cba6d2ab45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdGFzdGluZyUyMHRlYW0lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzU4NTM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  yoga: "https://images.unsplash.com/photo-1767452985665-fb3a6c9f4009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcmV0cmVhdCUyMHdlbGxuZXNzJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzU4NTM1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  cooking: "https://images.unsplash.com/photo-1762994576926-b8268190a2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBncm91cCUyMGFjdGl2aXR5fGVufDF8fHx8MTc3NTg1MzU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
  sonoma: "https://images.unsplash.com/photo-1775344215207-ed90e37ece72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25vbWElMjB2aW5leWFyZCUyMGhvdXNlJTIwbHV4dXJ5JTIwZXN0YXRlfGVufDF8fHx8MTc3NTg1NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  sf: "https://images.unsplash.com/photo-1611272267060-82338bad4112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW4lMjBmcmFuY2lzY28lMjBtb2Rlcm4lMjBob21lJTIwdmljdG9yaWFufGVufDF8fHx8MTc3NTg1NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  nyc: "https://images.unsplash.com/photo-1650470005778-8c17e72e38e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9va2x5biUyMG55YyUyMHdhcmVob3VzZSUyMGxvZnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU4NTU1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  tahoe: "https://images.unsplash.com/photo-1608801320394-0dcbb482c849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwdGFob2UlMjBjYWJpbiUyMHNub3clMjBsdXh1cnl8ZW58MXx8fHwxNzc1ODU1NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  sedona: "https://images.unsplash.com/photo-1611796995582-513419ba0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRvbmElMjBkZXNlcnQlMjBsdXh1cnklMjB2aWxsYXxlbnwxfHx8fDE3NzU4NTU1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  malibu: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWxpYnUlMjBiZWFjaCUyMGhvdXNlJTIwbW9kZXJufGVufDF8fHx8MTc3NTg1NTU0NHww&ixlib=rb-4.1.0&q=80&w=1080",
  denver: "https://images.unsplash.com/photo-1613800076171-57ce704ab08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW52ZXIlMjBtb3VudGFpbiUyMGxvZGdlJTIwcmV0cmVhdHxlbnwxfHx8fDE3NzU4NTU1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  austin: "https://images.unsplash.com/photo-1593195150513-c8aab7e7bcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0aW4lMjB0ZXhhcyUyMG1vZGVybiUyMGxvZnR8ZW58MXx8fHwxNzc1ODUzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
};

const propertyDb = {
  // Sonoma
  "sonoma-1": { name: "Vineyard Estate in Sonoma", location: "Sonoma, California", host: "Maria", rating: 4.97, reviews: 124, guests: 25, beds: 10, bedrooms: 8, baths: 6, pricePerNight: 1850, nights: 4, mainImage: DETAIL_IMG.sonoma, images: [DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.cowork, DETAIL_IMG.ranch], description: "Nestled among 15 acres of rolling vineyards, this stunning estate is the perfect base for your team's next offsite. The property features a dedicated meeting room with AV equipment, a chef's kitchen ideal for catering or cooking classes, a heated pool, and multiple outdoor gathering spaces.", amenities: ["WiFi 120 Mbps", "Meeting room with projector", "Pool", "Chef's kitchen"], features: [{ icon: Wifi, text: "WiFi 120 Mbps — verified" }, { icon: Monitor, text: "Dedicated meeting room with projector" }, { icon: ChefHat, text: "Commercial kitchen (catering-ready)" }, { icon: Users, text: "Flexible check-in for groups" }, { icon: Car, text: "10-car parking" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Private Wine Tasting & Vineyard Tour", image: DETAIL_IMG.wine, price: 1200, duration: "3 hrs", rating: 4.98 }, { id: "e2", name: "Sunrise Yoga & Wellness Workshop", image: DETAIL_IMG.yoga, price: 600, duration: "2 hrs", rating: 4.93 }, { id: "e3", name: "Farm-to-Table Cooking Class", image: DETAIL_IMG.cooking, price: 950, duration: "3 hrs", rating: 4.97 }] },
  "sonoma-2": { name: "Hilltop Estate & Vineyards", location: "Sonoma, California", host: "Elena", rating: 5.0, reviews: 42, guests: 20, beds: 8, bedrooms: 7, baths: 5, pricePerNight: 3000, nights: 4, mainImage: DETAIL_IMG.pool, images: [DETAIL_IMG.sonoma, DETAIL_IMG.interior, DETAIL_IMG.cowork, DETAIL_IMG.ranch], description: "Perched atop a private hill overlooking Sonoma Valley, this luxury compound features an infinity pool, wine cellar, and private chef service. Perfect for intimate, high-end team retreats that demand the best.", amenities: ["WiFi 200+ Mbps", "Private chef", "Infinity pool", "Wine cellar"], features: [{ icon: Wifi, text: "WiFi 200+ Mbps — verified" }, { icon: ChefHat, text: "Private chef included" }, { icon: Monitor, text: "Indoor/outdoor meeting spaces" }, { icon: Users, text: "Concierge service" }, { icon: Car, text: "8-car parking" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Farm-to-Table Cooking Class", image: DETAIL_IMG.cooking, price: 950, duration: "3 hrs", rating: 4.97 }, { id: "e2", name: "Private Wine Blending Workshop", image: DETAIL_IMG.wine, price: 1400, duration: "3 hrs", rating: 4.99 }] },
  // SF
  "sf-1": { name: "Pacific Heights Modern Home", location: "San Francisco, California", host: "David", rating: 4.94, reviews: 98, guests: 20, beds: 8, bedrooms: 6, baths: 4, pricePerNight: 1500, nights: 3, mainImage: DETAIL_IMG.sf, images: [DETAIL_IMG.interior, DETAIL_IMG.cowork, DETAIL_IMG.pool, DETAIL_IMG.ranch], description: "Stunning Victorian-meets-modern home in Pacific Heights with panoramic city views. Rooftop deck, dedicated home office with high-speed WiFi, and proximity to the best of SF.", amenities: ["WiFi 500+ Mbps", "Home office", "Rooftop deck", "City views"], features: [{ icon: Wifi, text: "WiFi 500+ Mbps — verified" }, { icon: Monitor, text: "Home office with dual monitors" }, { icon: Users, text: "Rooftop deck for gatherings" }, { icon: Car, text: "Garage parking for 4" }, { icon: ChefHat, text: "Full gourmet kitchen" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Bay Sailing Team Challenge", image: DETAIL_IMG.wine, price: 1600, duration: "4 hrs", rating: 4.95 }, { id: "e2", name: "Chinatown Food Tour", image: DETAIL_IMG.cooking, price: 800, duration: "3 hrs", rating: 4.92 }] },
  "sf-2": { name: "Mission Loft Complex", location: "San Francisco, California", host: "Carlos", rating: 4.89, reviews: 156, guests: 16, beds: 6, bedrooms: 5, baths: 3, pricePerNight: 900, nights: 3, mainImage: DETAIL_IMG.sf, images: [DETAIL_IMG.cowork, DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.ranch], description: "Art-filled loft in the vibrant Mission District with whiteboard walls, espresso bar, and creative energy to fuel your team's best thinking.", amenities: ["WiFi 300+ Mbps", "Whiteboard walls", "Espresso bar", "Bike storage"], features: [{ icon: Wifi, text: "WiFi 300+ Mbps — verified" }, { icon: Monitor, text: "Whiteboard walls throughout" }, { icon: ChefHat, text: "Built-in espresso station" }, { icon: Car, text: "Bike storage & rentals" }, { icon: Users, text: "Open plan creative space" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Street Art Walking Tour", image: DETAIL_IMG.wine, price: 600, duration: "3 hrs", rating: 4.90 }] },
  // NYC
  "nyc-1": { name: "Williamsburg Industrial Loft", location: "Brooklyn, New York", host: "Rachel", rating: 4.91, reviews: 178, guests: 22, beds: 9, bedrooms: 7, baths: 5, pricePerNight: 1800, nights: 3, mainImage: DETAIL_IMG.nyc, images: [DETAIL_IMG.interior, DETAIL_IMG.cowork, DETAIL_IMG.pool, DETAIL_IMG.ranch], description: "Converted warehouse in Williamsburg with soaring ceilings, exposed brick, and a massive rooftop with Manhattan views. Perfect for teams that want creative NYC energy.", amenities: ["WiFi 500+ Mbps", "Presentation space", "Rooftop", "Full kitchen"], features: [{ icon: Wifi, text: "WiFi 500+ Mbps — verified" }, { icon: Monitor, text: "Presentation space with AV" }, { icon: Users, text: "Rooftop with skyline views" }, { icon: ChefHat, text: "Commercial-grade kitchen" }, { icon: Car, text: "Street parking + subway access" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Brooklyn Food & Culture Walk", image: DETAIL_IMG.cooking, price: 1100, duration: "3 hrs", rating: 4.94 }, { id: "e2", name: "Jazz Club Team Night", image: DETAIL_IMG.wine, price: 900, duration: "3 hrs", rating: 4.96 }] },
  "nyc-2": { name: "Tribeca Penthouse", location: "Manhattan, New York", host: "James", rating: 4.99, reviews: 34, guests: 18, beds: 7, bedrooms: 6, baths: 5, pricePerNight: 3000, nights: 3, mainImage: DETAIL_IMG.nyc, images: [DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.cowork, DETAIL_IMG.ranch], description: "Breathtaking Tribeca penthouse with floor-to-ceiling windows, private terrace, and concierge service. Manhattan's finest address for your most important offsites.", amenities: ["WiFi 1 Gbps", "Private terrace", "Concierge", "City panorama"], features: [{ icon: Wifi, text: "WiFi 1 Gbps — verified" }, { icon: Users, text: "Private terrace for 30+" }, { icon: Monitor, text: "Board room setup available" }, { icon: ChefHat, text: "Catering partnerships" }, { icon: Car, text: "Doorman building + valet" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Private Chef's Table Dinner", image: DETAIL_IMG.cooking, price: 2400, duration: "4 hrs", rating: 4.99 }] },
  // Austin
  "austin-1": { name: "East Austin Loft Complex", location: "Austin, Texas", host: "Jake", rating: 4.92, reviews: 87, guests: 25, beds: 8, bedrooms: 6, baths: 4, pricePerNight: 980, nights: 3, mainImage: DETAIL_IMG.austin, images: [DETAIL_IMG.interior, DETAIL_IMG.cowork, DETAIL_IMG.ranch, DETAIL_IMG.pool], description: "Vibrant loft compound in East Austin's creative district. Walk to live music, BBQ joints, and craft breweries. Whiteboard walls and rooftop make it ideal for hackathons.", amenities: ["WiFi 200+ Mbps", "Whiteboard walls", "Rooftop", "Nearby restaurants"], features: [{ icon: Wifi, text: "WiFi 200+ Mbps — verified" }, { icon: Monitor, text: "Whiteboard walls + projector" }, { icon: Users, text: "Rooftop for 30+" }, { icon: Car, text: "Free parking for 8" }, { icon: ChefHat, text: "Full kitchen + catering-ready" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "BBQ Cookoff Team Challenge", image: DETAIL_IMG.cooking, price: 950, duration: "3 hrs", rating: 4.93 }, { id: "e2", name: "Live Music Pub Crawl", image: DETAIL_IMG.wine, price: 600, duration: "3 hrs", rating: 4.91 }] },
  "austin-2": { name: "Hill Country Estate", location: "Dripping Springs, Texas", host: "Sarah", rating: 4.95, reviews: 63, guests: 20, beds: 10, bedrooms: 8, baths: 6, pricePerNight: 1600, nights: 4, mainImage: DETAIL_IMG.austin, images: [DETAIL_IMG.ranch, DETAIL_IMG.pool, DETAIL_IMG.interior, DETAIL_IMG.cowork], description: "Sprawling ranch estate in the Texas Hill Country with swimming pool, fire pit, and BBQ pavilion. Quiet enough for deep work, exciting enough for team bonding.", amenities: ["WiFi 100 Mbps", "Fire pit", "Pool", "BBQ pavilion"], features: [{ icon: Wifi, text: "WiFi 100 Mbps — verified" }, { icon: Users, text: "Fire pit seating for 25" }, { icon: ChefHat, text: "BBQ pavilion + outdoor kitchen" }, { icon: Car, text: "15-car parking" }, { icon: Monitor, text: "Indoor meeting space" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Sunrise Horseback Ride", image: DETAIL_IMG.wine, price: 1200, duration: "3 hrs", rating: 4.94 }, { id: "e2", name: "Stargazing Night", image: DETAIL_IMG.yoga, price: 400, duration: "2 hrs", rating: 4.97 }] },
  // Tahoe
  "tahoe-1": { name: "North Shore Lodge", location: "Lake Tahoe, California", host: "Chris", rating: 4.96, reviews: 156, guests: 22, beds: 11, bedrooms: 9, baths: 6, pricePerNight: 1800, nights: 4, mainImage: DETAIL_IMG.tahoe, images: [DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.cowork, DETAIL_IMG.ranch], description: "Classic Tahoe lodge on the North Shore with lake access, hot tub, and a massive stone fireplace. The perfect mountain backdrop for focused strategy and team bonding.", amenities: ["WiFi 100+ Mbps", "Hot tub", "Ski storage", "Lake access"], features: [{ icon: Wifi, text: "WiFi 100+ Mbps — verified" }, { icon: Users, text: "Great room with fireplace" }, { icon: Car, text: "Covered parking + ski storage" }, { icon: ChefHat, text: "Catering-ready kitchen" }, { icon: Monitor, text: "Conference table for 20" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Guided Snowshoe Trek", image: DETAIL_IMG.wine, price: 800, duration: "4 hrs", rating: 4.95 }, { id: "e2", name: "Lake Kayak Adventure", image: DETAIL_IMG.yoga, price: 900, duration: "3 hrs", rating: 4.92 }] },
  "tahoe-2": { name: "Squaw Valley Chalet", location: "Olympic Valley, California", host: "Anna", rating: 4.98, reviews: 78, guests: 18, beds: 8, bedrooms: 7, baths: 5, pricePerNight: 2800, nights: 4, mainImage: DETAIL_IMG.tahoe, images: [DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.ranch, DETAIL_IMG.cowork], description: "Ski-in/ski-out chalet at the base of Palisades Tahoe with sauna, fireplace lounge, and stunning mountain views. The ultimate winter retreat destination.", amenities: ["WiFi 200+ Mbps", "Sauna", "Fireplace lounge", "Ski-in/ski-out"], features: [{ icon: Wifi, text: "WiFi 200+ Mbps — verified" }, { icon: Users, text: "Ski-in/ski-out access" }, { icon: ChefHat, text: "Après-ski bar + kitchen" }, { icon: Monitor, text: "Private cinema room" }, { icon: Car, text: "Heated garage" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Private Ski Lesson & Race", image: DETAIL_IMG.wine, price: 2000, duration: "5 hrs", rating: 4.96 }] },
  // Sedona
  "sedona-1": { name: "Red Rock Desert Estate", location: "Sedona, Arizona", host: "Luna", rating: 4.94, reviews: 45, guests: 20, beds: 10, bedrooms: 8, baths: 6, pricePerNight: 2000, nights: 4, mainImage: DETAIL_IMG.sedona, images: [DETAIL_IMG.ranch, DETAIL_IMG.pool, DETAIL_IMG.interior, DETAIL_IMG.cowork], description: "Stunning desert estate with panoramic red rock views, meditation garden, heated pool, and multiple fire pits. A transformative setting for strategy and wellness retreats.", amenities: ["WiFi 100+ Mbps", "Meditation garden", "Heated pool", "Fire pit"], features: [{ icon: Wifi, text: "WiFi 100+ Mbps — verified" }, { icon: Users, text: "Meditation garden" }, { icon: ChefHat, text: "Outdoor kitchen + dining" }, { icon: Car, text: "10-car parking" }, { icon: Monitor, text: "Conference room" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Guided Red Rock Hike & Meditation", image: DETAIL_IMG.wine, price: 900, duration: "4 hrs", rating: 4.95 }, { id: "e2", name: "Desert Stargazing Experience", image: DETAIL_IMG.yoga, price: 500, duration: "2 hrs", rating: 4.99 }] },
  "sedona-2": { name: "Canyon View Wellness Center", location: "Sedona, Arizona", host: "Maya", rating: 4.99, reviews: 28, guests: 16, beds: 8, bedrooms: 6, baths: 5, pricePerNight: 2500, nights: 5, mainImage: DETAIL_IMG.sedona, images: [DETAIL_IMG.yoga, DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.ranch], description: "Private wellness compound with yoga studio, spa facilities, and organic garden. Designed for deep rest and reconnection. Includes daily healthy meals.", amenities: ["WiFi 100 Mbps", "Private spa", "Yoga studio", "Organic garden"], features: [{ icon: Wifi, text: "WiFi 100 Mbps — verified" }, { icon: ChefHat, text: "Organic garden + meal service" }, { icon: Users, text: "Yoga studio for 20" }, { icon: Monitor, text: "Sound healing room" }, { icon: Car, text: "8-car parking" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Sound Healing Ceremony", image: DETAIL_IMG.yoga, price: 800, duration: "2 hrs", rating: 4.98 }, { id: "e2", name: "Desert Foraging & Farm Dinner", image: DETAIL_IMG.cooking, price: 1100, duration: "4 hrs", rating: 4.97 }] },
  // Malibu
  "malibu-1": { name: "Carbon Beach Estate", location: "Malibu, California", host: "Victoria", rating: 4.96, reviews: 91, guests: 22, beds: 10, bedrooms: 9, baths: 7, pricePerNight: 2450, nights: 4, mainImage: DETAIL_IMG.malibu, images: [DETAIL_IMG.pool, DETAIL_IMG.interior, DETAIL_IMG.cowork, DETAIL_IMG.ranch], description: "Right on Carbon Beach — Malibu's famous Billionaire's Beach. Private beach access, ocean-view deck, and outdoor kitchen. Wake up to Pacific sunrises with your team.", amenities: ["WiFi 200+ Mbps", "Private beach", "Deck", "Outdoor kitchen"], features: [{ icon: Wifi, text: "WiFi 200+ Mbps — verified" }, { icon: Users, text: "Private beach access" }, { icon: ChefHat, text: "Outdoor kitchen + grill" }, { icon: Car, text: "6-car garage" }, { icon: Monitor, text: "Indoor/outdoor meeting space" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Surf Lesson & Beach Games", image: DETAIL_IMG.wine, price: 1300, duration: "4 hrs", rating: 4.93 }, { id: "e2", name: "Sunset Cocktail Masterclass", image: DETAIL_IMG.cooking, price: 700, duration: "2 hrs", rating: 4.96 }] },
  "malibu-2": { name: "Canyon Hideaway Estate", location: "Malibu, California", host: "Richard", rating: 4.98, reviews: 36, guests: 16, beds: 7, bedrooms: 6, baths: 5, pricePerNight: 3600, nights: 4, mainImage: DETAIL_IMG.malibu, images: [DETAIL_IMG.pool, DETAIL_IMG.interior, DETAIL_IMG.ranch, DETAIL_IMG.cowork], description: "Secluded mountain estate in the Santa Monica mountains with infinity pool, home theater, and wine cave. Total privacy surrounded by nature.", amenities: ["WiFi 150+ Mbps", "Infinity pool", "Home theater", "Wine cave"], features: [{ icon: Wifi, text: "WiFi 150+ Mbps — verified" }, { icon: Users, text: "Infinity pool with canyon views" }, { icon: Monitor, text: "Home theater + screening room" }, { icon: ChefHat, text: "Wine cave + tasting room" }, { icon: Car, text: "Gated entry + 8-car parking" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Private Horseback Beach Ride", image: DETAIL_IMG.wine, price: 1800, duration: "3 hrs", rating: 4.95 }] },
  // Denver
  "denver-1": { name: "Boulder Canyon Lodge", location: "Boulder, Colorado", host: "Mike", rating: 4.98, reviews: 203, guests: 25, beds: 12, bedrooms: 10, baths: 7, pricePerNight: 2200, nights: 4, mainImage: DETAIL_IMG.denver, images: [DETAIL_IMG.ranch, DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.cowork], description: "Mountain lodge at the mouth of Boulder Canyon with hot tub, fire pit, and conference room. Steps from world-class hiking trails and downtown Boulder.", amenities: ["WiFi 75 Mbps", "Conference room", "Hot tub", "Fire pit"], features: [{ icon: Wifi, text: "WiFi 75 Mbps — verified" }, { icon: Monitor, text: "Conference room for 25" }, { icon: Users, text: "Hot tub + fire pit area" }, { icon: Car, text: "12-car parking" }, { icon: ChefHat, text: "Full kitchen + outdoor grill" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Guided Mountain Trek & Picnic", image: DETAIL_IMG.wine, price: 800, duration: "5 hrs", rating: 4.95 }, { id: "e2", name: "Sunrise Yoga & Meditation", image: DETAIL_IMG.yoga, price: 600, duration: "2 hrs", rating: 4.93 }] },
  "denver-2": { name: "RiNo District Warehouse", location: "Denver, Colorado", host: "Kelly", rating: 4.90, reviews: 112, guests: 20, beds: 8, bedrooms: 6, baths: 4, pricePerNight: 1200, nights: 3, mainImage: DETAIL_IMG.denver, images: [DETAIL_IMG.cowork, DETAIL_IMG.interior, DETAIL_IMG.pool, DETAIL_IMG.ranch], description: "Converted warehouse in Denver's creative RiNo district. Open floor plan, rooftop with mountain views, and walking distance to breweries and restaurants.", amenities: ["WiFi 300+ Mbps", "Open floor plan", "Rooftop", "Bike access"], features: [{ icon: Wifi, text: "WiFi 300+ Mbps — verified" }, { icon: Monitor, text: "Open plan creative workspace" }, { icon: Users, text: "Rooftop with mountain views" }, { icon: Car, text: "Bike storage + rentals nearby" }, { icon: ChefHat, text: "Full kitchen" }, { icon: Shield, text: "AirCover for Retreats included" }], experiences: [{ id: "e1", name: "Brewery & Distillery Tour", image: DETAIL_IMG.wine, price: 700, duration: "3 hrs", rating: 4.89 }] },
};

// Fallback for old property IDs from home page
const homeFallback = propertyDb["sonoma-1"];

function PropertyDetail({ onNavigate, pageData }) {
  const id = pageData?.id || "sonoma-1";
  const property = (id && propertyDb[id]) || homeFallback;

  const [liked, setLiked] = useState(false);
  const [cart, setCart] = useState(property.experiences.length > 0 ? [property.experiences[0].id] : []);

  const toggleCart = (eid) => {
    setCart((c) => (c.includes(eid) ? c.filter((x) => x !== eid) : [...c, eid]));
  };

  const expTotal = property.experiences.filter((e) => cart.includes(e.id)).reduce((s, e) => s + e.price, 0);
  const propTotal = property.pricePerNight * property.nights;
  const cleaning = Math.round(propTotal * 0.05);
  const service = Math.round((propTotal + expTotal) * 0.1);
  const total = propTotal + expTotal + cleaning + service;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1120px] mx-auto px-6 py-6">
        {/* Title */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-[26px] font-[600]">{property.name}</h1>
            <div className="flex items-center gap-2 text-[14px] mt-1">
              <Star className="w-4 h-4 fill-black" />
              <span className="font-[500]">{property.rating}</span>
              <span className="text-gray-500">· {property.reviews} reviews</span>
              <span className="text-gray-500">·</span>
              <span className="flex items-center gap-1 text-gray-500"><MapPin className="w-3.5 h-3.5" />{property.location}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1.5 text-[14px] font-[500] underline">
              <Share className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-1.5 text-[14px] font-[500] underline" onClick={() => setLiked(!liked)}>
              <Heart className={`w-4 h-4 ${liked ? "fill-[#FF385C] text-[#FF385C]" : ""}`} /> Save
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[400px] mb-8">
          <div className="col-span-2 row-span-2">
            <img src={property.mainImage} alt="Main" className="w-full h-full object-cover" />
          </div>
          {property.images.map((img, i) => (
            <img key={i} src={img} alt={`Photo ${i + 2}`} className="w-full h-full object-cover" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Host & Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div>
                <h2 className="text-[22px] font-[500]">Entire estate hosted by {property.host}</h2>
                <p className="text-[14px] text-gray-500">{property.guests} guests · {property.bedrooms} bedrooms · {property.beds} beds · {property.baths} baths</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#FF385C]/10 text-[#FF385C] rounded-full px-3 py-1 text-[13px] font-[500] flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Retreat Ready
                </div>
              </div>
            </div>

            {/* Retreat Features */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-[500]">Retreat-Ready features</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.features.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <f.icon className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-[14px]">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="pb-6 border-b border-gray-200">
              <p className="text-[15px] text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Add Experiences */}
            <div>
              <h3 className="text-[18px] font-[500] mb-1">Bundle Experiences</h3>
              <p className="text-[14px] text-gray-500 mb-4">Add team activities within 30 min of the property — all in one checkout</p>
              <div className="space-y-3">
                {property.experiences.map((exp) => {
                  const inCart = cart.includes(exp.id);
                  return (
                    <div key={exp.id} className={`flex items-center gap-4 p-3 rounded-xl border transition-all ${inCart ? "border-[#FF385C] bg-[#FF385C]/5" : "border-gray-200"}`}>
                      <img src={exp.image} alt={exp.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] font-[500]">{exp.name}</p>
                        <div className="flex items-center gap-3 text-[13px] text-gray-500 mt-0.5">
                          <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-black text-black" />{exp.rating}</span>
                          <span>{exp.duration}</span>
                        </div>
                        <p className="text-[14px] font-[500] mt-1">${exp.price.toLocaleString()} / group</p>
                      </div>
                      <button
                        className={`px-4 py-2 rounded-lg text-[13px] font-[500] transition-colors ${
                          inCart
                            ? "bg-[#FF385C] text-white"
                            : "border border-gray-300 hover:border-black"
                        }`}
                        onClick={() => toggleCart(exp.id)}
                      >
                        {inCart ? <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Added</span> : <span className="flex items-center gap-1"><Plus className="w-3.5 h-3.5" /> Add</span>}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div>
            <div className="sticky top-24 bg-white border border-gray-200 rounded-xl shadow-lg p-6 space-y-4">
              <div className="flex items-baseline gap-1">
                <span className="text-[22px] font-[600]">${property.pricePerNight.toLocaleString()}</span>
                <span className="text-[14px] text-gray-500">/ night</span>
              </div>

              <div className="border border-gray-300 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="p-3 border-r border-gray-300">
                    <div className="text-[10px] font-[600] uppercase">Check-in</div>
                    <div className="text-[14px]">Jun 10, 2026</div>
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] font-[600] uppercase">Checkout</div>
                    <div className="text-[14px]">Jun {10 + property.nights}, 2026</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-[600] uppercase">Guests</div>
                  <div className="text-[14px]">{property.guests} guests</div>
                </div>
              </div>

              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between"><span className="text-gray-600 underline">${property.pricePerNight.toLocaleString()} × {property.nights} nights</span><span>${propTotal.toLocaleString()}</span></div>
                {cart.length > 0 && (
                  <div className="flex justify-between"><span className="text-gray-600 underline">{cart.length} Experience{cart.length > 1 ? "s" : ""}</span><span>${expTotal.toLocaleString()}</span></div>
                )}
                <div className="flex justify-between"><span className="text-gray-600 underline">Cleaning fee</span><span>${cleaning.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-gray-600 underline">Service fee</span><span>${service.toLocaleString()}</span></div>
                <div className="flex justify-between pt-3 border-t border-gray-200 font-[600]">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="text-[13px] text-gray-500 text-right">${Math.round(total / property.guests).toLocaleString()} per person</div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-[#BD1E59] to-[#FF385C] text-white py-3 rounded-lg font-[500] text-[16px] hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                onClick={() => onNavigate("/guest-hub")}
              >
                <ShoppingCart className="w-4 h-4" />
                Reserve retreat
              </button>

              <p className="text-[12px] text-gray-500 text-center">You won't be charged yet</p>

              <button className="w-full text-[13px] text-[#FF385C] font-[500] underline text-center">
                Export pricing PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ═══ GuestHub Page ═══
  Check, Copy, Users, Utensils, BedDouble, Clock, UserPlus, ExternalLink,
  Calendar, ChevronRight, Send, MessageSquare, Bell, Search, MoreHorizontal,
  Download, Plane, Car, Share2, MapPin, Sparkles, Star, Shield, ChevronDown,
  Mail, Phone, ArrowRight


const avatarGradients = [
  "from-rose-400 to-pink-500", "from-violet-400 to-purple-500", "from-blue-400 to-indigo-500",
  "from-emerald-400 to-green-500", "from-amber-400 to-orange-500", "from-cyan-400 to-teal-500",
  "from-fuchsia-400 to-pink-500", "from-indigo-400 to-violet-500", "from-orange-400 to-red-500",
  "from-teal-400 to-cyan-500", "from-purple-400 to-indigo-500", "from-lime-400 to-emerald-500",
];

const rooms = [
  { name: "Master Suite", type: "King bed", floor: "Main House", capacity: 2, guests: ["Sarah Chen", "Marcus Johnson"], amenities: ["En-suite", "Balcony", "Mini fridge"] },
  { name: "Vineyard Room", type: "2 Queen beds", floor: "Main House", capacity: 2, guests: ["Aisha Patel", "James Wilson"], amenities: ["En-suite", "Vineyard view"] },
  { name: "Garden Room", type: "2 Twin beds", floor: "East Wing", capacity: 2, guests: ["David Kim", "Priya Sharma"], amenities: ["Shared bath", "Garden access"] },
  { name: "Hillside Room", type: "Queen + Daybed", floor: "East Wing", capacity: 2, guests: ["Ryan O'Brien", "Mei Lin"], amenities: ["En-suite", "Hill view"] },
  { name: "Pool Suite", type: "King bed", floor: "Pool House", capacity: 1, guests: ["Alex Turner"], amenities: ["Private bath", "Pool access", "Desk"] },
  { name: "Loft Room", type: "2 Twin beds", floor: "East Wing", capacity: 2, guests: [], amenities: ["Shared bath", "Skylight"] },
  { name: "Cottage", type: "Queen bed", floor: "Guest Cottage", capacity: 2, guests: [], amenities: ["Private bath", "Kitchenette"] },
  { name: "Studio", type: "Sofa bed", floor: "Pool House", capacity: 1, guests: [], amenities: ["Shared bath", "Desk"] },
];

const itinerary = [
  { day: "Day 1 — Tue, June 10", events: [
    { time: "1:00 – 5:00 PM", title: "Arrivals & Check-in", type: "logistics" },
    { time: "5:30 PM", title: "Property Tour & Welcome Activity", type: "activity" },
    { time: "7:00 PM", title: "Farm-to-Table Welcome Dinner", type: "meal" },
  ]},
  { day: "Day 2 — Wed, June 11", events: [
    { time: "8:00 AM", title: "Breakfast", type: "meal" },
    { time: "9:30 AM – 12:30 PM", title: "Strategy Session: H2 Planning", type: "work" },
    { time: "12:30 PM", title: "Lunch", type: "meal" },
    { time: "2:00 – 5:00 PM", title: "Private Wine Tasting Experience", type: "experience" },
    { time: "7:00 PM", title: "Italian Cooking Class & Dinner", type: "experience" },
  ]},
  { day: "Day 3 — Thu, June 12", events: [
    { time: "7:00 AM", title: "Sunrise Yoga", type: "experience" },
    { time: "8:30 AM", title: "Breakfast", type: "meal" },
    { time: "10:00 AM – 1:00 PM", title: "Breakout Workshops", type: "work" },
    { time: "1:00 PM", title: "Pool Lunch", type: "meal" },
    { time: "2:30 – 5:30 PM", title: "Free Time", type: "free" },
    { time: "7:00 PM", title: "Team Celebration Dinner & Fire Pit", type: "meal" },
  ]},
  { day: "Day 4 — Fri, June 13", events: [
    { time: "8:00 AM", title: "Breakfast", type: "meal" },
    { time: "9:30 – 11:30 AM", title: "Retro & Action Items", type: "work" },
    { time: "12:00 PM", title: "Check-out & Departures", type: "logistics" },
  ]},
];

const typeStyles = {
  logistics: { color: "bg-gray-500", label: "Logistics" },
  activity: { color: "bg-blue-500", label: "Activity" },
  meal: { color: "bg-amber-500", label: "Meal" },
  work: { color: "bg-violet-500", label: "Work" },
  experience: { color: "bg-[#FF385C]", label: "Experience" },
  free: { color: "bg-emerald-500", label: "Free Time" },
};

function GuestHub({ onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [guestFilter, setGuestFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const confirmed = guests.filter((g) => g.status === "confirmed").length;
  const pending = guests.filter((g) => g.status === "pending").length;
  const declined = guests.filter((g) => g.status === "declined").length;
  const total = guests.length;

  const filteredGuests = guests.filter((g) => {
    if (guestFilter !== "all" && g.status !== guestFilter) return false;
    if (searchQuery && !g.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const copyLink = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const occupiedRooms = rooms.filter((r) => r.guests.length > 0).length;
  const confirmedPct = Math.round((confirmed / total) * 100);

  const tabs = [
    { id: "overview", label: "Overview", icon: Sparkles },
    { id: "guests", label: "Guests", icon: Users, count: total },
    { id: "rooms", label: "Rooms", icon: BedDouble, count: rooms.length },
    { id: "dietary", label: "Dietary", icon: Utensils },
    { id: "itinerary", label: "Itinerary", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Property header card */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm">
              <img src={PROPERTY_IMG} alt="Property" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h1 className="text-[22px] font-[700] text-[#222222] truncate">Sonoma Vineyard Retreat</h1>
                <div className="flex items-center gap-1 bg-[#FF385C]/10 text-[#FF385C] text-[11px] font-[600] rounded-full px-2.5 py-0.5 shrink-0">
                  <Shield className="w-3 h-3" /> Retreat Ready
                </div>
              </div>
              <div className="flex items-center gap-4 text-[14px] text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Sonoma, CA</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Jun 10–13, 2026</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {confirmed} confirmed</span>
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-[#222222] text-[#222222]" /> 4.97</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <button onClick={copyLink} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-[500] border transition-all ${copied ? "bg-[#008A05] text-white border-[#008A05]" : "border-[#222222] text-[#222222] hover:bg-[#F7F7F7]"}`}>
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                {copied ? "Copied!" : "Share link"}
              </button>
              <button className="flex items-center gap-2 bg-[#FF385C] text-white rounded-xl px-4 py-2.5 text-[13px] font-[600] hover:bg-[#E31C5F] transition-colors">
                <Send className="w-4 h-4" /> Send reminders
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[80px] z-30 bg-white border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="flex gap-1 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-[14px] font-[500] border-b-2 transition-all ${
                  activeTab === tab.id
                    ? "border-[#222222] text-[#222222]"
                    : "border-transparent text-gray-500 hover:text-[#222222] hover:border-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.count !== undefined && (
                  <span className={`text-[11px] font-[600] rounded-full px-1.5 py-0.5 min-w-[20px] text-center ${
                    activeTab === tab.id ? "bg-[#222222] text-white" : "bg-gray-200 text-gray-600"
                  }`}>{tab.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-8">

        {/* ─── OVERVIEW ─── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Going", value: confirmed, total, color: "#008A05", pct: confirmedPct },
                { label: "Pending", value: pending, total, color: "#C07600", pct: Math.round((pending / total) * 100) },
                { label: "Rooms filled", value: `${occupiedRooms}`, total: rooms.length, color: "#6366F1", pct: Math.round((occupiedRooms / rooms.length) * 100) },
                { label: "Days away", value: "61", total: undefined, color: "#FF385C", pct: undefined },
              ].map((s) => (
                <div key={s.label} className="bg-[#F7F7F7] rounded-2xl p-5">
                  <div className="text-[13px] text-gray-500 mb-1">{s.label}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[28px] font-[700] text-[#222222]">{s.value}</span>
                    {s.total !== undefined && <span className="text-[15px] text-gray-400">/ {s.total}</span>}
                  </div>
                  {s.pct !== undefined && (
                    <div className="w-full h-1.5 bg-white rounded-full mt-3 overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Invite link card */}
            <div className="bg-[#F7F7F7] rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[16px] font-[600] text-[#222222] mb-1">Guest invite link</h3>
                  <p className="text-[14px] text-gray-500">Share with your team — they can RSVP, set dietary needs & room preferences</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#008A05]/10 text-[#008A05] rounded-full px-3 py-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008A05]" />
                  <span className="text-[12px] font-[500]">Active</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-600 font-mono truncate">
                  airbnb.com/retreats/invite/abc123-sonoma-jun2026
                </div>
                <button onClick={copyLink} className={`shrink-0 px-5 py-3 rounded-xl font-[500] text-[14px] transition-all ${copied ? "bg-[#008A05] text-white" : "bg-[#222222] text-white hover:bg-black"}`}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Activity feed */}
              <div className="lg:col-span-3">
                <h3 className="text-[16px] font-[600] text-[#222222] mb-4">Recent activity</h3>
                <div className="space-y-0">
                  {[
                    { avatar: "ML", name: "Mei Lin", action: "confirmed and selected Pescatarian", time: "2h ago", idx: 10 },
                    { avatar: "AT", name: "Alex Turner", action: "confirmed and requested Pool Suite", time: "4h ago", idx: 11 },
                    { avatar: "RO", name: "Ryan O'Brien", action: "updated arrival to 5:00 PM", time: "Yesterday", idx: 9 },
                    { avatar: "TB", name: "Tom Baker", action: "declined — schedule conflict", time: "Yesterday", idx: 7 },
                    { avatar: "DK", name: "David Kim", action: "confirmed and noted Vegan diet", time: "2 days ago", idx: 5 },
                    { avatar: "PS", name: "Priya Sharma", action: "confirmed RSVP", time: "3 days ago", idx: 6 },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-3 py-3.5 border-b border-gray-100 last:border-0">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarGradients[a.idx % avatarGradients.length]} flex items-center justify-center text-[11px] font-[600] text-white shrink-0`}>{a.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] text-[#222222]"><span className="font-[500]">{a.name}</span> {a.action}</p>
                        <p className="text-[12px] text-gray-400 mt-0.5">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="lg:col-span-2">
                <h3 className="text-[16px] font-[600] text-[#222222] mb-4">Quick actions</h3>
                <div className="space-y-2">
                  {[
                    { icon: Bell, label: "Nudge pending guests", sub: `${pending} haven't responded yet` },
                    { icon: UserPlus, label: "Invite more people", sub: "Add additional team members" },
                    { icon: Download, label: "Export guest list", sub: "Download as CSV" },
                    { icon: MessageSquare, label: "Message everyone", sub: "Send group announcement" },
                  ].map((a) => (
                    <button key={a.label} className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-[#F7F7F7] transition-all text-left group">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F7F7] group-hover:bg-white flex items-center justify-center transition-colors">
                        <a.icon className="w-5 h-5 text-[#222222]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14px] font-[500] text-[#222222]">{a.label}</div>
                        <div className="text-[12px] text-gray-500">{a.sub}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                    </button>
                  ))}
                </div>

                {/* RSVP donut */}
                <div className="mt-6 bg-[#F7F7F7] rounded-2xl p-5">
                  <h4 className="text-[14px] font-[600] text-[#222222] mb-4">RSVP breakdown</h4>
                  <div className="flex items-center gap-5">
                    <div className="relative w-20 h-20 shrink-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#008A05" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${confirmedPct * 2.51} 251`} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[18px] font-[700] text-[#222222]">{confirmedPct}%</span>
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      {[
                        { label: "Going", count: confirmed, color: "bg-[#008A05]" },
                        { label: "Pending", count: pending, color: "bg-[#C07600]" },
                        { label: "Can't go", count: declined, color: "bg-gray-400" },
                      ].map((s) => (
                        <div key={s.label} className="flex items-center justify-between text-[13px]">
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                            <span className="text-gray-600">{s.label}</span>
                          </div>
                          <span className="font-[600] text-[#222222]">{s.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── GUESTS ─── */}
        {activeTab === "guests" && (
          <div>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex-1 min-w-[220px] relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search by name..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-[14px] focus:border-[#222222] focus:ring-0 outline-none transition-colors" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div className="flex bg-[#F7F7F7] rounded-xl p-1 gap-0.5">
                {(["all", "confirmed", "pending", "declined"]).map((f) => {
                  const count = f === "all" ? total : f === "confirmed" ? confirmed : f === "pending" ? pending : declined;
                  return (
                    <button key={f} onClick={() => setGuestFilter(f)} className={`px-3.5 py-2 rounded-lg text-[13px] font-[500] capitalize transition-all ${guestFilter === f ? "bg-white text-[#222222] shadow-sm" : "text-gray-500 hover:text-[#222222]"}`}>
                      {f === "all" ? "All" : statusConfig[f].label} <span className="text-gray-400 ml-0.5">{count}</span>
                    </button>
                  );
                })}
              </div>
              <button className="flex items-center gap-2 text-[13px] font-[600] text-[#FF385C] hover:text-[#E31C5F] ml-auto">
                <UserPlus className="w-4 h-4" /> Add guest
              </button>
            </div>

            {/* Guest list */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              {/* Header row */}
              <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1.2fr_1.2fr_40px] gap-4 px-5 py-3 bg-[#F7F7F7] text-[12px] font-[500] text-gray-500 uppercase tracking-wide">
                <span>Guest</span><span>Status</span><span>Dietary</span><span>Room</span><span>Arrival</span><span></span>
              </div>
              <div className="divide-y divide-gray-100">
                {filteredGuests.map((g, i) => {
                  const sc = statusConfig[g.status];
                  return (
                    <div key={g.id} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.2fr_1.2fr_40px] gap-2 md:gap-4 items-center px-5 py-4 hover:bg-[#F7F7F7]/50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-[12px] font-[600] text-white shrink-0`}>
                          {g.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[14px] font-[500] text-[#222222]">{g.name}</span>
                            {g.role === "Organizer" && <span className="text-[10px] font-[600] bg-[#FF385C]/10 text-[#FF385C] rounded px-1.5 py-0.5">ORGANIZER</span>}
                          </div>
                          <span className="text-[12px] text-gray-500">{g.role} · {g.email}</span>
                        </div>
                      </div>
                      <div>
                        <span className={`inline-flex items-center gap-1.5 ${sc.bg} ${sc.text} rounded-full px-2.5 py-1 text-[12px] font-[500]`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                          {sc.label}
                        </span>
                      </div>
                      <div className="text-[13px] text-gray-600">{g.dietary || <span className="text-gray-300">—</span>}</div>
                      <div className="text-[13px] text-gray-600">{g.room || <span className="text-gray-300">Unassigned</span>}</div>
                      <div className="text-[13px] text-gray-600 flex items-center gap-1.5">
                        {g.transport ? (
                          <>
                            {g.transport.includes("Flight") || g.transport.includes("Heli") ? <Plane className="w-3 h-3 text-gray-400" /> : <Car className="w-3 h-3 text-gray-400" />}
                            <span>{g.arrival}</span>
                          </>
                        ) : <span className="text-gray-300">—</span>}
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-gray-200 rounded-lg transition-all justify-self-end">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── ROOMS ─── */}
        {activeTab === "rooms" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[18px] font-[600] text-[#222222]">Room Assignments</h2>
                <p className="text-[14px] text-gray-500">{occupiedRooms} of {rooms.length} rooms assigned · {rooms.length * 2 - occupiedRooms * 2 + occupiedRooms} spots remaining</p>
              </div>
              <button className="flex items-center gap-2 bg-[#222222] text-white rounded-xl px-4 py-2.5 text-[13px] font-[500] hover:bg-black transition-colors">
                <Sparkles className="w-4 h-4" /> Auto-assign
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rooms.map((r) => {
                const filled = r.guests.length > 0;
                return (
                  <div key={r.name} className={`rounded-2xl border-2 p-5 transition-all ${filled ? "border-gray-200 bg-white" : "border-dashed border-gray-300 bg-[#F7F7F7]"}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-[15px] font-[600] text-[#222222]">{r.name}</h4>
                        <p className="text-[13px] text-gray-500">{r.type} · {r.floor}</p>
                      </div>
                      <span className={`text-[11px] font-[600] rounded-full px-2.5 py-1 uppercase tracking-wide ${filled ? "bg-[#222222] text-white" : "bg-gray-200 text-gray-500"}`}>
                        {filled ? `${r.guests.length}/${r.capacity}` : "Open"}
                      </span>
                    </div>
                    {filled ? (
                      <div className="space-y-2 mb-3">
                        {r.guests.map((name) => {
                          const idx = guests.findIndex((g) => g.name === name);
                          const g = guests[idx];
                          return (
                            <div key={name} className="flex items-center gap-2.5 bg-[#F7F7F7] rounded-xl px-3 py-2">
                              <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradients[idx % avatarGradients.length]} flex items-center justify-center text-[10px] font-[600] text-white`}>
                                {g?.avatar}
                              </div>
                              <span className="text-[13px] font-[500] text-[#222222]">{name}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center py-5 mb-3 border border-dashed border-gray-300 rounded-xl text-[13px] text-gray-400">
                        Drag guests here or use auto-assign
                      </div>
                    )}
                    <div className="flex gap-1.5 flex-wrap">
                      {r.amenities.map((a) => (
                        <span key={a} className="text-[11px] text-gray-500 bg-[#F7F7F7] rounded-full px-2.5 py-1">{a}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── DIETARY ─── */}
        {activeTab === "dietary" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2 className="text-[18px] font-[600] text-[#222222] mb-5">Dietary preferences</h2>
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-[2fr_1.5fr] gap-4 px-5 py-3 bg-[#F7F7F7] text-[12px] font-[500] text-gray-500 uppercase tracking-wide">
                  <span>Guest</span><span>Preference</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {guests.filter((g) => g.status === "confirmed").map((g, i) => {
                    const dietaryColor = {
                      "None": "bg-gray-100 text-gray-500",
                      "Vegetarian": "bg-green-100 text-green-700",
                      "Vegan": "bg-emerald-100 text-emerald-700",
                      "Gluten-free": "bg-amber-100 text-amber-700",
                      "Lactose-free": "bg-blue-100 text-blue-700",
                      "Pescatarian": "bg-cyan-100 text-cyan-700",
                    };
                    return (
                      <div key={g.id} className="grid grid-cols-[2fr_1.5fr] gap-4 items-center px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-[10px] font-[600] text-white shrink-0`}>{g.avatar}</div>
                          <span className="text-[14px] font-[500] text-[#222222]">{g.name}</span>
                        </div>
                        <span className={`inline-block text-[13px] font-[500] rounded-full px-3 py-1 w-fit ${dietaryColor[g.dietary] || "bg-gray-100 text-gray-500"}`}>
                          {g.dietary || "Not specified"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#F7F7F7] rounded-2xl p-6">
                <h3 className="text-[16px] font-[600] text-[#222222] mb-4">Summary for host & caterer</h3>
                <div className="space-y-3">
                  {[
                    { diet: "No restrictions", count: guests.filter((g) => g.status === "confirmed" && g.dietary === "None").length, color: "bg-gray-400" },
                    { diet: "Vegetarian", count: 1, color: "bg-green-500" },
                    { diet: "Vegan", count: 1, color: "bg-emerald-500" },
                    { diet: "Gluten-free", count: 1, color: "bg-amber-500" },
                    { diet: "Lactose-free", count: 1, color: "bg-blue-500" },
                    { diet: "Pescatarian", count: 1, color: "bg-cyan-500" },
                  ].map((d) => (
                    <div key={d.diet} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-3 h-3 rounded-full ${d.color}`} />
                        <span className="text-[14px] text-gray-600">{d.diet}</span>
                      </div>
                      <span className="text-[14px] font-[600] text-[#222222]">{d.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-[#FF385C]/20 bg-[#FF385C]/5 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#FF385C]" />
                  <span className="text-[14px] font-[600] text-[#222222]">Auto-synced with host</span>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed">Dietary preferences update automatically in the host's prep brief. No need to coordinate manually.</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── ITINERARY ─── */}
        {activeTab === "itinerary" && (
          <div className="space-y-6">
            {itinerary.map((day) => (
              <div key={day.day}>
                <h3 className="text-[16px] font-[600] text-[#222222] mb-3 sticky top-[140px] bg-white py-2 z-10">{day.day}</h3>
                <div className="space-y-0 ml-4 border-l-2 border-gray-200 pl-6">
                  {day.events.map((e, i) => {
                    const ts = typeStyles[e.type];
                    return (
                      <div key={i} className="relative pb-5 last:pb-0">
                        <div className={`absolute -left-[31px] top-1 w-3 h-3 rounded-full ${ts.color} border-2 border-white`} />
                        <div className="bg-[#F7F7F7] rounded-xl p-4 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[13px] text-gray-500 font-mono">{e.time}</span>
                            <span className={`text-[11px] font-[500] rounded-full px-2 py-0.5 ${
                              e.type === "experience" ? "bg-[#FF385C]/10 text-[#FF385C]" :
                              e.type === "work" ? "bg-violet-100 text-violet-700" :
                              e.type === "meal" ? "bg-amber-100 text-amber-700" :
                              e.type === "free" ? "bg-emerald-100 text-emerald-700" :
                              "bg-gray-100 text-gray-600"
                            }`}>{ts.label}</span>
                          </div>
                          <h4 className="text-[15px] font-[500] text-[#222222]">{e.title}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


// ═══ HostingDashboard Page ═══
  CalendarDays, Home, DollarSign, BarChart3, CheckCircle2, Clock,
  Star, MessageSquare, ChevronRight, Users, Shield, TrendingUp,
  BedDouble, MapPin, Eye, Pencil

const TABS = ["today", "listings", "reservations", "earnings", "insights"];

const listings = [
  {
    id: "1",
    title: "Vineyard Estate in Sonoma",
    location: "Sonoma, California",
    image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YWNhdGlvbiUyMHJlbnRhbCUyMGludGVyaW9yfGVufDF8fHx8MTc3NTg1NDQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "Active",
    retreatReady: true,
    rating: 4.97,
    reviews: 124,
    beds: 8,
    guests: 20,
    pricePerNight: "$1,850",
    nextBooking: "Apr 18–22",
    occupancy: 78,
  },
  {
    id: "2",
    title: "Desert Ranch Estate",
    location: "Sedona, Arizona",
    image: "https://images.unsplash.com/photo-1760473537243-72168ffd273c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByYW5jaCUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc1ODU0NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "Active",
    retreatReady: true,
    rating: 4.94,
    reviews: 45,
    beds: 11,
    guests: 28,
    pricePerNight: "$2,800",
    nextBooking: "Apr 25–29",
    occupancy: 64,
  },
];

const reservations = [
  { id: "r1", guest: "Sarah Chen", company: "Stripe", dates: "Apr 18–22, 2026", guests: 18, property: "Vineyard Estate in Sonoma", total: "$9,250", status: "Confirmed" },
  { id: "r2", guest: "Marcus Johnson", company: "Figma", dates: "Apr 25–29, 2026", guests: 24, property: "Desert Ranch Estate", total: "$14,000", status: "Confirmed" },
  { id: "r3", guest: "Priya Patel", company: "Linear", dates: "May 5–8, 2026", guests: 15, property: "Vineyard Estate in Sonoma", total: "$7,400", status: "Pending" },
];

const tasks = [
  { title: "Prepare welcome package for Stripe retreat", property: "Vineyard Estate", due: "Apr 17", done: false },
  { title: "Review dietary preferences (3 new responses)", property: "Vineyard Estate", due: "Apr 16", done: false },
  { title: "Confirm caterer for Apr 18 dinner", property: "Vineyard Estate", due: "Apr 16", done: false },
  { title: "Update listing photos — pool area renovated", property: "Desert Ranch Estate", due: "Apr 20", done: true },
  { title: "Respond to message from Marcus J.", property: "Desert Ranch Estate", due: "Today", done: false },
];

const monthlyEarnings = [
  { month: "Nov", amount: 8200 },
  { month: "Dec", amount: 11400 },
  { month: "Jan", amount: 6800 },
  { month: "Feb", amount: 9600 },
  { month: "Mar", amount: 14200 },
  { month: "Apr", amount: 12480 },
];

function HostingDashboard({ onNavigate }) {
  const [searchParams, setSearchParams] = [new URLSearchParams(), () => {}];
  const activeTab = searchParams.get("tab") || "today";
  const setTab = (tab) => setSearchParams({ tab });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[28px] font-[600]">Welcome back, Alex</h1>
            <p className="text-[15px] text-gray-500 mt-1">Here's what's happening with your retreats</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-[13px] font-[500] text-green-700">Retreat-Ready Host</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1.5 shadow-sm border border-gray-200 mb-8 overflow-x-auto">
          {TABS.map((tab) => {
            const meta = TAB_META[tab];
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setTab(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-[500] transition-all whitespace-nowrap ${
                  isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <meta.icon className="w-4 h-4" />
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* Today Tab */}
        {activeTab === "today" && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Checking in", value: "0", sub: "today" },
                { label: "Currently hosting", value: "0", sub: "guests" },
                { label: "Checking out", value: "0", sub: "today" },
                { label: "Upcoming", value: "3", sub: "this month" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="text-[13px] text-gray-500">{s.label}</div>
                  <div className="text-[28px] font-[600] mt-1">{s.value}</div>
                  <div className="text-[12px] text-gray-400">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-[16px] font-[600]">Your to-do list</h2>
                <span className="text-[13px] text-gray-500">{tasks.filter((t) => !t.done).length} remaining</span>
              </div>
              <div className="divide-y divide-gray-100">
                {tasks.map((task, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50">
                    <button className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${task.done ? "border-green-500 bg-green-500" : "border-gray-300"}`}>
                      {task.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className={`text-[14px] ${task.done ? "line-through text-gray-400" : ""}`}>{task.title}</div>
                      <div className="text-[12px] text-gray-400">{task.property}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span className={`text-[12px] ${task.due === "Today" ? "text-[#FF385C] font-[500]" : "text-gray-400"}`}>{task.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-[600]">Messages</h2>
                <span className="bg-[#FF385C] text-white text-[11px] font-[600] rounded-full px-2 py-0.5">2 new</span>
              </div>
              {[
                { name: "Sarah Chen", msg: "Hi! Quick question about the AV setup in the meeting room...", time: "2h ago", company: "Stripe" },
                { name: "Marcus Johnson", msg: "Can we arrange early check-in for 6 team members arriving the night before?", time: "5h ago", company: "Figma" },
              ].map((m) => (
                <div key={m.name} className="flex items-start gap-3 py-3 border-t border-gray-100 cursor-pointer hover:bg-gray-50 -mx-5 px-5">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-[600] text-gray-600">{m.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-[500]">{m.name}</span>
                      <span className="text-[12px] text-gray-400">{m.company}</span>
                      <span className="text-[12px] text-gray-400 ml-auto">{m.time}</span>
                    </div>
                    <p className="text-[13px] text-gray-500 truncate">{m.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Listings Tab */}
        {activeTab === "listings" && (
          <div className="space-y-4">
            {listings.map((l) => (
              <div key={l.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-72 h-48 md:h-auto shrink-0">
                    <img src={l.image} alt={l.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[18px] font-[600]">{l.title}</h3>
                          {l.retreatReady && (
                            <span className="flex items-center gap-1 bg-[#FF385C]/10 text-[#FF385C] text-[11px] font-[600] rounded-full px-2.5 py-0.5">
                              <Shield className="w-3 h-3" /> Retreat Ready
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[14px] text-gray-500">
                          <MapPin className="w-3.5 h-3.5" /> {l.location}
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-700 text-[12px] font-[500] rounded-full px-3 py-1">{l.status}</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
                      {[
                        { label: "Price/night", value: l.pricePerNight },
                        { label: "Rating", value: `${l.rating} ★` },
                        { label: "Reviews", value: l.reviews },
                        { label: "Max guests", value: l.guests },
                        { label: "Occupancy", value: `${l.occupancy}%` },
                      ].map((s) => (
                        <div key={s.label}>
                          <div className="text-[12px] text-gray-400">{s.label}</div>
                          <div className="text-[15px] font-[500]">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                      <div className="text-[13px] text-gray-500 flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5" /> Next booking: <span className="font-[500] text-black">{l.nextBooking}</span>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <button className="flex items-center gap-1.5 text-[13px] font-[500] px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                          <Eye className="w-3.5 h-3.5" /> Preview
                        </button>
                        <button className="flex items-center gap-1.5 text-[13px] font-[500] px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                          <Pencil className="w-3.5 h-3.5" /> Edit listing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reservations Tab */}
        {activeTab === "reservations" && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[16px] font-[600]">Upcoming Retreat Bookings</h2>
              <div className="flex gap-2">
                {["All", "Confirmed", "Pending"].map((f) => (
                  <button key={f} className={`text-[13px] px-3 py-1.5 rounded-full ${f === "All" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {reservations.map((r) => (
                <div key={r.id} className="flex items-center gap-5 px-5 py-5 hover:bg-gray-50 cursor-pointer">
                  <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <span className="text-[15px] font-[600] text-gray-600">{r.guest[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-[500]">{r.guest}</span>
                      <span className="text-[12px] text-gray-400 bg-gray-100 rounded px-2 py-0.5">{r.company}</span>
                    </div>
                    <div className="text-[13px] text-gray-500 mt-0.5">{r.property}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[14px] font-[500]">{r.dates}</div>
                    <div className="flex items-center gap-1 text-[13px] text-gray-500 justify-end mt-0.5">
                      <Users className="w-3.5 h-3.5" /> {r.guests} guests
                    </div>
                  </div>
                  <div className="text-right shrink-0 w-24">
                    <div className="text-[15px] font-[600]">{r.total}</div>
                    <span className={`text-[12px] font-[500] ${r.status === "Confirmed" ? "text-green-600" : "text-amber-600"}`}>
                      {r.status}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === "earnings" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "This month", value: "$12,480", change: "+18%", positive: true },
                { label: "Last 6 months", value: "$62,680", change: "+32%", positive: true },
                { label: "Pending payout", value: "$9,250", change: "Apr 22", positive: false },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-[13px] text-gray-500">{s.label}</div>
                  <div className="text-[32px] font-[600] mt-1">{s.value}</div>
                  <div className={`text-[13px] font-[500] mt-1 flex items-center gap-1 ${s.positive ? "text-green-600" : "text-gray-500"}`}>
                    {s.positive && <TrendingUp className="w-3.5 h-3.5" />}
                    {s.change} {s.positive ? "vs last period" : ""}
                  </div>
                </div>
              ))}
            </div>

            {/* Simple bar chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-[16px] font-[600] mb-6">Monthly Earnings</h2>
              <div className="flex items-end gap-4 h-48">
                {monthlyEarnings.map((m) => {
                  const maxAmt = Math.max(...monthlyEarnings.map((e) => e.amount));
                  const height = (m.amount / maxAmt) * 100;
                  return (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-[12px] text-gray-500 font-[500]">${(m.amount / 1000).toFixed(1)}k</span>
                      <div
                        className="w-full rounded-lg bg-[#FF385C]/80 hover:bg-[#FF385C] transition-colors"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[12px] text-gray-500">{m.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payout history */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-[16px] font-[600]">Recent Payouts</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { date: "Mar 28, 2026", amount: "$14,200", method: "Direct deposit", status: "Completed" },
                  { date: "Feb 26, 2026", amount: "$9,600", method: "Direct deposit", status: "Completed" },
                  { date: "Jan 28, 2026", amount: "$6,800", method: "Direct deposit", status: "Completed" },
                ].map((p) => (
                  <div key={p.date} className="flex items-center justify-between px-5 py-4">
                    <div>
                      <div className="text-[14px] font-[500]">{p.date}</div>
                      <div className="text-[12px] text-gray-500">{p.method}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[15px] font-[600]">{p.amount}</div>
                      <div className="text-[12px] text-green-600">{p.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === "insights" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Overall rating", value: "4.96", icon: Star },
                { label: "Response rate", value: "100%", icon: MessageSquare },
                { label: "Booking rate", value: "82%", icon: CalendarDays },
                { label: "Repeat guests", value: "34%", icon: Users },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-2">
                    <s.icon className="w-4 h-4" /> {s.label}
                  </div>
                  <div className="text-[28px] font-[600]">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-[16px] font-[600]">Recent Reviews</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { name: "Rachel T.", company: "Notion", rating: 5, text: "Absolutely perfect for our team retreat. The meeting space was exactly what we needed, and the vineyard views were stunning. Our team is still talking about it.", date: "Mar 2026" },
                  { name: "David K.", company: "Vercel", rating: 5, text: "Alex was incredibly accommodating with our dietary needs and schedule changes. The property exceeded our expectations. Will definitely book again.", date: "Feb 2026" },
                  { name: "Mei W.", company: "Loom", rating: 5, text: "The ranch estate was magical. Great WiFi, spacious common areas, and the sunset views were unforgettable. Perfect for focused work + team bonding.", date: "Jan 2026" },
                ].map((r) => (
                  <div key={r.name} className="px-5 py-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-[13px] font-[600] text-gray-600">{r.name[0]}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-[500]">{r.name}</span>
                          <span className="text-[12px] text-gray-400">{r.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-black text-black" />
                          ))}
                          <span className="text-[12px] text-gray-400 ml-1">{r.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default function AirbnbRetreats() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState({});

  const navigate = (page, data = {}) => {
    setCurrentPage(page);
    setPageData(data);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={navigate} />
      {currentPage === 'home' && <Home onNavigate={navigate} />}
      {currentPage === 'brief' && <RetreatBrief onNavigate={navigate} />}
      {currentPage === 'results' && <RetreatResults onNavigate={navigate} pageData={pageData} />}
      {currentPage === 'property' && <PropertyDetail onNavigate={navigate} pageData={pageData} />}
      {currentPage === 'guest-hub' && <GuestHub onNavigate={navigate} />}
      {currentPage === 'hosting' && <HostingDashboard onNavigate={navigate} />}
    </div>
  );
}
