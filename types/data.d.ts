declare namespace Data {
  declare namespace PageData {
    interface MetaData {
      metaTags: MetaTags;
    }

    interface Data {
      pages: Page[];
    }

    interface Datas {
      metaTags: MetaTags[];
      pages: Page[];
    }

    interface MetaTags {
      author: string
      description: string
      title: string
      websiteUrl: string
      keywords: string
      googleSiteId: string
    }

    interface Page {
      intro: Intro;
      about: About;
      recentProject: RecentProject;
      contact: Contact;
    }

    interface Intro {
      heading: string;
      subheading: string;
      description: string;
      resumeUrl: string
      ctaTitle: string
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
    
    interface Tool {
      toolSet1: string[];
      toolSet2: string[];
    }

    interface ProfilePic {
      url: string;
    }

    interface Contact {
      title: string;
      description: string;
      emailUrl: string;
      dribbbleUrl: string;
      behanceLink: string;
      linkedinUrl: string;
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
