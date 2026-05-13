import { GuidePage } from "@/components/GuidePage";
import { guides } from "@/data/guides";
import { Metadata } from "next";

const guide = guides["mei-estourou-o-limite-o-que-fazer"];
export const metadata: Metadata = { title: guide.title, description: guide.description };
export default function Page() { return <GuidePage {...guide} />; }
