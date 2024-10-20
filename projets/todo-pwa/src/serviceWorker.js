// Ce fichier est optionnel et vous permet de faire fonctionner votre application hors ligne
// Consultez https://bit.ly/CRA-PWA pour en savoir plus sur le service worker.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Ceci est exécuté pour vérifier si un service worker existe pour le site local
          checkValidServiceWorker(swUrl, config);
  
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'Cette application est servie via le cache par un service worker.'
            );
          });
        } else {
          // Enregistre le service worker pour un environnement de production
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Nouveau contenu disponible, il est prêt à être utilisé après le rechargement de la page
                console.log('Nouveau contenu disponible; rechargement de la page nécessaire.');
  
                // Exécute la fonction de callback si elle est définie
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // Contenu pré-caché pour une utilisation hors ligne
                console.log('Contenu mis en cache pour une utilisation hors ligne.');
  
                // Exécute la fonction de callback si elle est définie
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement du service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // Vérifie si le service worker existe et que nous récupérons un fichier JavaScript
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // Pas de service worker trouvé. Probablement une application différente. Rechargement de la page.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker trouvé. Procède à l'enregistrement normal.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'Pas de connexion Internet. L\'application fonctionne en mode hors ligne.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  