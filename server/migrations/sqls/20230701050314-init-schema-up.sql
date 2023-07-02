CREATE TABLE "items" (
  "id" bigserial PRIMARY KEY,
  "content" varchar NOT NULL
);

CREATE INDEX ON "items" ("content");
