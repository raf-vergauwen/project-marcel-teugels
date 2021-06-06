export default function (context) {
  if (!context.store.getters['auth/isLoggedIn']) {
    context.store.dispatch('auth/sessionLogin').then(() => {
      checkLogin(context);
    });
  } else {
    checkLogin(context);
  }
}

function checkLogin(context) {
  if (!context.store.getters['auth/isLoggedIn']) {
    context.redirect('/login');
  }

  if (!context.store.getters['auth/isAdmin']) {
    context.redirect('/login');
  }
}
