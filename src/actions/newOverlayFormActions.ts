"use server"

import { NewOverlayFormData } from "@/components/dashboard/NewOverlayForm/NewOverlayForm";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies } from "next/headers";

export async function saveOverlayInDatabase(overlayData: NewOverlayFormData) {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);

  const { error } = await supabase.from('overlays').insert({
    data: overlayData,
  });

  if (error) {
    throw error
  }
};
