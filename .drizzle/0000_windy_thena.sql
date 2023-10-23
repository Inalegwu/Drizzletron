CREATE TABLE `cities` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`country_id` integer
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `countries_id_unique` ON `countries` (`id`);