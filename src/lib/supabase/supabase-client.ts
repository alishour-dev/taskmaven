//#region Import
import { createClient } from "@supabase/supabase-js"
//#endregion

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL

const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY

const supabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabaseClient
