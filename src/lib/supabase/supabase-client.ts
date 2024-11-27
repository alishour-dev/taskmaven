//#region Import
import { createClient } from "@supabase/supabase-js"

import type { Database } from "./schema"
//#endregion

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL

const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY

const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey)

export default supabaseClient
