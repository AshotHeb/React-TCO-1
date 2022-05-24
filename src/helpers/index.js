export const generateQuery = (filterObject) => {
  // [['sort','created_at'] ,['search','barev']]]
  return Object.entries(filterObject).reduce((query, [field, value]) => {
    query += `${field}=${value}&`;
    return query;
  }, "");
};
