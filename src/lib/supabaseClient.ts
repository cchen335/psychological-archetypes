import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 打印环境变量加载状态
console.log("🧩 Supabase Debug Check:")
console.log("   URL:", url ? url.slice(0, 35) + "..." : "❌ Missing URL")
console.log("   Key:", key ? "✅ Loaded" : "❌ Missing Key")

// 初始化 supabase client
export const supabase = createClient(url!, key!)
