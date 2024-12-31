import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mjjiaqxnuxnleurmxhaf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qamlhcXhudXhubGV1cm14aGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MzU5NDgsImV4cCI6MjA1MDUxMTk0OH0.lW92qD_2LXjEmOnPRFUy-Na8JuqsjmYNiu2at1InqEA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
