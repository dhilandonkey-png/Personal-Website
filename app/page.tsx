import { Awards } from "@/components/awards";
import { BpmReadout } from "@/components/bpm-readout";
import { Builds } from "@/components/builds";
import { Contact } from "@/components/contact";
import { EcgDivider } from "@/components/ecg-divider";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Research } from "@/components/research";
import { Stemseeds } from "@/components/stemseeds";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <EcgDivider label="beat 01" />
        <Research />
        <EcgDivider label="beat 02" />
        <Builds />
        <EcgDivider label="beat 03" />
        <Stemseeds />
        <EcgDivider label="beat 04" />
        <Awards />
        <Contact />
      </main>
      <BpmReadout />
    </>
  );
}
