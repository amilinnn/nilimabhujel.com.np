declare namespace Data {
  declare namespace PageData {
    interface Data {
      pages: Page[];
    }

    interface Page {
      intro: Intro;
      about: About;
      recentProject: RecentProject;
    }

    interface Intro {
      heading: string;
      subheading: string;
      description: string;
    }

    interface About {
      title: string;
      description: string;
      subDescription?: string;
      skillDescription: string;
      tool: Tool;
      profilePic: ProfilePic;
    }

    interface RecentProject {
      title: string;
      project: Project[];
    }
  }

  interface Tool {
    toolSet1: string[];
    toolSet2: string[];
  }

  interface ProfilePic {
    url: string;
  }

  interface Project {
    projectImage: ProjectImage;
    projectTitle: string;
    projectTool: string;
    projectUrl: string;
  }

  interface ProjectImage {
    url: string;
  }
}

export = Data;
