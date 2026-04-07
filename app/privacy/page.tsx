export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F3EA] via-[#FBF8F1] to-[#F7F3EA] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="serif-display text-5xl mb-8">Confidentialité</h1>
        <div className="space-y-6 text-[#556159]">
          <p>Nous collectons uniquement les informations nécessaires pour créer une relation de continuité.</p>
          <h2 className="serif-display text-2xl mt-8 text-[#173328]">Données collectées</h2>
          <p>Nom, coordonnées, préférences de rythme et d'accompagnement.</p>
          <h2 className="serif-display text-2xl mt-8 text-[#173328]">Usage</h2>
          <p>Ces informations servent exclusivement à établir une présence adaptée.</p>
          <h2 className="serif-display text-2xl mt-8 text-[#173328]">Conservation</h2>
          <p>Vos données sont conservées de manière sécurisée et ne sont jamais partagées.</p>
          <div className="mt-12 pt-8 border-t border-soft">
            <a href="/" className="text-[#1B4332] hover:-translate-x-1 inline-block transition-soft">← Retour</a>
          </div>
        </div>
      </div>
    </div>
  );
}
