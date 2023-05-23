import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export function coursesNormalizer(data) {
  const normalizedData = normalize(data, [course]);
  return {
    entities: normalizedData.entities,
    result: normalizedData.result,
  };
}
