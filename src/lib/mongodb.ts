// lib/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI in .env.local or production env");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached = (global as any).mongoose as MongooseCache;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🟡 Connecting to MongoDB...");

    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        dbName: "VelroxeWebsite",
      })
      .then((m) => {
        console.log("✅ MongoDB connected successfully!");
        return m;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
