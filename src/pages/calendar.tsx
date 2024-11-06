import { useState, useRef } from 'react'

import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";

import '@schedule-x/theme-default/dist/index.css'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Calendar = () => {
  const plugins = [createEventsServicePlugin(), createEventModalPlugin(), createDragAndDropPlugin()]
 
  const calendar = useCalendarApp({
    locale: 'fr-FR',
    dayBoundaries: {
      start: '06:00',
      end: '21:00',
    },
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Crealab',
        start: '2024-11-05 10:00',
        end: '2024-11-05 12:00',
        people: ['John Doe', 'James Doe'],
        location: "Crealab"
      },
      {
        id: '2',
        title: 'Crealab',
        start: '2024-11-05 13:00',
        end: '2024-11-05 14:00',
        people: ['Jane Doe', 'Mike Doe'],
        location: "Crealab"
      },
      {
        id: '3',
        title: 'Crealab',
        start: '2024-11-06 09:00',
        end: '2024-11-06 12:00',
        people: ['John Doe', 'James Doe'],
        location: "Crealab"
      },
    ],
  }, plugins)

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [formattedStartDateTime, setFormattedStartDateTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [formattedEndDateTime, setFormattedEndDateTime] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: any) => {
    setCurrentInput(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (currentInput.trim()) {
        setNames((prevNames) => [...prevNames, currentInput.trim()]);
        setCurrentInput('');
      }
    } else if (e.key === 'Backspace' && !currentInput) {
      setNames((prevNames) => prevNames.slice(0, -1));
    }
  };

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDateChange = (e: any, type: any) => {
    if (type === 'start') {
      setStartDate(e.target.value);
      updateFormattedDateTime(e.target.value, startTime, 'start');
    } else {
      setEndDate(e.target.value);
      updateFormattedDateTime(e.target.value, endTime, 'end');
    }
  };

  const handleTimeChange = (e: any, type: any) => {
    if (type === 'start') {
      setStartTime(e.target.value);
      updateFormattedDateTime(startDate, e.target.value, 'start');
    } else {
      setEndTime(e.target.value);
      updateFormattedDateTime(endDate, e.target.value, 'end');
    }
  };

  const updateFormattedDateTime = (date: any, time: any, type: any) => {
    if (date && time) {
      const formatted = `${date} ${time}`;
      if (type === 'start') {
        setFormattedStartDateTime(formatted);
      } else {
        setFormattedEndDateTime(formatted);
      }
    }
  };

  const handleReservation = () => {
    if (names.length > 0 && formattedStartDateTime && formattedEndDateTime) {
      const reservation = {
        id: new Date().getTime().toString(),
        title: 'Crealab',
        people: names,
        start: formattedStartDateTime,
        end: formattedEndDateTime,
      };
      calendar.eventsService.add(reservation);
      setIsDialogOpen(false);
    }
  };

  return (
    <main className="flex justify-center h-screen pt-20 bg-white">
      <div className='flex flex-col items-end'>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className='bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-900 mb-2' onClick={() => setIsDialogOpen(true)}>Réserver</button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className='text-2xl mb-4'>Réserver un créneau</DialogTitle>
                <DialogDescription>
                  <div>
                    <label htmlFor="multi-name-input" className="block text-base font-medium mb-2">
                      Prénom(s)
                    </label>
                    <div className="border p-2 flex items-center flex-wrap" onClick={handleInputClick}>
                      {names.map((name, index) => (
                        <span key={index} className="bg-neutral-800 text-white pl-2 pr-2 pt-1 pb-1 mr-1 mb-1 rounded">
                          {name}
                        </span>
                      ))}
                      <input
                        id="multi-name-input"
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="flex-grow outline-none p-1"
                        placeholder={names.length === 0 ? "" : ""}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="start-date" className="block text-base font-medium mb-2">
                      Date de début
                    </label>
                    <input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => handleDateChange(e, 'start')}
                      className="border p-2 rounded mb-2 mr-2"
                    />
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => handleTimeChange(e, 'start')}
                      className="border p-2 rounded"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="end-date" className="block text-base font-medium mb-2">
                      Date de fin
                    </label>
                    <input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => handleDateChange(e, 'end')}
                      className="border p-2 rounded mb-2 mr-2"
                    />
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => handleTimeChange(e, 'end')}
                      className="border p-2 rounded"
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <DialogClose asChild>
                  <button className='bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-900' onClick={handleReservation}>Réserver</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        <ScheduleXCalendar calendarApp={calendar}/>
      </div>

      
    </main>
  );
};

export default Calendar;

