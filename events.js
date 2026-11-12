/*
  Sonar Sessions : la liste des événements, partagée par la page d'accueil et la page du QR code.
  Pour ajouter un événement : copier une ligne, changer la date (AAAA-MM-JJ) et les infos.
  groupe:false = pas de groupe précis (jam session) -> pas de bouton « Découvrir ».
  lienDon : lien de paiement Bancontact Pro propre à l'événement (sinon LIEN_DON_GENERAL).
*/
const SESSIONS = [
  { photo:"/assets/photos/2027-02-04-jam.jpg", date:"2026-10-15", serie:"Let's Jam", artiste:"Jam session", groupe:false, lieu:"", heure:"", prix:"Prix libre", lienGroupe:"", lienDon:"" },
  { photo:"/assets/photos/2026-11-08-vipers-duo.jpg", date:"2026-11-08", serie:"Let's Swing", artiste:"The Viper's Rhythm Band", groupe:true, lieu:"Brasserie Sauvenière, Liège", heure:"Dès 15h30", prix:"10 €", lienGroupe:"https://thevipersrhythmband.com/", lienDon:"" },
  { photo:"/assets/photos/2027-02-04-jam.jpg", date:"2026-12-10", serie:"Let's Jam", artiste:"Jam session", groupe:false, lieu:"Le 5 Bar, rue Souverain-Pont 26, Liège", heure:"", prix:"", lienGroupe:"", lienDon:"" },
  { photo:"/assets/photos/2026-12-13-sam-gerstmans-trio.jpg", date:"2026-12-13", serie:"Let's Swing", artiste:"Sam Gerstmans Trio", groupe:true, lieu:"Brasserie Sauvenière, Liège", heure:"Dès 15h30", prix:"10 €", lienGroupe:"https://samgerstmans.be/", lienDon:"" },
  { photo:"/assets/photos/2027-01-22-vipers-rhythm-band.jpg", date:"2027-01-22", serie:"Release d'album", artiste:"The Viper's Rhythm Band", groupe:true, lieu:"Brasserie Sauvenière, Liège", heure:"21h", prix:"10 €", lienGroupe:"https://thevipersrhythmband.com/", lienDon:"" },
  { photo:"/assets/photos/2027-02-04-jam.jpg", date:"2027-02-04", serie:"Let's Jam", artiste:"Jam session", groupe:false, lieu:"Brasserie Sauvenière, Liège", heure:"20h30", prix:"Prix libre", lienGroupe:"", lienDon:"" },
];
const LIENS = [
  { label:"Suivre Sonar sur Instagram", url:"https://www.instagram.com/sonar_artists/", btn:"Suivre" },
  { label:"Suivre Sonar sur Facebook", url:"https://www.facebook.com/sonar.management", btn:"Suivre" },
  { label:"Tous les événements Sonar", url:"https://sonarsessions.sonarartists.be/", btn:"Voir" },
];
const IBAN = "BE56 1030 5642 6988";  // Crelan, Sonar Artists ASBL
const LIEN_DON_GENERAL = "";  // lien Bancontact Pro (montant libre) utilisé si l'événement n'a pas le sien
/* lienDon : lien de paiement (ex. Bancontact Pro). Vide = on affiche le compte à copier. */
// Formulaire Brevo « Sonar Sessions - Prochaines dates » (liste B, double confirmation)
const LIEN_NEWSLETTER = "https://a6c91df1.sibforms.com/serve/MUIFACmn5wgT2v_yXXq08RS406osw01RMf8qUoOTh86e0vrt4J-hNwgrW8Dg7Q83zmUuosIi2jzeP3XQoPcbg8wzx2MJFCLGkNAe2lQYhxsBfveUIrvhBY6NKHmbGWiFgi_I89bGWZVYdRHppbRk6ISkGYfizR-zRVfy_3j6Vx3hWqtsINaYRE_3VWr8x36-1dDY-U3nUcu__-gzPQ==";
