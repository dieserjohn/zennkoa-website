import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "John Delenschke – Webentwickler in Stralsund";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
    return renderOgImage();
}
