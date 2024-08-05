import {faker} from '@faker-js/faker';
import moment from 'moment';

export interface IAttachment {
  id: string;
  type: string;
  is_completed: boolean;
  title: string;
  is_favorite: boolean;
}

const attachmentTypes = ['PDF', 'DOC', 'XLS', 'PPT', 'ZIP', 'JPG', 'PNG'];

export interface IEvent {
  id: string;
  title: string;
  startDate: string;
  duration: number;
  courseId: string;
  groupColor: string | null;
  location: string;
  isSession: boolean;
  description: string;
  host: {
    first_name: string;
    last_name: string;
  };
  handouts: IAttachment[];
}

export interface IWeeklyEvent {
  filter: {
    weekEnd: string;
    weekStart: string;
  };
  courseId: string;
  events: IEvent[];
  type: string;
  nextCourseId?: string;
  prevCourseId?: string;
}

export interface IDailyEvent {
  filter: {
    dateStart: string;
    dateEnd: string;
  };
  type: string;
  id: string;
  events: IEvent[];
  nextDailyEventId?: string;
  prevDailyEventId?: string;
}

const generateRandomEvent = (
  weekStart: moment.Moment,
  weekEnd: moment.Moment,
): IEvent => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    startDate: faker.date
      .between(weekStart.toDate(), weekEnd.toDate())
      .toISOString(),
    duration: faker.datatype.number({min: 30, max: 180}),
    courseId: faker.datatype.uuid(),
    groupColor: faker.datatype.boolean() ? faker.internet.color() : null,
    location: faker.address.streetAddress(),
    isSession: faker.datatype.boolean(),
    description: faker.lorem.paragraphs(faker.number.int({min: 2, max: 4})),
    host: {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
    },
    handouts: Array.from({length: faker.number.int({min: 0, max: 3})}, () => ({
      id: faker.string.uuid(),
      type: attachmentTypes[
        faker.number.int({min: 0, max: attachmentTypes.length - 1})
      ],
      is_completed: faker.datatype.boolean(),
      title: faker.lorem.words(faker.number.int({min: 3, max: 20})),
      is_favorite: faker.datatype.boolean(),
    })),
  } as IEvent;
};

function generateWeeklyEvent(
  existingEvents: {weekStart: moment.Moment; weekEnd: moment.Moment}[],
  type: string,
): IWeeklyEvent {
  let weekStart: moment.Moment;
  let weekEnd: moment.Moment;
  let overlap: boolean;

  do {
    overlap = false;

    if (type === 'TILE') {
      weekStart = moment(
        faker.date.between({from: '2023-01-01', to: '2024-12-31'}),
      );
      weekEnd = moment(
        faker.date.between({from: weekStart.toISOString(), to: '2024-12-31'}),
      );
    } else {
      // For CALENDAR type, ensure week starts on Monday and ends on Sunday
      weekStart = moment(
        faker.date.between({from: '2023-01-01', to: '2024-12-31'}),
      ).startOf('isoWeek');
      weekEnd = moment(weekStart).endOf('isoWeek');
    }

    // Check for overlap
    overlap = existingEvents.some(
      event =>
        weekStart.isBetween(event.weekStart, event.weekEnd, null, '[)') ||
        weekEnd.isBetween(event.weekStart, event.weekEnd, null, '(]') ||
        (weekStart.isSameOrBefore(event.weekStart) &&
          weekEnd.isSameOrAfter(event.weekEnd)),
    );
  } while (overlap);

  const events = Array.from(
    {length: faker.datatype.number({min: 5, max: 10})},
    () => generateRandomEvent(weekStart, weekEnd),
  );

  existingEvents.push({weekStart, weekEnd});

  return {
    filter: {
      weekEnd: weekEnd.toISOString(),
      weekStart: weekStart.toISOString(),
    },
    courseId: faker.datatype.uuid(),
    events,
    type,
  };
}

const types = ['TILE', 'CALENDAR'];

export function generateWeeklyEventsList(count: number): IWeeklyEvent[] {
  const existingEvents: {weekStart: moment.Moment; weekEnd: moment.Moment}[] =
    [];
  const weeklyEvents: IWeeklyEvent[] = [];

  for (let i = 0; i < count; i++) {
    const type = types[faker.datatype.number({min: 0, max: 1})];
    const weeklyEvent = generateWeeklyEvent(existingEvents, type);
    weeklyEvents.push(weeklyEvent);
  }

  weeklyEvents.sort(
    (a, b) =>
      moment(a.filter.weekStart).valueOf() -
      moment(b.filter.weekStart).valueOf(),
  );

  // Add prevCourseId and nextCourseId
  for (let i = 0; i < weeklyEvents.length; i++) {
    if (i > 0) {
      weeklyEvents[i].prevCourseId = weeklyEvents[i - 1].courseId;
    }
    if (i < weeklyEvents.length - 1) {
      weeklyEvents[i].nextCourseId = weeklyEvents[i + 1].courseId;
    }
  }

  return weeklyEvents;
}

export function getClosestWeeklyEvent(events: IWeeklyEvent[]): IWeeklyEvent {
  const now = moment();
  let closestEvent = events[0];
  let smallestDiff = Infinity;

  for (const event of events) {
    const weekStart = moment(event.filter.weekStart);
    const weekEnd = moment(event.filter.weekEnd);

    const startDiff = Math.abs(now.diff(weekStart));
    const endDiff = Math.abs(now.diff(weekEnd));

    const minDiff = Math.min(startDiff, endDiff);

    if (minDiff < smallestDiff) {
      smallestDiff = minDiff;
      closestEvent = event;
    }
  }

  return closestEvent;
}

//
export function generateDailyEvents(
  weeklyEvents: IWeeklyEvent[],
): IDailyEvent[] {
  const dailyEvents: IDailyEvent[] = [];

  for (const weeklyEvent of weeklyEvents) {
    const weekStart = moment(weeklyEvent.filter.weekStart);
    const weekEnd = moment(weeklyEvent.filter.weekEnd);

    if (weeklyEvent.type === 'CALENDAR') {
      for (let i = 0; i < 7; i++) {
        const dateStart = moment(weekStart).add(i, 'days').toISOString();
        const dateEnd = moment(dateStart).endOf('day').toISOString();

        const events = weeklyEvent.events.filter(event =>
          moment(event.startDate).isBetween(dateStart, dateEnd, null, '[]'),
        );
        if (events.length > 0) {
          dailyEvents.push({
            filter: {
              dateStart,
              dateEnd,
            },
            type: 'CALENDAR',
            id: faker.datatype.uuid(),
            events,
          });
        }
      }
    } else {
      const events = weeklyEvent.events;
      dailyEvents.push({
        filter: {
          dateStart: weekStart.toISOString(),
          dateEnd: weekEnd.toISOString(),
        },
        type: 'TILE',
        id: faker.datatype.uuid(),
        events,
      });
    }
  }

  for (let i = 0; i < dailyEvents.length; i++) {
    if (i > 0) {
      dailyEvents[i].prevDailyEventId = dailyEvents[i - 1].id;
    }
    if (i < dailyEvents.length - 1) {
      dailyEvents[i].nextDailyEventId = dailyEvents[i + 1].id;
    }
  }

  return dailyEvents.filter(x => x.events.length > 0);
}
