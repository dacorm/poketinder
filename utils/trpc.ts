import { createReactQueryHooks } from '@trpc/react';

// @ts-ignore
import type { AppRouter } from '../pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();