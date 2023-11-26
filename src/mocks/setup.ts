// src/mocks/setup.ts
import { setupWorker } from 'msw';
import { handlers } from './handler';

const worker = setupWorker(...handlers);

worker.start();
