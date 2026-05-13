import { GuidePage } from "@/components/GuidePage";
import { guides } from "@/data/guides";
import { Metadata } from "next";

const guide = guides["mei-abriu-no-meio-do-ano-quanto-pode-faturar"];
export const metadata: Metadata = { title: guide.title, description: guide.description };
export default function Page() { return <GuidePage {...guide} />; }
