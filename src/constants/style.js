const styles = {
    paddingX : "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    boxWidth: "w-full xl:max-w-[1280px]",
    paragraph: "text-[14px] font-normmal font-poppins text-dimWhite",
    heading: "font-semibold font-poppins text-[40px] leading-[65px] text-white",
    flexstart: "flex justify-center items-start",
    flexCenter: "flex items-center justify-center"
};
  
export const layout = {
    section: `flex flex-col md:flex-row ${styles.paddingY}`,
    sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`
}

export default styles;