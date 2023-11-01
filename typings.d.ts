type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  postDescription: string;
  titelColor: string;
  postTag: string;
  tagBgColor: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
  codeInput: Code[];
}
interface Author extends Base {
  bio: Block[];
  authorImage: Image;
  name: string;
  slug: Slug;
}

interface SocialIcons extends Base {
  name: string;
  url: string;
  fgcolor: string;
  bgcolor: string;
}
interface Image {
  _type: "image";
  asset: Reference;
}
interface Reference {
  _ref: string;
  _type: "reference";
}
interface Slug {
  _type: "slug";
  current: string;
}
interface Url {
  _type: "url";
}
interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
interface Category extends Base {
  description: string;
  title: string;
}

interface Title {
  _type: "string";
  current: string;
}
export interface GeneralCategory extends Base {
  color: string;
  description: string;
  stack: null;
  stacks: Stack[];
  title: string;
}

export interface Stack extends Base {
  mainImage: Image;
  skill: number;
  title: string;
}
export interface Resume extends Base {
  description: string;
  year: string;
}
export interface ProjectSection extends Base {
  projectSectionTitle: string;
  project: Project[];
  shortDescription: string;
  classNameProjectSectionTitleColor: string;
}
export interface Tags extends Base {
  title: string;
  classNameTagColor: string;
}
export interface Project extends Base {
  publishedAt: string;
  difficulty: number;
  mainImage: Image;
  authorImage: Image;
  authorName: string;
  authorSlug: Slug;
  body: Block[];
  authorBio: Block[];
  projectShortDescriptionPage: Block[];
  stacks: Stack[];
  tags: string[];
  categories: Category[];
  title: string;
  projectUrl: string;
  sourceUrl: string;
  projectTag: string;
  slug: Slug;
  description: string;
  projectTitleColor: string;
  tagBgColor: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
  projectDetails: ProjectsDetailsCard[];
  buttonBgColor: string;
  buttonHoverBgColor: string;
  buttonIcon: Image;
  buttonTitle: string;
  statusTitle: string;
  statusName: string;
  statusColor: string;
  statusClassName: string;
  projectOverlayImageClassNmae: string;
}
export interface ProjectsDetailsCard extends Base {
  projectDetailsTitleCardIcon: Image;
  projectDetailsStatusCardIcon: Image;
  projectDetailsCategoryCardIcon: Image;
  projectDetailsCreatedDateCardIcon: Image;
  projectDetailsAuthorCardIcon: Image;
  projectDetailsAuthorBioCardIcon: Image;
  projectDetailsShortDescriptionCardIcon: Image;
  projectDetailsTagCardIcon: Image;
  title: string;
}

export interface Contact extends Base {
  description: string;
  mainImage: Image;
  name: string;
  shortDesColor: string;
  nameColor: string;
  shortDescription: string;
  socials: Social[];
  url: string;
}
export interface SectionParagraph extends Base {
  aboutParagraph: string;
  contactParagraph: string;
  footerParagraph: string;
  heroParagraph: string;
  projectsParagraph: string;
  blogsParagraph: string;
  technologiesParagraph: string;
  videosParagraph: string;
  communitysParagraph: string;
}
export interface Video extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  description: string;
  mainImage: Image;
  slug: Slug;
  tagBgColor: string;
  titelColor: string;
  title: string;
  videoTag: string;
  videoUrl: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
}
export interface ButtonLink extends Base {
  buttonBgColor: string;
  buttonHoverBgColor:string;
  buttonTitle: string;
  buttonIcon: Image;
  url: string;
  
}
export interface AssetFile extends Base {
  assetFile: AssetClass;
  name: string;
  fileId: string;
  buttonIcon: Image;
  buttonHoverBgColor:string;
  buttonBgColor: string;
}
export interface AssetClass {
  _type: string;
  asset: AssetRef;
}

export interface AssetRef {
  _ref: string;
  _type: string;
}
export interface Code extends Base {
  code: CodeClass;
  codeName: string;
}

export interface CodeClass {
  _type: string;
  code: string;
  language: string;
}
export interface Community extends Base {
  author: Author;
  categories: Category[];
  communityTag: string;
  communityUrl: string;
  customButton: ButtonLink[];
  description: string;
  mainImage: Image;
  CoverImage: Image;
  slug: Slug;
  tagBgColor: string;
  titelColor: string;
  title: string;
  body: Block[];
}

export interface Status extends Base {
  name: string;
  title: string;
  color: string;
  className: string;
}
export interface Hero extends Base {
  classNameHeroTitleColor: string;
  classNameHeroHireMeButtonColor: string;
  classNameResumeMeButtonColor: string;
  skillTowTitle: string;
  skillOneTitle: string;
  developerName: string;
  skillFiveTitle: string;
  skillthreeTitle: string;
  shortBio: string;
  status: Status[];
  skillfourTitle: string;
}
export interface LogoCarousel extends Base {
  brandname: string;
  mainImage: Image;
  className: string;
}
export interface Resume extends Base {
  name: string;
  title: string;
  fileId: string;
  assetFile: AssetClass;
}
export interface About extends Base {
  aboutSectionTitle: string;
  shortBio: string;
  stempImage: Image;
  mainImage: Image;
  classNameAboutTitleColor: string;
  skillsTab: SkillsTab[];
  educationTab: EducationTab[];
  certificateTab: CertificateTab[];
}
export interface SkillsTab extends Base {
  skillName: string;
  skillProgress: number;
  skillProgressBg: number;
  classNameSkillProgressBgColor: string;
}
export interface EducationTab extends Base {
  educationName: string;
  educationInfo: string;
  educationlistItemImage: Image;
}
export interface CertificateTab extends Base {
  certificateUrl: Slug;
  certificateName: string;
  certificateInfo: string;
  classNameCertificateUrlColor: string;
  certificatelistItemImage: Image;
}
