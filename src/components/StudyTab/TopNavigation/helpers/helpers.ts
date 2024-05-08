import {TEvent, TEventItem, TEventList} from '../types/event';

// Helper function to generate a random date within a range
function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

// Helper function to format a date to "mm-dd-yyyy"
function formatDate(date: Date): string {
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

// Helper function to generate random event data
export function generateRandomEvent(): TEvent {
  const titles = ['Meeting', 'Workshop', 'Conference', 'Seminar', 'Webinar'];
  const locations = ['New York', 'London', 'Berlin', 'Tokyo', 'Sydney'];
  const startDate = new Date();
  const endDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // within the next 30 days

  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    schedule: randomDate(startDate, endDate),
    location: locations[Math.floor(Math.random() * locations.length)],
  };
}

// Main function to generate random TEventList data
export function generateRandomEventList(numberOfItems: number): TEventList {
  const items: TEventItem[] = [];
  for (let i = 0; i < numberOfItems; i++) {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 1000 * 60 * 60 * 24 * 7); // one week later

    const events: TEvent[] = [];
    const numberOfEvents = Math.floor(Math.random() * 5) + 1; // 1 to 5 events
    for (let j = 0; j < numberOfEvents; j++) {
      events.push(generateRandomEvent());
    }

    items.push({
      weekStart: formatDate(startDate),
      weekEnd: formatDate(endDate),
      isCalendarView: false,
      timezone: `GMT${Math.random() > 0.5 ? '+' : '-'}${Math.floor(
        Math.random() * 12,
      )}`, // GMT+/-0 to 11
      events: events,
    });
  }

  return {items};
}

export function transformDate(input: string): string {
  const [month, day, year] = input.split('-').map(Number);

  // Array of month names as three-letter abbreviations
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Convert month number to month name, accounting for array index starting at 0
  const monthName = months[month - 1];

  // Return the formatted date string "dd-MMM"
  return `${day} ${monthName}`;
}

//Math.random() > 0.5
