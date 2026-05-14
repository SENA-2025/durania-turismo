// src/middleware.js
import { defineMiddleware, sequence } from "astro:middleware";

/**
 * Middleware robusto de Durania.
 * Utiliza defineMiddleware para tipado correcto y sequence para el flujo.
 */
export const onRequest = sequence(
    defineMiddleware(async (context, next) => {
        // Lógica de interceptación si es necesaria
        return next();
    })
);
