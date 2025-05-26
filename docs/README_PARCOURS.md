
# 🚀 FAFA Explorator – Déploiement GitHub Pages

Bienvenue dans le projet **FAFA Explorator**, une expérience interactive multilingue pour explorer Banyuls-sur-Mer.

---

## 🌍 Fonctionnalités

- 🔐 Accès protégé par **code d’accès à durée limitée**
- 📱 Compatible **mobile, tablette et desktop**
- 🏆 Système de succès et progression locale (`localStorage`)
- 🎨 Trois parcours thématiques : Maillol, Vin Mystère, Vieux Port
- ⚙️ Menu admin caché : tapez `FAFA` au clavier pour débloquer

---

## ✅ Déploiement sur GitHub Pages

1. Crée un **nouveau dépôt GitHub** (ex. `fafa-explorator`)
2. Dans le dépôt, clique sur **"Add file" > "Upload files"**
3. **Glisse tous les fichiers** de l’archive `fafa_explorator_secure_final.zip` à la racine
4. Clique sur "Commit changes"

### 🌐 Active GitHub Pages

- Va dans **Settings > Pages**
- **Source** : choisis la branche `main` et dossier `/ (root)`
- Clique sur **"Save"**
- GitHub Pages va générer ton site à l’URL suivante :

```
https://<TON_UTILISATEUR>.github.io/<TON_DEPOT>/
```

---

## 📂 Structure à la racine (obligatoire)

Voici la **liste des fichiers à mettre à la racine** :

```
index.html                   # Page d'accueil avec accès sécurisé
acces_refuse.html           # Page si le code est invalide ou expiré

index.fr.html               # Version française
corrected_index.en.html     -> à renommer en index.en.html
corrected_index.ca.html     -> à renommer en index.ca.html

corrected_info.en.html      -> à renommer en info.en.html
corrected_info.ca.html      -> à renommer en info.ca.html
corrected_aide.html         -> à renommer en aide.html

succes.html                 # Succès débloqués
fin.html                    # Page finale
manifest.json               # Fichier PWA
service-worker.js           # Support hors ligne
codes.json                  # Réponses + bonus
fafa-validate.js            # Script de validation (si utilisé)

icon-pwa-512.png            # Icône ajout à l'écran d'accueil
logo-fafa-explorator.png    # Image/logo utilisée

README.md ou ce fichier     # Documentation projet
```

---

## 🧠 Astuces

- Le code d’accès par défaut est `FAFA-2025`
- Expiration fixée au `31 décembre 2025`
- Tu peux changer le code/date dans `index.html`
- Les joueurs ne voient **le menu admin** que s’ils tapent `F A F A`

---

## 🙌 Besoin d’aide ?
Contacte : `fafa.explorator@gmail.com`

© FAFA Explorator 2025 – Tous droits réservés
