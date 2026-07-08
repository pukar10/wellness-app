export type SessionUser = {
  id: string;
  name?: string;
  email?: string;
};

export async function getCurrentUser(): Promise<SessionUser | null> {
  return null;
}

export async function requireCurrentUser(): Promise<SessionUser> {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Authentication required.");
  }

  return user;
}