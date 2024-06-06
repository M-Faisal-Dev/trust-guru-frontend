const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-darkslateblue flex flex-row items-start justify-between pt-[17px] px-[60px] pb-[18px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-11xl text-white font-poppins mq750:pl-[30px] mq750:pr-[30px] mq750:box-border ${className}`}
    >
      <div className="h-20 w-[1440px] relative bg-darkslateblue hidden max-w-full" />
      <h2 className="m-0 relative text-inherit font-medium font-inherit whitespace-nowrap z-[1]">
        TrustYourGuru
      </h2>
      <nav className="m-0 w-[499px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full mq1050:hidden">
        <nav className="m-0 w-[429px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-lg text-white font-poppins">
          <div className="relative font-medium inline-block min-w-[54px] z-[1]">
            Home
          </div>
          <div className="relative inline-block min-w-[81px] whitespace-nowrap z-[1]">
            About Us
          </div>
          <div className="relative inline-block min-w-[74px] z-[1]">
            Courses
          </div>
          <div className="relative inline-block min-w-[56px] z-[1]">Pages</div>
          <div className="relative inline-block min-w-[40px] z-[1]">Blog</div>
        </nav>
      </nav>
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <button className="cursor-pointer [border:none] pt-2 px-5 pb-[9px] bg-white rounded-sm flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-100">
          <div className="h-10 w-[147px] relative rounded-sm bg-white hidden" />
          <div className="relative text-mini font-poppins text-darkslateblue text-left inline-block min-w-[107px] z-[1]">
            Start Free Trail
          </div>
        </button>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
