import axios from 'axios';

/* -----------------    CONSTANTS    ------------------ */
export const SET_ORDER_LIST = 'SET_ORDER_LIST';
export const SET_SINGLE_ORDER = 'SET_SINGLE_ORDER';

/* -----------------    ACTION-CREATORS    ------------------ */
const settingOrderList = (orders) => {
  return {
    type: SET_ORDER_LIST,
    orderList: orders
  }
}

const setSingleOrder = (order) => {
  return {
    type: SET_SINGLE_ORDER,
    currentOrder: order
  }
}

/* -----------------    THUNK ACTION CREATORS    ------------------ */

// load all orders
export const loadAllUserOrders = () => {
    return dispatch => {
        axios.get('/api/auth/whoami')
            .then(res => res.data)
            .then(user => dispatch(settingOrderList(user.orders)));
    };
};

// load single orders
export const loadSingleOrder = (orderId) => {
  return dispatch => {
    axios.get(`/api/orders/${orderId}`)
        .then(res => res.data)
        .then(order => dispatch(setSingleOrder(order)));
  };
};

// ADMIN loadAllUserOrders
export const loadAllOrders = () => {
  return dispatch => {
    axios.get('/api/orders')
      .then(res => res.data)
      .then(orders => dispatch(settingOrderList(orders)))
  };
}
