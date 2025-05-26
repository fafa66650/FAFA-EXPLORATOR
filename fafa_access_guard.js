
// FAFA - Contrôle d'accès par code avec expiration
(function() {
  const codesValides = {
    "FAFA-2025": "2025-12-31T23:59:59",
    "FAFA-TEST": "2026-01-01T00:00:00"
  };

  const accessKey = "isValidAccess";

  function verifierAcces() {
    const access = localStorage.getItem(accessKey);
    if (access) return; // Déjà validé

    const code = prompt("🔐 Entrez votre code d'accès :");
    if (!code || !(code in codesValides)) {
      window.location.href = "acces_refuse.html";
      return;
    }

    const expiration = new Date(codesValides[code]);
    const now = new Date();

    if (now > expiration) {
      alert("⏳ Ce code est expiré.");
      window.location.href = "acces_refuse.html";
      return;
    }

    localStorage.setItem(accessKey, "true");
  }

  verifierAcces();
})();
