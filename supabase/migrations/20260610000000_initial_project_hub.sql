create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  status text not null default 'discovery',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_items (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  item_type text not null,
  title text not null,
  owner text,
  status text not null default 'open',
  due_date date,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.project_items enable row level security;

create policy "Authenticated users can read projects"
  on public.projects for select
  to authenticated
  using (true);

create policy "Authenticated users can read project items"
  on public.project_items for select
  to authenticated
  using (true);

insert into public.projects (slug, name, status)
values ('ampt-chicago', 'AMPT Chicago AI Capacity Building', 'discovery')
on conflict (slug) do nothing;
