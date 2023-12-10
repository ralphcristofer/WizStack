import base from './base';

export const layout = {
    section: `flex md:flex-row flex-col ${base.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${base.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${base.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${base.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${base.flexStart} flex-col`,
    sectionInfoReverse: `flex-1 ${base.flexStart} flex-col-reverse`,

    sectionHeading: `text-center md:text-left ${base.heading2}`,
    sectionParagraph: `text-center md:text-left ${base.paragraph}`,

    sectionImgContainer: `w-full h-full absolute top-0 left-0`,
    sectionImgContainerReverse: `w-full h-full absolute top-0 right-0`,

};