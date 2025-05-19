import { supabase } from "./supabaseClient";

type eventType = {
    id: string;
    title: string;
    description: string;
    location: string;
    start_time: Date;
    end_time: Date;
    capacity: number;
    
}

// Obtener todos los eventos
export const getEvents = async () => {
    const { data, error } = await supabase.from("events").select("*");
    if (error) throw error;
    return data;
};

// Obtener evento por ID
export const getEventById = async (id: string) => {
    const { data, error } = await supabase.from("events").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
};

// Crear un nuevo evento
export const createEvent = async (event: Omit<eventType, "id" | "created_at"> ) => {
    const { data, error } = await supabase.from("events").insert([event]);
    if (error) throw error;
    return data;
};

// Actualizar evento
export const updateEvent = async (id: string, updates: Partial<eventType>) => {
    const { data, error } = await supabase.from("events").update(updates).eq("id", id);
    if (error) throw error;
    return data;
};

// Eliminar evento
export const deleteEvent = async (id: string) => {
    const { data, error } = await supabase.from("events").delete().eq("id", id);
    if (error) throw error;
    return data;
};