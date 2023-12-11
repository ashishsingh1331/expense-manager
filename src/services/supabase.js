import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vtnrcuwnuvizloktnxqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bnJjdXdudXZpemxva3RueHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjI5NDMsImV4cCI6MjAxNzc5ODk0M30.WQ-XrZ82CXwNxizNUPg-pH0tnuXPJCSnxrB_sBx8I9s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
