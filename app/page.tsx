"use client";

import { useState } from "react";

export default function Page() {
  const [activeFlow, setActiveFlow] = useState(null);

  return (
    <div className="min-h-screen w-full">
      <header className="sticky top-0 z-30 border-b border-soft bg-[rgba(247,243,234,0.78)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <div className="serif-display text-3xl">SYMI Présence</div>
            <div className="text-[10px] text-[#556159] mt-0.5">by symi</div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h1 className="serif-display text-5xl md:text-7xl leading-[0.95]">
                Créer une présence.
              </h1>
              <p className="mt-6 text-lg max-w-xl text-[#556159]">
                Pour vous, ou pour quelqu'un qui compte. Pour la continuité. Pour une relation qui ne dépend pas du temps disponible.
              </p>

              <div className="mt-10 flex gap-4">
                <button className="px-6 py-4 rounded-2xl text-white bg-[#1B4332] transition-soft hover:-translate-y-1">
                  Commencer pour quelqu'un
                </button>
                <button className="px-6 py-4 rounded-2xl border border-[#D8DED4] transition-soft hover:-translate-y-1">
                  Devenir compagnon
                </button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="surface rounded-[2rem] p-8 border border-soft soft-shadow">
                <div className="text-sm text-[#556159]">Présence en cours de conception</div>
                <div className="serif-display text-3xl mt-3">Une relation se construit.</div>
                <p className="mt-4 text-sm text-[#556159]">
                  Nous ne proposons pas simplement des visites. Nous construisons un rythme, une continuité et une présence qui s'inscrit dans le temps.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  {["Même personne", "Affinité réelle", "Continuité visible"].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#44BB6C]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-[10px] text-[#556159]">présence by symi</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Comprendre", "Qui est cette personne, son rythme, ses habitudes."],
              ["Associer", "Trouver quelqu'un de compatible, stable, proche."],
              ["Installer", "Créer une continuité réelle, visible, rassurante."],
            ].map(([t, d]) => (
              <div key={t} className="surface rounded-3xl p-6 border border-soft soft-shadow">
                <div className="serif-display text-2xl">{t}</div>
                <p className="mt-2 text-sm text-[#556159]">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="serif-display text-4xl">Il n'est jamais trop tard pour apprendre.</div>
          <p className="mt-4 text-sm text-[#556159]">
            La présence devient un espace d'évolution. Lecture, mémoire, curiosité, transmission.
          </p>
        </section>
      </main>
    </div>
  );
}
