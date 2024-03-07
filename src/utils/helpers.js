// googleAuth.js

// Function to initialize Google OAuth
export function initGoogleAuth(clientId, scope) {
  return new Promise((resolve, reject) => {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: clientId,
          scope: scope
        })
        .then((auth2) => {
          resolve(auth2)
        })
        .catch((error) => {
          reject(error)
        })
    })
  })
}

// Function to sign in with Google
export function signInWithGoogle(auth2) {
  return new Promise((resolve, reject) => {
    auth2
      .signIn()
      .then((user) => {
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
