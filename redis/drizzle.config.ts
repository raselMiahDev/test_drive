import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle/migrations',
  schema: './src/models/**/*.ts',
  connectionString: process.env.DATABASE_URL!,
});
