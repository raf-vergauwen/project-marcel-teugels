export default function (context) {
  const orderId = context.route.params.orderId;

  context.store.dispatch('orders/getOrder', orderId).then(() => {
    const order = context.state.orders.order;

    if (order.user_id) {
      if (context.store.state.auth.user.id !== order.user_id) {
        context.redirect('/');
      }
    } else if (order.guest_id) {
      if (sessionStorage.getItem('guest_id') !== order.guest_id) {
        context.redirect('/');
      }
    }
  });
}
