import { createClient } from '@supabase/supabase-js'

const superbaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const superbaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;

// Create a single supabase client for interacting with your database
// const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
export const supabase = createClient(superbaseUrl, superbaseAnonKey);