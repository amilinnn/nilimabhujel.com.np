import { gql } from "graphql-request";
import getGraphcms from "@/utils/config";

const graphcms = getGraphcms();

export const getHomePageData = async () => {
  const query = gql`
    query {
      pages {
        intro {
          heading
          subheading
          description
        }
        about {
          description
          subDescription
          skillDescription
          skills {
            skill
          }
        }
      }
    }
  `;

  const res = await graphcms.request(query);
  return res.pages;
};
