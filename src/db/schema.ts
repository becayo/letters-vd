import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const letters = sqliteTable('letters', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  fromName: text('from_name').notNull(),
  toName: text('to_name').notNull(),
  content: text('content').notNull(),
  inkColor: text('ink_color').notNull().default('#1a1a2e'),
  createdAt: text('created_at')
    .notNull()
    .default(sql`(datetime('now'))`),
});

export type Letter = typeof letters.$inferSelect;
export type NewLetter = typeof letters.$inferInsert;

export const pushSubscriptions = sqliteTable('push_subscriptions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  endpoint: text('endpoint').notNull().unique(),
  p256dh: text('p256dh').notNull(),
  auth: text('auth').notNull(),
  createdAt: text('created_at')
    .notNull()
    .default(sql`(datetime('now'))`),
});

export type PushSubscription = typeof pushSubscriptions.$inferSelect;
