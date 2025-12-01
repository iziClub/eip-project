import Club from '#models/club'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ClubsSeeder extends BaseSeeder {
  public async run() {
    const TYPE_TRANSLATIONS: Record<string, string> = {
      volleyball: 'volley-ball',
      basketball: 'basket-ball',
      baseball: 'base-ball',
      swimming: 'natation',
      climbing: 'escalade',
      athletics: 'athlétisme',
      cycling: 'cyclisme',
      boxing: 'boxe',
      rugby: 'rugby',
      football: 'football',
      tennis: 'tennis',
      triathlon: 'triathlon',
      badminton: 'badminton',
      handball: 'handball',
      fencing: 'escrime',
      hockey: 'hockey',
      dance: 'danse',
      karting: 'karting',
      gymnastics: 'gymnastique',
      running: 'course',
      rowing: 'aviron',
      sailing: 'voile',
      ultimate: 'ultimate',
    }

    const normalizeTag = (tag: string) => {
      const key = tag.toLowerCase().trim()
      return TYPE_TRANSLATIONS[key] ?? key
    }

    const DEFAULT_OPENING_HOURS = [
      'Lundi: 09:00-20:00',
      'Mardi: 09:00-20:00',
      'Mercredi: 09:00-20:00',
      'Jeudi: 09:00-20:00',
      'Vendredi: 09:00-20:00',
      'Samedi: 10:00-18:00',
      'Dimanche: Fermé',
    ]
    const clubs = [
      {
        name: 'Paris Athletic Club',
        description: 'Club multisport du centre-ville de Paris.',
        type: 'football',
        email: 'contact@parisac.fr',
        phone: '01 45 78 23 11',
        websiteUrl: 'https://parisac.fr',
        addressLine1: '12 Rue des Francs Bourgeois',
        addressLine2: '',
        postalCode: '75003',
        city: 'Paris',
        country: 'France',
        latitude: 48.859,
        longitude: 2.361,
        imageUrl:
          'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 09:00-20:00', 'Sam 10:00-18:00'],
        tags: ['football', 'multisport', 'compétition', 'formation'],
        isActive: true,
      },
      {
        name: 'Olympique Lyonnais Amateur',
        description: 'Section amateur du célèbre club lyonnais.',
        type: 'football',
        email: 'info@olamateur.fr',
        phone: '04 72 10 45 32',
        websiteUrl: 'https://olamateur.fr',
        addressLine1: '350 Avenue Jean Jaurès',
        addressLine2: '',
        postalCode: '69007',
        city: 'Lyon',
        country: 'France',
        latitude: 45.7407,
        longitude: 4.8257,
        imageUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 09:00-19:00', 'Sam 10:00-16:00'],
        tags: ['football', 'lyon', 'académie', 'jeunesse'],
        isActive: true,
      },
      {
        name: 'Marseille Tennis Club',
        description: 'Club de tennis avec terrains intérieurs et extérieurs.',
        type: 'tennis',
        email: 'contact@marseilletennis.fr',
        phone: '04 91 87 55 11',
        websiteUrl: 'https://marseilletennis.fr',
        addressLine1: '25 Boulevard Michelet',
        addressLine2: '',
        postalCode: '13008',
        city: 'Marseille',
        country: 'France',
        latitude: 43.2706,
        longitude: 5.3957,
        imageUrl:
          'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Dim 08:00-22:00'],
        tags: ['tennis', 'marseille', 'tournoi'],
        isActive: true,
      },
      {
        name: 'Toulouse Natation Club',
        description: 'Club de natation ouvert à tous les niveaux.',
        type: 'swimming',
        email: 'contact@toulousenatation.fr',
        phone: '05 61 12 75 66',
        websiteUrl: 'https://toulousenatation.fr',
        addressLine1: '15 Rue du Rempart Saint-Étienne',
        addressLine2: '',
        postalCode: '31000',
        city: 'Toulouse',
        country: 'France',
        latitude: 43.6009,
        longitude: 1.444,
        imageUrl:
          'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 07:00-21:00', 'Sam 09:00-18:00'],
        tags: ['natation', 'toulouse', 'piscine', 'loisir'],
        isActive: true,
      },
      {
        name: 'Lille Rugby Métropole',
        description: 'Club de rugby ambitieux de la région lilloise.',
        type: 'rugby',
        email: 'contact@lillerugby.fr',
        phone: '03 20 77 45 65',
        websiteUrl: 'https://lillerugby.fr',
        addressLine1: '92 Rue du Faubourg de Roubaix',
        addressLine2: '',
        postalCode: '59800',
        city: 'Lille',
        country: 'France',
        latitude: 50.632,
        longitude: 3.07,
        imageUrl:
          'https://images.unsplash.com/photo-1505842465776-3bfd188799b5?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1505842465776-3bfd188799b5?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1505842465776-3bfd188799b5?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1505842465776-3bfd188799b5?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Mar-Dim 10:00-20:00'],
        tags: ['rugby', 'lille', 'formation'],
        isActive: true,
      },
      {
        name: 'Nice Triathlon Club',
        description: 'Club spécialisé triathlon, ouvert à tous.',
        type: 'triathlon',
        email: 'info@nicetriathlon.fr',
        phone: '04 93 55 14 88',
        websiteUrl: 'https://nicetriathlon.fr',
        addressLine1: '8 Avenue Jean Médecin',
        addressLine2: '',
        postalCode: '06000',
        city: 'Nice',
        country: 'France',
        latitude: 43.7013,
        longitude: 7.2663,
        imageUrl:
          'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 06:00-20:00', 'Dim 08:00-12:00'],
        tags: ['triathlon', 'nice', 'mer'],
        isActive: true,
      },
      {
        name: 'Bordeaux Volley Club',
        description: 'Club de volley dynamique de Nouvelle-Aquitaine.',
        type: 'volleyball',
        email: 'contact@bordeauxvolley.fr',
        phone: '05 56 89 41 22',
        websiteUrl: 'https://bordeauxvolley.fr',
        addressLine1: '41 Rue Georges Bonnac',
        addressLine2: '',
        postalCode: '33000',
        city: 'Bordeaux',
        country: 'France',
        latitude: 44.8412,
        longitude: -0.5806,
        imageUrl:
          'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Sam 09:00-20:00'],
        tags: ['volleyball', 'bordeaux', 'mixte'],
        isActive: true,
      },
      {
        name: 'Strasbourg Escrime Club',
        description: 'Club d’escrime historique de Strasbourg.',
        type: 'fencing',
        email: 'info@escrimestrasbourg.fr',
        phone: '03 88 45 21 77',
        websiteUrl: 'https://escrimestrasbourg.fr',
        addressLine1: '10 Boulevard de Lyon',
        addressLine2: '',
        postalCode: '67000',
        city: 'Strasbourg',
        country: 'France',
        latitude: 48.5802,
        longitude: 7.748,
        imageUrl:
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 09:00-21:00', 'Sam 10:00-18:00'],
        tags: ['escrime', 'strasbourg', 'sabre'],
        isActive: true,
      },
      {
        name: 'Rennes Judo Club',
        description: 'Club de judo pour enfants, ados et adultes.',
        type: 'judo',
        email: 'contact@rennesjudo.fr',
        phone: '02 99 65 48 70',
        websiteUrl: 'https://rennesjudo.fr',
        addressLine1: '5 Rue de Brest',
        addressLine2: '',
        postalCode: '35000',
        city: 'Rennes',
        country: 'France',
        latitude: 48.1147,
        longitude: -1.6794,
        imageUrl:
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 09:00-20:00'],
        tags: ['judo', 'rennes', 'dojo'],
        isActive: true,
      },
      {
        name: 'Montpellier Handball Formation',
        description: 'Formation handball pour jeunes talents.',
        type: 'handball',
        email: 'info@mhbformation.fr',
        phone: '04 67 72 33 11',
        websiteUrl: 'https://mhbformation.fr',
        addressLine1: '45 Rue de l’Université',
        addressLine2: '',
        postalCode: '34000',
        city: 'Montpellier',
        country: 'France',
        latitude: 43.6111,
        longitude: 3.8767,
        imageUrl:
          'https://images.unsplash.com/photo-1505843795480-5cfb3c06c237?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1505843795480-5cfb3c06c237?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1505843795480-5cfb3c06c237?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1505843795480-5cfb3c06c237?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Dim 09:00-22:00'],
        tags: ['handball', 'montpellier', 'élite'],
        isActive: true,
      },
      {
        name: 'Nantes Badminton Club',
        description: 'Club de badminton avec plusieurs gymnases.',
        type: 'badminton',
        email: 'contact@nantesbadminton.fr',
        phone: '02 40 12 78 54',
        websiteUrl: 'https://nantesbadminton.fr',
        addressLine1: '3 Rue Léon Jost',
        addressLine2: '',
        postalCode: '44000',
        city: 'Nantes',
        country: 'France',
        latitude: 47.2184,
        longitude: -1.5536,
        imageUrl:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Ven 09:00-20:00', 'Sam 10:00-18:00'],
        tags: ['badminton', 'nantes'],
        isActive: true,
      },
      {
        name: 'Toulon Boxe Club',
        description: 'Club de boxe anglaise et française.',
        type: 'boxing',
        email: 'contact@toulonboxe.fr',
        phone: '04 94 01 22 40',
        websiteUrl: 'https://toulonboxe.fr',
        addressLine1: '18 Rue Jean Aicard',
        addressLine2: '',
        postalCode: '83000',
        city: 'Toulon',
        country: 'France',
        latitude: 43.1251,
        longitude: 5.9306,
        imageUrl:
          'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Sam 10:00-21:00'],
        tags: ['boxe', 'toulon'],
        isActive: true,
      },
      {
        name: 'Angers Hockey Club',
        description: 'Club de hockey sur glace reconnu.',
        type: 'hockey',
        email: 'info@hockeyangers.fr',
        phone: '02 41 36 55 22',
        websiteUrl: 'https://hockeyangers.fr',
        addressLine1: '2 Boulevard du Roi René',
        addressLine2: '',
        postalCode: '49100',
        city: 'Angers',
        country: 'France',
        latitude: 47.4736,
        longitude: -0.5514,
        imageUrl:
          'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
        ],
        openingHours: ['Lun-Dim 10:00-22:00'],
        tags: ['hockey', 'angers'],
        isActive: true,
      },
      {
        name: 'Dijon Cyclisme Club',
        description: 'Club de cyclisme pour amateurs et confirmés.',
        type: 'cycling',
        email: 'contact@dijoncyclisme.fr',
        phone: '03 80 45 78 65',
        websiteUrl: 'https://dijoncyclisme.fr',
        addressLine1: '22 Boulevard de Brosses',
        addressLine2: '',
        postalCode: '21000',
        city: 'Dijon',
        country: 'France',
        latitude: 47.3216,
        longitude: 5.0415,
        imageUrl:
          'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Tours Escalade Club',
        description: 'Club d’escalade avec murs intérieurs.',
        type: 'climbing',
        email: 'info@toursescalade.fr',
        phone: '02 47 45 88 90',
        websiteUrl: 'https://toursescalade.fr',
        addressLine1: '14 Rue Nationale',
        addressLine2: '',
        postalCode: '37000',
        city: 'Tours',
        country: 'France',
        latitude: 47.3941,
        longitude: 0.6896,
        imageUrl:
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Reims Athlétisme Club',
        description: 'Club d’athlétisme historique de Reims.',
        type: 'athletics',
        email: 'contact@reimsathle.fr',
        phone: '03 26 47 11 22',
        websiteUrl: 'https://reimsathle.fr',
        addressLine1: '30 Rue de Vesle',
        addressLine2: '',
        postalCode: '51100',
        city: 'Reims',
        country: 'France',
        latitude: 49.2583,
        longitude: 4.0317,
        imageUrl:
          'https://images.unsplash.com/photo-1468645547353-56d325bb57ff?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1468645547353-56d325bb57ff?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1468645547353-56d325bb57ff?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1468645547353-56d325bb57ff?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Metz Danse Club',
        description: 'Club de danse moderne et classique.',
        type: 'dance',
        email: 'info@metzdanse.fr',
        phone: '03 87 12 11 44',
        websiteUrl: 'https://metzdanse.fr',
        addressLine1: '8 Rue du Grand Cerf',
        addressLine2: '',
        postalCode: '57000',
        city: 'Metz',
        country: 'France',
        latitude: 49.1203,
        longitude: 6.1778,
        imageUrl:
          'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Nancy Karting Club',
        description: 'Club de karting avec circuit homologué.',
        type: 'karting',
        email: 'contact@nancykarting.fr',
        phone: '03 83 41 87 22',
        websiteUrl: 'https://nancykarting.fr',
        addressLine1: '55 Rue Saint-Jean',
        addressLine2: '',
        postalCode: '54000',
        city: 'Nancy',
        country: 'France',
        latitude: 48.6921,
        longitude: 6.1844,
        imageUrl:
          'https://www.passionkart.fr/wp-content/uploads/2017/09/karting-nancy-oberlin-grand-est.jpg',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1509112756314-34a0badb29d4?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1509112756314-34a0badb29d4?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1509112756314-34a0badb29d4?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Caen Gymnastique Club',
        description: 'Club de gymnastique féminine et masculine.',
        type: 'gymnastics',
        email: 'contact@caengym.fr',
        phone: '02 31 06 55 77',
        websiteUrl: 'https://caengym.fr',
        addressLine1: '6 Rue de l’Église',
        addressLine2: '',
        postalCode: '14000',
        city: 'Caen',
        country: 'France',
        latitude: 49.1829,
        longitude: -0.3712,
        imageUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Grenoble Trail Running',
        description: 'Section running et trail en montagne.',
        type: 'running',
        email: 'trail@grenobleclub.fr',
        phone: '04 76 12 23 45',
        websiteUrl: 'https://grenobletrail.fr',
        addressLine1: '21 Avenue Alsace Lorraine',
        addressLine2: '',
        postalCode: '38000',
        city: 'Grenoble',
        country: 'France',
        latitude: 45.1885,
        longitude: 5.7245,
        imageUrl:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Clermont Aviron Club',
        description: 'Club d’aviron sur l’Allier pour débutants et confirmés.',
        type: 'rowing',
        email: 'contact@clermontaviron.fr',
        phone: '04 73 91 45 55',
        websiteUrl: 'https://clermontaviron.fr',
        addressLine1: '2 Quai Louis Barthou',
        addressLine2: '',
        postalCode: '63000',
        city: 'Clermont-Ferrand',
        country: 'France',
        latitude: 45.7772,
        longitude: 3.087,
        imageUrl:
          'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Amiens Baseball Club',
        description: 'Club de baseball et softball familial.',
        type: 'baseball',
        email: 'contact@amiensbaseball.fr',
        phone: '03 22 98 14 55',
        websiteUrl: 'https://amiensbaseball.fr',
        addressLine1: '18 Rue Lamarck',
        addressLine2: '',
        postalCode: '80000',
        city: 'Amiens',
        country: 'France',
        latitude: 49.8942,
        longitude: 2.2957,
        imageUrl:
          'https://images.unsplash.com/photo-1518615977005-a16606bde3a6?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1518615977005-a16606bde3a6?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1518615977005-a16606bde3a6?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1518615977005-a16606bde3a6?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Limoges Basket Association',
        description: 'Club de basket amateur et universitaire.',
        type: 'basketball',
        email: 'contact@limogesbasket.fr',
        phone: '05 55 12 78 30',
        websiteUrl: 'https://limogesbasket.fr',
        addressLine1: '7 Rue de la Boucherie',
        addressLine2: '',
        postalCode: '87000',
        city: 'Limoges',
        country: 'France',
        latitude: 45.8336,
        longitude: 1.2611,
        imageUrl:
          'https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Brest Voile Club',
        description: 'Club de voile sur la rade de Brest.',
        type: 'sailing',
        email: 'info@brestvoile.fr',
        phone: '02 98 45 78 00',
        websiteUrl: 'https://brestvoile.fr',
        addressLine1: '1 Quai Malbert',
        addressLine2: '',
        postalCode: '29200',
        city: 'Brest',
        country: 'France',
        latitude: 48.3904,
        longitude: -4.4861,
        imageUrl:
          'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Avignon Rugby XIII',
        description: 'Club de rugby à XIII et formation jeune.',
        type: 'rugby',
        email: 'contact@avignon13.fr',
        phone: '04 90 32 11 55',
        websiteUrl: 'https://avignon13.fr',
        addressLine1: '11 Rue de la République',
        addressLine2: '',
        postalCode: '84000',
        city: 'Avignon',
        country: 'France',
        latitude: 43.9483,
        longitude: 4.8055,
        imageUrl:
          'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Perpignan Beach Volley',
        description: 'Sessions volley sur sable et entraînements indoor.',
        type: 'volleyball',
        email: 'contact@perpignanbeachvolley.fr',
        phone: '04 68 52 11 40',
        websiteUrl: 'https://perpignanbeachvolley.fr',
        addressLine1: '4 Boulevard des Pyrénées',
        addressLine2: '',
        postalCode: '66000',
        city: 'Perpignan',
        country: 'France',
        latitude: 42.6887,
        longitude: 2.8948,
        imageUrl:
          'https://images.unsplash.com/photo-1505765680444-25eb0e3c66f3?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1505765680444-25eb0e3c66f3?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1505765680444-25eb0e3c66f3?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1505765680444-25eb0e3c66f3?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Poitiers Ultimate Club',
        description: 'Club d’ultimate frisbee loisir et compétition.',
        type: 'ultimate',
        email: 'contact@poitiersultimate.fr',
        phone: '05 49 44 21 30',
        websiteUrl: 'https://poitiersultimate.fr',
        addressLine1: '9 Rue des Cordeliers',
        addressLine2: '',
        postalCode: '86000',
        city: 'Poitiers',
        country: 'France',
        latitude: 46.5802,
        longitude: 0.3404,
        imageUrl:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Saint-Étienne Triathlon',
        description: 'Entraînements triathlon et vélo dans le Pilat.',
        type: 'triathlon',
        email: 'contact@setriathlon.fr',
        phone: '04 77 32 12 09',
        websiteUrl: 'https://setriathlon.fr',
        addressLine1: '6 Rue des Frères Chappe',
        addressLine2: '',
        postalCode: '42000',
        city: 'Saint-Étienne',
        country: 'France',
        latitude: 45.4397,
        longitude: 4.3872,
        imageUrl:
          'https://images.unsplash.com/photo-1504306661006-343c1b0b1d1c?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1504306661006-343c1b0b1d1c?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1504306661006-343c1b0b1d1c?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1504306661006-343c1b0b1d1c?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Rouen Handball Club',
        description: 'Club de handball avec équipes jeunes et seniors.',
        type: 'handball',
        email: 'contact@rouenhandball.fr',
        phone: '02 35 98 22 30',
        websiteUrl: 'https://rouenhandball.fr',
        addressLine1: '12 Quai Jean Moulin',
        addressLine2: '',
        postalCode: '76000',
        city: 'Rouen',
        country: 'France',
        latitude: 49.4431,
        longitude: 1.0993,
        imageUrl:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
      {
        name: 'Besançon Escrime Académie',
        description: 'Club d’escrime pour fleuret et épée.',
        type: 'fencing',
        email: 'contact@besanconescrime.fr',
        phone: '03 81 61 23 44',
        websiteUrl: 'https://besanconescrime.fr',
        addressLine1: '3 Rue de la République',
        addressLine2: '',
        postalCode: '25000',
        city: 'Besançon',
        country: 'France',
        latitude: 47.2378,
        longitude: 6.0241,
        imageUrl:
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        bannerImageUrl:
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        logoImageUrl:
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        galleryUrls: [
          'https://images.unsplash.com/photo-1502810190503-830027c1a7da?auto=format&fit=crop&w=1200&q=80',
        ],
        isActive: true,
      },
    ]

    for (const club of clubs) {
      const tagsSet = new Set<string>()
      ;(club.tags ?? []).forEach((t) => tagsSet.add(normalizeTag(t)))
      if (club.type) tagsSet.add(normalizeTag(club.type))
      if (club.city) tagsSet.add(club.city.toLowerCase())
      const tags = Array.from(tagsSet)
        .filter(Boolean)
        .slice(0, 6)

      await Club.updateOrCreate(
        { name: club.name },
        {
          ...club,
          bannerImageUrl: club.bannerImageUrl ?? club.imageUrl,
          logoImageUrl: club.logoImageUrl ?? club.imageUrl,
          galleryUrls:
            club.galleryUrls && club.galleryUrls.length > 0
              ? club.galleryUrls
              : [club.imageUrl],
          openingHours: DEFAULT_OPENING_HOURS,
          tags,
        }
      )
    }
  }
}
