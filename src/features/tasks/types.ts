//#region Import
import type { Database } from "@/lib/supabase/schema"
//#endregion

export type Task = Database["public"]["Tables"]["tasks"]["Row"]
