const choice = items => {
  return items[Math.round(Math.random() * (items.length - 1))];
}

const remove = (items, item) => {
  const match = items.includes(item) ? item : undefined;
  return items.filter(item => {
    return item !== match
  })
}

export { choice, remove };