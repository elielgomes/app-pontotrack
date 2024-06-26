import { z } from "zod";

export const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Selecione um tema",
  }),
});
