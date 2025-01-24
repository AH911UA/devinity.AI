// images
declare module "*.svg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.webp";
declare module "*.css";

// video
declare module "*.gif";
declare module "*.mp4";

// css
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
