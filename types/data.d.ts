declare namespace Data {
  declare namespace PageData {
    interface Data {
      pages: Page[];
    }

    interface Page {
      intro: Intro;
      about: About;
    }

    interface Intro {
      heading: string;
      subheading: string;
      description: string;
    }

    interface About {
      description: string;
      subDescription: string
      skillDescription: string
      skills: {
        skill: string[];
      };
    }
  }
}

export = Data;
