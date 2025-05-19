import { supabase } from "./supabaseClient";

type User = {
    id: string;
    name: string;
    email: string;
    rol: string;
    password: string;
    birth_date: Date;
}

// Obtener todos los usuarios
export const getUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data;
};

// Obtener usuario por ID
export const getUserById = async (id: string) => {
    const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
};

// Crear un nuevo usuario
export const createUser = async (user: Omit<User, "id" | "created_at"> ) => {
    const { data, error } = await supabase.from("users").insert([user]);
    if (error) throw error;
    return data;
};

// Actualizar usuario
export const updateUser = async (id: string, updates: Partial<User>) => {
    const { data, error } = await supabase.from("users").update(updates).eq("id", id);
    if (error) throw error;
    return data;
};

// Eliminar usuario
export const deleteUser = async (id: string) => {
    const { data, error } = await supabase.from("users").delete().eq("id", id);
    if (error) throw error;
    return data;
};