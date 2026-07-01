import "dotenv/config";

import path from "node:path";
import { fileURLToPath } from "node:url";
import compression from "compression";
import express from "express";
import helmet from "helmet";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const app = express();
const port = Number(process.env.PORT || 3000);

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      })
    : null;

app.disable("x-powered-by");
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"]
      }
    }
  })
);
app.use(compression());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "nonprofit-operations-assistant",
    supabaseConfigured: Boolean(supabase)
  });
});

app.get("/api/config", (_req, res) => {
  res.json({
    supabaseConfigured: Boolean(supabase),
    projectName: "Nonprofit Operations Assistant"
  });
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "marketing.html"));
});

app.get("/hub", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/platform", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/api/projects/:slug", async (req, res, next) => {
  if (!supabase) {
    res.status(503).json({
      error: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY."
    });
    return;
  }

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("slug,name,status,updated_at")
      .eq("slug", req.params.slug)
      .single();

    if (error) {
      res.status(error.code === "PGRST116" ? 404 : 500).json({ error: error.message });
      return;
    }

    res.json({ project: data });
  } catch (error) {
    next(error);
  }
});

app.use(express.static(publicDir));

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "marketing.html"));
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "Unexpected server error" });
});

app.listen(port, () => {
  console.log(`Nonprofit Operations Assistant listening on port ${port}`);
});
