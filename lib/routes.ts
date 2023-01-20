export const protectedRoutes = ['/jwt'];
export const publicRoutes = ['/', '/about'];
export const authRoutes = ['/jwt/login', '/register'];

export const routes = [...protectedRoutes, ...publicRoutes, ...authRoutes];