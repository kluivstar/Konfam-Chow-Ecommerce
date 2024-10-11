const styles = {
    boxWidth: "w-full xl:max-w-[1280px]",
    paragraph: "text-[14px] font-normmal font-poppins text-black",

    heading: "font-semibold font-poppins text-[50px] leading-[50px] sm:leading-[80px] text-black sm:text-[70px]",

    flexstart: "flex justify-center items-start",
    flexCenter: "flex items-center justify-center",

    paddingX : "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex flex-col md:flex-row ${styles.paddingY}`,
    sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`
}

export default styles;