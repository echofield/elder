export default function Legal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F3EA] via-[#FBF8F1] to-[#F7F3EA] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="serif-display text-5xl mb-8">Mentions légales</h1>
        <div className="space-y-6 text-[#556159]">
          <h2 className="serif-display text-2xl text-[#173328]">Éditeur</h2>
          <p>SYMI Présence<br />Société en cours de constitution</p>
          <h2 className="serif-display text-2xl mt-8 text-[#173328]">Hébergement</h2>
          <p>Vercel Inc.<br />340 S Lemon Ave #4133<br />Walnut, CA 91789</p>
          <h2 className="serif-display text-2xl mt-8 text-[#173328]">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu est la propriété de SYMI Présence.</p>
          <div className="mt-12 pt-8 border-t border-soft">
            <a href="/" className="text-[#1B4332] hover:-translate-x-1 inline-block transition-soft">← Retour</a>
          </div>
        </div>
      </div>
    </div>
  );
}
