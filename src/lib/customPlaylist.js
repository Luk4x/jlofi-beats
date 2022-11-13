import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PROJECT_KEY
);

export function customPlaylist() {
    return supabase.from('customPlaylist');
}
