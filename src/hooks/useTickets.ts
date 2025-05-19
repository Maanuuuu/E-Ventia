import { useState, useEffect } from "react";
import {
    getTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
    type Ticket,
} from "../services/ticketsService";

export const useTickets = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null >(null);

  // Cargar todos los tickets al inicio
    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        setLoading(true);
        try {
        const data = await getTickets();
        setTickets(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        }finally {
        setLoading(false);
        }
    };

    const addTicket = async (ticket: Omit<Ticket, "id" | "created_at">) => {
        try {
            const data = await createTicket(ticket);
            if (data) {
            setTickets(prev => [...prev, ...data]);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        }
    };


    const editTicket = async (id: string, updates: Partial<Ticket>) => {
        try {
        const data = await updateTicket(id, updates);
        setTickets(prev =>
            prev.map(t => (t.id === id ? { ...t, ...updates } : t))
        );
        return data;
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        }
    };

    const removeTicket = async (id: string) => {
        try {
        await deleteTicket(id);
        setTickets(prev => prev.filter(t => t.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        }
    };

    const getTicket = async (id: string): Promise<Ticket | null> => {
        try {
        return await getTicketById(id);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            return null;
        }
    };

    return {
        tickets,
        loading,
        error,
        fetchTickets,
        addTicket,
        editTicket,
        removeTicket,
        getTicket,
    };
};
