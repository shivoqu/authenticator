import { createContext } from "react";
import { CustomEvent } from "../../../types/Event";

interface EventsContextType {
  events: CustomEvent[];
  setEvents: (event: CustomEvent[]) => void;
}

const EventsContext = createContext<EventsContextType>({
  events: [],
  setEvents: () => {},
});

export default EventsContext;
