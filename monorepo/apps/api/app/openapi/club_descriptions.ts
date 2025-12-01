// app/openapi/club_descriptions.ts
export const CLUB_INDEX_RULES_MD = `
Liste paginée des clubs avec filtres optionnels.

**Query params (réels) :**
- \`page\` (*number, optionnel*) : numéro de page (défaut: 1)
- \`per_page\` (*number, optionnel*) : éléments par page (défaut: 20, max: 100)
 - \`q\` (*string, optionnel*) : recherche (nom, description, ville)
 - \`type\` (*string, optionnel*) : type de club (ex: "football")
 - \`city\` (*string, optionnel*) : ville
- \`is_active\` (*boolean, optionnel*) : uniquement les clubs actifs/inactifs
- \`latitude\` & \`longitude\` (*number, optionnel ensemble*) : filtre les clubs proches d’un point
- \`radius_km\` (*number, optionnel*) : rayon de recherche en km autour des coordonnées (défaut: 50)
- Métadonnées média (retour) : \`imageUrl\`, \`bannerImageUrl\`, \`logoImageUrl\`, \`galleryUrls[]\`
- \`distance\` (retour) : distance en km calculée quand \`latitude\` + \`longitude\` sont fournis
- Horaires (retour) : \`openingHours[]\`
- Tags (retour) : \`tags[]\`
  - Horaires format jour par jour en français (ex: "Lundi: 09:00-20:00")

En pratique les filtres sont envoyés **en query string**, mais sont décrits dans le body du schéma pour la documentation.
`
