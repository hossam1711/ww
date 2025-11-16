"use client";

import Navbar from '../src/components/organisms/Navbar/Navbar';
import Footer from '../src/components/organisms/Footer/Footer';
import { useRouter } from 'next/navigation';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleViewChange = (view: string) => {
    console.log('View changed to:', view);
    

    if (view === 'events' || view === 'settings') {
      // Navigate to different pages for events and settings
      const routeMap: { [key: string]: string } = {
        'events': '/User/Events',
        'settings': '/User/Settings'
      };
      const route = routeMap[view];
      if (route) {
        router.push(route);
      }
    }

  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 pt-20">
          <div className="min-h-[calc(100vh-4rem)]">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
