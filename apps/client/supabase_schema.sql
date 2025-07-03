-- Unified Sendexa Supabase Database Schema
-- Enable UUID extension (run once)
create extension if not exists "uuid-ossp";

-- 1. Profile Table (extends Auth users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  phone text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 2. Contacts
create table contacts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  phone_number text,
  email text,
  birth_date date,
  company text,
  created_at timestamp with time zone default now()
);

-- 3. Sender IDs
create table sender_ids (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  sender_id text,
  status text check (status in ('approved', 'pending', 'rejected')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 4. Templates
create table templates (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  content text,
  created_at timestamp with time zone default now()
);

-- 5. API Keys
create table api_keys (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  key_prefix text,
  permissions text,
  created_at timestamp with time zone default now(),
  last_used timestamp with time zone,
  expires_at timestamp with time zone
);

-- 6. Transactions/Payments
create table transactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  plan text,
  credits integer,
  amount numeric,
  payment_method text,
  status text,
  date timestamp with time zone default now()
);

-- 7. OTP Logs
create table otp_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  code text,
  phone_number text,
  email text,
  medium text,
  status text,
  created_at timestamp with time zone default now(),
  verified_at timestamp with time zone
);
