import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types untuk TypeScript
export interface Comment {
  id: string;
  name: string;
  attendance: "hadir" | "tidak";
  message: string;
  created_at: string;
  updated_at: string;
}
