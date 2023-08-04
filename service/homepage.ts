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
          title
          description
          subDescription
          skillDescription
          tool {
            ... on ToolSection {
              id
              toolSet1
              toolSet2
            }
          }
          profilePic {
            url
          }
        }
      }
    }
  `;

  const res = await graphcms.request(query);
  return res.pages;
};
