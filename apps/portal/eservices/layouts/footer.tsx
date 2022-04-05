
import {IconBrandFacebook,IconBrandInstagram,IconBrandLinkedin,IconBrandTelegram,IconBrandTwitter,} from '@tabler/icons';
import React from 'react';
 
function Footer() {
  return (
    <footer className="tw-bg-primary md:tw-h-80">
      <div className="tw-bg-[#616990] tw-w-full tw-space-x-3 tw-h-8 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-sm">
        <div>About E-Services</div>
        <div className="tw-border-l tw-h-full"></div>
        <div>Contact Us</div>
        <div className="tw-border-l tw-h-full"></div>
        <div>FAQs</div>
        <div className="tw-border-l tw-h-full"></div>
        <div>Terms of Services</div>
        <div className="tw-border-l tw-h-full"></div>
        <div>Privacy Policy</div>
      </div>
      <div className="tw-pl-20 tw-pr-20 tw-pt-5 tw-items-center md:tw-h-64">
        <div className="tw-grid xs:tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4  tw-justify-items-center ">
          <div>
            <div className="tw-text-gray-300 tw-font-semibold">About E-SERVICES</div>
            <div className="tw-text-sm tw-text-justify tw-text-gray-200">
              Electronic Government Procurement (eGP) refers to the use of
              digital technologies to enable a more efficient and transparent
              exchange of information, and interactions and transactions between
              government and the business community in the procurement of goods,
              services and works. E-GP automates and streamlines the end-to-end
              public procurement process from the preparation and publication of
              annual procurement plans, managing the various tendering
              activities, and administration of contracts.
            </div>
          </div>
          <div>
            <div className="tw-text-gray-300 tw-font-semibold">CONTACT US</div>
            <div className="tw-text-sm tw-text-justfy tw-text-gray-200">
              <div>Public Procurement and Property Administration Agency</div>
              <div>6 killo In front of Yekatit 12 Referral Hospital</div>
              <div>P.O.Box 32387 Addis Ababa, Ethiopia</div>
              <div>Phone: +251-111248617</div>
              <div>Fax: +251111229835 / +251111248611</div>
              <div>Email: support@ppa.gov.et</div>
            </div>
          </div>
          <div>
            <div className="tw-text-gray-300 tw-font-semibold">
              IMPORTANT LINKS
            </div>
            <div className="tw-text-sm tw-text-justfy tw-text-gray-200">
              <div>www.ppa.gov.et</div>
              <div>www.mofed.gov.et</div>
              <div>www.mint.gov.et</div>
              <div>www.pmo.gov.et</div>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-space-x-4 tw-text-gray-200 tw-border-b tw-w-full tw-mt-3">
          <IconBrandFacebook />
          <IconBrandTelegram />
          <IconBrandTwitter />
          <IconBrandInstagram />
          <IconBrandLinkedin />
        </div>
        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-text-gray-200 tw-text-sm">
            Copyright © 2021, The Federal Public Procurement & Property
            Administration Agency. All Rights Reserved.
          </div>
          <div className="tw-text-gray-200 tw-text-sm">Powered by:</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
