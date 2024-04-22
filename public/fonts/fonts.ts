import { Platypi, Poppins } from "next/font/google";

export const headingFont = Platypi({
  weight: "600",
  subsets: ["latin"],
});

export const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
