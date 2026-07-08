"use client";

export type CurrentUser = {
  id: string;
  name?: string;
  email?: string;
} | null;

export function useCurrentUser(): CurrentUser {
  return null;
}