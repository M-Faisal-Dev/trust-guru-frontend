import React from 'react';
import Head from './Head';
import Tablebody from './Tablebody';

const Lorenzo = () => {
  return (
    <div className='xl:px-0 xxs:px-5'>
    <div className='max-w-[1136px] lg:px-[50px] md:px-6 xxs:px-5 mx-auto bg-whitee shadow-neon rounded-[10px] pb-[38px]
    pt-[43px] mt-[-170px]'>
      <div className='flex sm:flex-row xxs:flex-col sm:items-start xxs:items-center gap-[45px] w-full'>
        {/* one */}
        <div>
          <img src="/smiling.png" alt="smiling" />
        </div>
        {/* two */}
        <div className='w-full'>
          <div className='flex   justify-between'>
            <div>
              <h2 className='text-black md:text-2xl sm:text-xl xxs:text-lg font-medium'>Lorenzo Armentano</h2>
              <p className='text-black text-base font-normal pt-2'>Expert Laravel Pro</p>
            </div>
            <div>
              <img src="/message.svg" alt="message" />
            </div>
          </div>
          <p className='text-black md:text-base xxs:text-sm font-light pt-[36px] max-w-[671px]'>
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur Vesity
            bulum a nec odio aea the dumm ipsumm ipsum that dolocons sus suada and farit
            consectetur elit.
          </p>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-neon bg-whitee mt-[56px]">
        <table className="xl:w-full lg:w-[1040px] md:w-full sm:w-[768px] xxs:w-[600px]  lg:text-xl md:text-lg xxs:text-sm font-normal text-center rtl:text-right text-blackk">
          <thead className="lg:text-[22px] md:text-base xxs:text-sm bg-white text-blackk font-medium uppercase shadow-neon">
            <tr>
              <Head tablehead='P.' />
              <Head tablehead='Truster' />
              <Head tablehead='Total' />
              <Head tablehead='Last Month' />
              <Head tablehead='Av.Score' />
              <Head tablehead='No.Clients' />
            </tr>
          </thead>
          <tbody>
            <tr className="bg-whitee shadow-neon">
              <Tablebody tablebody='01' />
              <Tablebody tablebody='Lorenzo Armentano' />
              <Tablebody tablebody='192' />
              <Tablebody tablebody='24' />
              <Tablebody tablebody='7.1' />
              <Tablebody tablebody='27' />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Lorenzo;
