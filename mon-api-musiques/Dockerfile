# On part d'une image Node.js allégée (moins de failles)
FROM node:20-slim

# Dossier de travail
WORKDIR /app

# Copier package.json + package-lock.json (si tu as)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer
CMD ["node", "server.js"]
