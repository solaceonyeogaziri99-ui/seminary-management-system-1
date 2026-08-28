/**
 * services/api.js
 *
 * This file is intentionally mostly empty in Phase 1. There is no
 * backend yet, so nothing here makes real network calls.
 *
 * The point of creating it now is to establish WHERE future API
 * calls will live, so that when a backend exists, pages will import
 * functions from here (e.g. `fetchPrograms()`) instead of talking to
 * `fetch()` directly inside components. That keeps components simple
 * and makes it easy to swap the data source later.
 *
 * Example of what this will look like in a future phase:
 *
 *   const BASE_URL = import.meta.env.VITE_API_URL;
 *
 *   export async function fetchPrograms() {
 *     const response = await fetch(`${BASE_URL}/programs`);
 *     if (!response.ok) throw new Error('Failed to load programs');
 *     return response.json();
 *   }
 */

export const API_BASE_URL = null; // will hold the backend URL once one exists
