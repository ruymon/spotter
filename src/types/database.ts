export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      overlays: {
        Row: {
          created_at: string
          data: Json
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          data: Json
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          data?: Json
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "overlays_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
