// Paste your Supabase project values here (Supabase dashboard > Project Settings > API).
// The anon key is designed to be public; security is enforced by the database policies in setup.sql.
window.REDLUM_CONFIG = {
  SUPABASE_URL: "https://xiwpfnexgrqgvpnmyerw.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_SMJF-FivRZ2kGsvOvXq-Gg_yD2fu0-x",
  BUCKET: "media",
  MAX_FILE_MB: 25,
  // Allowed upload types. Add more MIME types here if needed.
  ALLOWED_TYPES: [
    "image/jpeg", "image/png", "image/webp", "image/gif",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "video/mp4"
  ]
};