type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _ref: string;
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
  socialIconName: string;
  socialIconUrl: string;
  socialIconButtonIcon: Image;
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
interface FilterTabs extends Base {
  title: string;
  tabColor: string;
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
  tagEmptyPargraph: string;
  tagEmptyPargraphIcon: Image;
  classNameProjectSectionTitleColor: string;
  tabFilter: FilterTabs[];
}
export interface ResourceSection extends Base {
  resourceSectionTitle: string;
  resource: Resource[];
  shortDescription: string;
  tagEmptyPargraph: string;
  tagEmptyPargraphIcon: Image;
  classNameResourceSectionTitleColor: string;
  tabFilter: FilterTabs[];
}
export interface Tags extends Base {
  title: string;
  classNameTagColor: string;
}
export interface Project extends Base {
  publishedAt: string;
  difficulty: number;
  mainImage: Image;
  searchColor: string;
  body: Block[];
  projectShortDescriptionPage: Block[];
  stacks: Stack[];
  tags: string[];
  categoryTag: string[];
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
  tagTitleColor: string;
  author: Author;
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
export interface Resource extends Base {
  publishedAt: string;
  difficulty: number;
  mainImage: Image;
  searchColor: string;
  body: Block[];
  resourceShortDescriptionPage: Block[];
  stacks: Stack[];
  tags: string[];
  categoryTag: string[];
  categories: Category[];
  title: string;
  resourceUrl: string;
  sourceUrl: string;
  resourceTag: string;
  slug: Slug;
  description: string;
  resourceTitleColor: string;
  tagBgColor: string;
  customButton: ButtonLink[];
  assetFile: AssetFile[];
  resourceDetails: ResourcesDetailsCard[];
  buttonBgColor: string;
  buttonHoverBgColor: string;
  buttonIcon: Image;
  buttonTitle: string;
  statusTitle: string;
  statusName: string;
  statusColor: string;
  statusClassName: string;
  resourceOverlayImageClassNmae: string;
  tagTitleColor: string;
  author: Author;
}
export interface ResourcesDetailsCard extends Base {
  resourceDetailsTitleCardIcon: Image;
  resourceDetailsStatusCardIcon: Image;
  resourceDetailsCategoryCardIcon: Image;
  resourceDetailsCreatedDateCardIcon: Image;
  resourceDetailsAuthorCardIcon: Image;
  resourceDetailsAuthorBioCardIcon: Image;
  resourceDetailsShortDescriptionCardIcon: Image;
  resourceDetailsTagCardIcon: Image;
  title: string;
}

export interface Contact extends Base {
  formTitle: string;
  formTitleColor: string;
  formShortDescription: string;
  socials: SocialIcons[];
  url: string;
}

export interface Comment extends Base {
  email: string;
  approved: boolean;
  comment: string;
  childComments: Comment[];
  childCommentsEmojis: Emoji[];
  userImage: image;
  name: string;
}

export interface Emoji extends Base {
  commentId: string;
  counter: number;
  _key: string;
  emojiImage: image;
  emoji: string;
}
export interface DefaultNotFoundPage extends Base {
  errorImage: Image;
  title: string;
  url: string;
  buttonHoverBg: string;
  buttonBg: string;
  description: string;
  buttonTitel: string;
  subtitle: string;
  buttonTitelClassName: string;
}
export interface PrivacyPolicy extends Base {
  title: string;
  body: Block[];
}
export interface TermsAndConditions extends Base {
  title: string;
  body: Block[];
}
export interface GallerySection extends Base {
  shortDescription: string;
  gallery: Gallery[];
  classNamegallerySectionTitleColor: string;
  gallerySectionTitle: string;
}
export interface Gallery extends Base {
  slug: Slug;
  artImage: Image;
  title: string;
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
  buttonHoverBgColor: string;
  buttonTitle: string;
  buttonIcon: Image;
  url: string;
  // buttonBackgroundColor:CustomColor;
}
export interface CustomColor {
  label: string;
  value: string;
}
export interface AssetFile extends Base {
  assetFile: AssetClass;
  name: string;
  fileId: string;
  buttonIcon: Image;
  buttonHoverBgColor: string;
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
