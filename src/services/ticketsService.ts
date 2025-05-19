import { supabase } from "./supabaseClient";

export type Ticket = {
    id: string;
    user_id: string;
    event_id: string;
    qr_code: string;
    status: string;
    purchase_date: string; // en formato ISO
    created_at: string;
};

// Obtener todos los tickets
export const getTickets = async () => {
    const { data, error } = await supabase.from("tickets").select("*");
    if (error) throw error;
    return data;
};

// Obtener ticket por ID
export const getTicketById = async (id: string) => {
    const { data, error } = await supabase.from("tickets").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
};

// Crear un nuevo ticket
export const createTicket = async (ticket: Omit<Ticket, "id" | "created_at">) => {
    const { data, error } = await supabase.from("tickets").insert([ticket]).select();
    if (error) throw error;
    return data;
};

// Actualizar ticket
export const updateTicket = async (id: string, updates: Partial<Ticket>) => {
    const { data, error } = await supabase.from("tickets").update(updates).eq("id", id);
    if (error) throw error;
    return data;
};

// Eliminar ticket
export const deleteTicket = async (id: string) => {
    const { data, error } = await supabase.from("tickets").delete().eq("id", id);
    if (error) throw error;
    return data;
};
