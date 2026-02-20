create table products(
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    price numeric(10,2) not null,
    created_at timestamptz default now() not null,
    updated_at timestamptz default now() not null
)