// Pure functions
export function capitalize(string) {
  if (typeof string !=='string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const status = function(response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText));
  }
  return Promise.resolve(response);
};

export const json = function(response) {
  return response.json();
};
