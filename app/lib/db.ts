type User = { id: string; email: string; password: string };

declare global {
  var __users: User[] | undefined;
}

export const users = globalThis.__users ?? (globalThis.__users = []);

export const db = {
  user: {
    findUnique: async ({
      where,
    }: {
      where: { email?: string; id?: string };
    }) => {
      return (
        users.find(
          (u) =>
            (where.email && u.email === where.email) ||
            (where.id && u.id === where.id),
        ) ?? null
      );
    },
    create: async ({ data }: { data: { email: string; password: string } }) => {
      const user: User = { id: crypto.randomUUID(), ...data };
      users.push(user);
      return user;
    },
    _debug: () => {
      console.log("Current users:", users);
      return users;
    },
  },
};
