import { Language } from "@/utils/utils";

export interface SideBarLinks {
  name: string;
  path: string;
}

export interface CardParams {
  title: string;
  bgImage: string;
  id: string;
}

export interface Toggle {
  name: string;
}

export interface ProjectDetail {
  params: any;
}

export interface SocialLinks {
  name: string;
  link: string;
}

export interface CodeBlock {
  component: React.ReactNode;
  lang: Language;
}
