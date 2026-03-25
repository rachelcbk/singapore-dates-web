import { getEvents } from './lib/supabase';
import { EventList } from './components/EventList';

export const revalidate = 60;

export default async function Home() {
  const events = await getEvents();

  return <EventList events={events} />;
}
