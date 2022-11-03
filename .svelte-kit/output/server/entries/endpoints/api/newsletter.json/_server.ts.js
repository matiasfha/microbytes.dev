import { j as json } from "../../../../chunks/index2.js";
import { gql, request } from "graphql-request";
const query = gql`
  query {
    allMicrobytes {
      course
      image {
        asset {
          altText
          url
        }
      }
      tagId
      descriptionRaw
    }
  }
`;
async function getCourses() {
  const { allMicrobytes } = await request("https://cyypawp1.api.sanity.io/v1/graphql/production/default", query);
  return allMicrobytes;
}
async function GET() {
  const courses = await getCourses();
  return json(courses);
}
export {
  GET,
  getCourses as default
};
