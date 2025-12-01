// app/openapi/event_descriptions.ts
export const EVENT_INDEX_RULES_MD = `
Liste paginée des événements avec filtres optionnels.

**Query params (réels) :**
- \`page\` (*number, optionnel*) : numéro de page (défaut: 1)
- \`per_page\` (*number, optionnel*) : éléments par page (défaut: 20, max: 100)
- \`q\` (*string, optionnel*) : recherche (nom, description, ville)
- \`type\` (*string, optionnel*) : type d'événement (ex: "match", "tournoi")
- \`city\` (*string, optionnel*) : ville
- \`club_id\` (*number, optionnel*) : filtrer par club (surchargé par /clubs/{slug}/events)
- \`latitude\` & \`longitude\` (*number, optionnel ensemble*) : filtre les événements proches d’un point
- \`radius_km\` (*number, optionnel*) : rayon de recherche en km autour des coordonnées (défaut: 50)
- \`distance\` (retour) : distance en km calculée quand \`latitude\` + \`longitude\` sont fournis
- Les filtres géo/texte sont identiques à ceux de \`/clubs\`

En pratique les filtres sont envoyés **en query string**, mais sont décrits dans le body du schéma pour la documentation.
`
