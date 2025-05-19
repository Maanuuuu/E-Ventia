import { useEffect, useState } from "react";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../services/usersService";

export type User = {
    id: string;
    name: string;
    email: string;
    rol: string;
    password: string;
    birth_date: Date;
};

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        setLoading(true);
        try {
        const data = await getUsers();
        setUsers(data || []);
        } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        } finally {
        setLoading(false);
        }
    };

    const addUser = async (user: Omit<User, "id">) => {
        try {
        const data = await createUser(user as User); // puedes ajustar este cast si defines un tipo para creación
        if (data) setUsers(prev => [...prev, ...data]);
        } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        }
    };

    const updateUserById = async (id: string, updates: Partial<User>) => {
        try {
        const updated = await updateUser(id, updates as User);
        if (updated) {
            setUsers(prev => prev.map(user => (user.id === id ? updated[0] : user)));
        }
        } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        }
    };

    const fetchUserById = async (id: string): Promise<User | null> => {
        try {
            const user = await getUserById(id);
            return user;
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            return null;
        }
    };

    const deleteUserById = async (id: string) => {
        try {
        await deleteUser(id);
        setUsers(prev => prev.filter(user => user.id !== id));
        } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        loading,
        error,
        fetchUsers,
        fetchUserById,
        addUser,
        updateUserById,
        deleteUserById,
    };
};
