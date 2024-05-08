export type TEventList = {
  items: TEventItem[];
};

export type TEventItem = {
  weekStart: string; //"date mm-dd-yyyy"
  weekEnd: string; //date mm-dd-yyyy
  isCalendarView: boolean;
  timezone: string; // -+ hour
  events: TEvent[];
};

export type TEvent = {
  title: string;
  schedule: Date;
  location: string;
};
