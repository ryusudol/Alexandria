-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  first_name text,
  last_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create topics table
create table public.topics (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  category text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create user_preferences table
create table public.user_preferences (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  frequency text check (frequency in ('daily', 'weekly')) default 'daily',
  content_depth text check (content_depth in ('beginner', 'intermediate', 'advanced')) default 'intermediate',
  content_format text check (content_format in ('article', 'bullet_points', 'qa')) default 'article',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id)
);

-- Create user_topics table (many-to-many relationship)
create table public.user_topics (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  topic_id uuid references public.topics(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, topic_id)
);

-- Create content table
create table public.content (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  body text not null,
  topic_id uuid references public.topics(id) on delete cascade not null,
  difficulty_level text check (difficulty_level in ('beginner', 'intermediate', 'advanced')) not null,
  content_type text check (content_type in ('article', 'bullet_points', 'qa')) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create user_progress table
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  content_id uuid references public.content(id) on delete cascade not null,
  read_at timestamp with time zone,
  rating integer check (rating >= 1 and rating <= 5),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, content_id)
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.user_preferences enable row level security;
alter table public.user_topics enable row level security;
alter table public.user_progress enable row level security;
alter table public.topics enable row level security;
alter table public.content enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can insert their own profile" on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update their own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can view their own preferences" on public.user_preferences
  for select using (auth.uid() = user_id);

create policy "Users can insert their own preferences" on public.user_preferences
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own preferences" on public.user_preferences
  for update using (auth.uid() = user_id);

create policy "Users can view their own topics" on public.user_topics
  for select using (auth.uid() = user_id);

create policy "Users can insert their own topics" on public.user_topics
  for insert with check (auth.uid() = user_id);

create policy "Users can delete their own topics" on public.user_topics
  for delete using (auth.uid() = user_id);

create policy "Users can view their own progress" on public.user_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert their own progress" on public.user_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own progress" on public.user_progress
  for update using (auth.uid() = user_id);

create policy "Topics are viewable by everyone" on public.topics
  for select using (true);

create policy "Content is viewable by everyone" on public.content
  for select using (true);

-- Create triggers for updating timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger handle_updated_at before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger handle_updated_at before update on public.user_preferences
  for each row execute procedure public.handle_updated_at();

-- Function to handle new user registration
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, first_name, last_name)
  values (new.id, new.email, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to automatically create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();