import { GuidePage } from "@/components/GuidePage";
import { guides } from "@/data/guides";
import { Metadata } from "next";

const guide = guides["quanto-o-mei-paga-por-mes"];
export const metadata: Metadata = { title: guide.title, description: guide.description };
export default function Page() { return <GuidePage {...guide} />; }
