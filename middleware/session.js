export default function (context) {
  if (!context.store.getters['auth/isLoggedIn']) {
    context.store.dispatch('auth/sessionLogin');
  }
}
