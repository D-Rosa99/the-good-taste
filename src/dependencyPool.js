const Singleton = (() => {
  let instancePool = {};

  const createInstance = (entity) => {
    const object = new entity();
    return object;
  };

  return {
    getInstance: (entity) => {
      if (!instancePool[entity]) {
        instancePool[entity] = createInstance(entity);
      }

      return instancePool[entity];
    },
  };
})();

module.exports = Singleton;
