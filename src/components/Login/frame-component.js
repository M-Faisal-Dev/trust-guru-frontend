const FrameComponent = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-darkslateblue flex flex-row flex-wrap items-start justify-between pt-[59px] px-[60px] pb-[58.6px] box-border max-w-full gap-[20px] text-left text-3xl text-white font-poppins mq450:pt-[38px] mq450:pb-[38px] mq450:box-border mq750:pl-[30px] mq750:pr-[30px] mq750:box-border ${className}`}
    >
      <div className="h-[368px] w-[1440px] relative bg-darkslateblue hidden max-w-full" />
      <div className="w-[316.5px] flex flex-col items-start justify-start gap-[28.8px] text-11xl">
        <h2 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lg mq1050:text-5xl">
          Trust Your Guru
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-base font-inter">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-xs font-poppins">
            <div className="flex-1 relative leading-[171.5%] font-light z-[1]">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type ...
            </div>
          </div>
          <div className="relative leading-[28px] font-medium z-[1]">
            463 7th Ave, NY 10018, USA
          </div>
          <div className="relative leading-[28px] font-medium whitespace-nowrap z-[1]">
            +123 88 9900 456
          </div>
        </div>
      </div>
      <div className="w-[186.5px] flex flex-col items-start justify-start py-0 pr-[26px] pl-0 box-border gap-[16.8px]">
        <h3 className="m-0 relative text-inherit leading-[28.6px] font-semibold font-inherit shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-lg mq450:leading-[23px]">
          Useful Links
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] text-base font-inter">
          <div className="w-[30px] h-1 relative rounded-sm bg-white z-[1]" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="w-[81.9px] relative leading-[28px] font-medium flex items-center z-[1]">
              About Us
            </div>
            <div className="w-[147.2px] relative leading-[28px] font-medium flex items-center z-[1]">
              Ranking Courses
            </div>
            <div className="w-[118px] relative leading-[28px] font-medium flex items-center z-[1]">
              Best Courses
            </div>
            <div className="w-[136.7px] relative leading-[28px] font-medium flex items-center z-[1]">
              Best Courses
            </div>
            <div className="self-stretch relative leading-[28px] font-medium z-[1]">
              Best Courses
            </div>
          </div>
        </div>
      </div>
      <div className="w-[210.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[18.2px]">
        <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[23px]">
          Our Company
        </h3>
        <div className="w-[30px] h-1 relative rounded-sm bg-white z-[1]" />
        <div className="flex flex-col items-start justify-start gap-[10px] text-base font-inter">
          <div className="relative leading-[28px] font-medium inline-block min-w-[86px] z-[1]">
            Contact Us
          </div>
          <div className="relative leading-[28px] font-medium inline-block min-w-[129px] z-[1]">
            Become Teacher
          </div>
          <div className="relative leading-[28px] font-medium inline-block min-w-[34.3px] z-[1]">
            Blog
          </div>
          <div className="relative leading-[28px] font-medium inline-block min-w-[75.1px] z-[1]">
            Instructor
          </div>
          <div className="relative leading-[28px] font-medium inline-block min-w-[52.1px] z-[1]">
            Events
          </div>
        </div>
      </div>
      <div className="w-[326px] flex flex-col items-start justify-start gap-[21.5px] max-w-full">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-1 w-[30px] absolute !m-[0] bottom-[-1.9px] left-[0px] rounded-sm bg-white z-[1]" />
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[18.5px]">
            <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[23px]">
              Get In Touch
            </h3>
          </div>
        </div>
        <div className="self-stretch relative text-mini leading-[171.5%] font-light text-whitesmoke z-[1]">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s,
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[39.4px] mq450:gap-[20px]">
          <div className="flex flex-row items-end justify-start gap-[15px]">
            <img
              className="self-stretch w-2 relative max-h-full min-h-[17px] z-[1]"
              alt=""
              src="/vector-7.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
              <img
                className="w-4 h-[14.3px] relative z-[1]"
                alt=""
                src="/vector-8.svg"
              />
            </div>
            <img
              className="h-[15px] w-[15px] relative z-[1]"
              alt=""
              src="/vector-9.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="h-[15px] w-[15px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src="/vector-10.svg"
                />
                <div className="absolute top-[3px] left-[3.8px] w-[8.2px] h-[8.3px]">
                  <img
                    className="absolute top-[0.8px] left-[0px] w-[7.5px] h-[7.5px] z-[2]"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[7.2px] w-px h-px z-[3]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="h-[16.5px] w-[21px] relative min-h-[17px] z-[1]"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <div className="flex-[0.9556] bg-gray-100 flex flex-row items-end justify-start pt-[12.1px] px-3.5 pb-[8.6px] box-border gap-[15.5px] min-w-[102px] z-[1] mq450:flex-1">
              <img
                className="h-[52px] w-[157px] relative hidden"
                alt=""
                src="/vector1.svg"
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.4px]">
                <img
                  className="w-[16.8px] h-[18px] relative z-[2]"
                  alt=""
                  src="/vector-14.svg"
                />
              </div>
              <div className="w-[86.8px] flex flex-col items-start justify-start gap-[6.4px]">
                <img
                  className="w-[56.4px] h-2.5 relative z-[2]"
                  alt=""
                  src="/vector-15.svg"
                />
                <img
                  className="self-stretch h-[14.9px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                  alt=""
                  src="/vector-16.svg"
                />
              </div>
            </div>
            <div className="flex-1 bg-gray-100 flex flex-row items-start justify-start pt-[10.4px] px-[11px] pb-[10.8px] box-border gap-[12.2px] min-w-[105px] z-[1]">
              <img
                className="h-[51px] w-[161px] relative hidden"
                alt=""
                src="/vector2.svg"
              />
              <img
                className="h-[26px] w-[22px] relative z-[2]"
                alt=""
                src="/vector-17.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[6.4px]">
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <img
                    className="h-[8.7px] w-[96.2px] relative shrink-0 [debug_commit:bf4bc93] z-[2]"
                    alt=""
                    src="/vector-18.svg"
                  />
                </div>
                <img
                  className="w-[84.6px] h-[14.7px] relative shrink-0 [debug_commit:bf4bc93] z-[2]"
                  alt=""
                  src="/vector-19.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
