// hooks/useEvents.ts
import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

type Event = {
    id: string;
    title: string;
    description: string;
    location: string;
    start_time: Date;
    end_time: Date;
    capacity: number;
    
}

export function useEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
        const data = await getEvents();
        setEvents(data);
        } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Ocurrió un error inesperado");
        }
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return { events, loading, error, refetch: fetchEvents };
}
