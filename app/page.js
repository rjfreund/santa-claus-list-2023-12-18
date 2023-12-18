import Image from 'next/image';
import SantaTracker from './SantaTracker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Santa Claus' List

      <SantaTracker />
    </main>
  )
}
