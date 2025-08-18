import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
    globals: true,
  },
  ssr: {
    optimizeDeps: {
      include: [
        'express',
        'qs',
        'side-channel',
        'side-channel-map',
        'side-channel-weakmap',
        'call-bind',
        'get-intrinsic',
        'function-bind',
        'has-proto',
        'hasown',
        'math-intrinsics'
      ],
    },
  },
});
