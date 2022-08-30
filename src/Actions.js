export const getAppInfo = () => {
  return (dispatch, getState) => {
    const state = getState();
    const dataFetched = state?.fetched || false;
    const dataFetching = state?.fetching || false;
    console.log('new value ', state);
    if (!dataFetched && !dataFetching) {
      dispatch({ type: 'DATA_FETCHING', value: true });
      fetch('https://api.opensea.io/api/v1/assets?format=json')
        .then((result) => result.json())
        .then((data) => {
          dispatch({ type: 'ADD_DATA_TO_APP', data: data?.assets || [] });
        })
        .finally(() => {
          dispatch({ type: 'DATA_FETCHING', value: false });
          dispatch({ type: 'DATA_FETCHED', value: true });
        });
    }
  };
};
