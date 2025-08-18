import type { AddressInfo } from 'net';
import { createApp } from '../src/app';
import { describe, it, expect } from '@jest/globals';

describe('GET /health', () => {
  it('returns ok', async () => {
    const app = createApp();
    const server = app.listen(0);
    try {
      const { port } = server.address() as AddressInfo;
      const res = await fetch(`http://127.0.0.1:${port}/health`);
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body).toEqual({ status: 'ok' });
    } finally {
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  });
});
