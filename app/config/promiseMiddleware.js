const promiseMiddleware = () => next => (action) => {
  const { payload, type, params } = action;

  if (payload !== 0 && !payload) return next(action);

  const SUCCESS = `${type}_SUCCESS`;
  const REQUEST = `${type}_REQUEST`;
  const FAILURE = `${type}_FAIL`;

  next({ type: REQUEST, params });

  if (typeof payload.then === 'function') {
    return payload.then((response) => {
      next({ data: response.data.data || response.data, params, type: SUCCESS });
      return true;
    }).catch((error) => {
      let err;

      if (error.data && error.data.errors) {
        err = error.data.errors;
      } else {
        err = error;
      }

      next({ error: err, params, type: FAILURE });
      return false;
    });
  }

  next({ payload, params, type: SUCCESS });
  return true;
};

export default promiseMiddleware;
