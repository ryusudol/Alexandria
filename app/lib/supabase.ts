import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string | null;
          last_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_preferences: {
        Row: {
          id: string;
          user_id: string;
          frequency: "daily" | "weekly";
          content_depth: "beginner" | "intermediate" | "advanced";
          content_format: "article" | "bullet_points" | "qa";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          frequency?: "daily" | "weekly";
          content_depth?: "beginner" | "intermediate" | "advanced";
          content_format?: "article" | "bullet_points" | "qa";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          frequency?: "daily" | "weekly";
          content_depth?: "beginner" | "intermediate" | "advanced";
          content_format?: "article" | "bullet_points" | "qa";
          created_at?: string;
          updated_at?: string;
        };
      };
      topics: {
        Row: {
          id: string;
          name: string;
          category: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          category: string;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: string;
          description?: string | null;
          created_at?: string;
        };
      };
      user_topics: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          topic_id?: string;
          created_at?: string;
        };
      };
      content: {
        Row: {
          id: string;
          title: string;
          body: string;
          topic_id: string;
          difficulty_level: "beginner" | "intermediate" | "advanced";
          content_type: "article" | "bullet_points" | "qa";
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          body: string;
          topic_id: string;
          difficulty_level: "beginner" | "intermediate" | "advanced";
          content_type: "article" | "bullet_points" | "qa";
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          body?: string;
          topic_id?: string;
          difficulty_level?: "beginner" | "intermediate" | "advanced";
          content_type?: "article" | "bullet_points" | "qa";
          created_at?: string;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          content_id: string;
          read_at: string | null;
          rating: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content_id: string;
          read_at?: string | null;
          rating?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          content_id?: string;
          read_at?: string | null;
          rating?: number | null;
          created_at?: string;
        };
      };
    };
  };
};