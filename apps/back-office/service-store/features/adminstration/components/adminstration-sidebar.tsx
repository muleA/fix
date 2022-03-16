import { Card } from '@mantine/core';
import {
  IconLicense,
  IconTags,
  IconLanguage,
  IconLayoutGrid,
} from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
const AdminstrationSideBar = () => {
  const router = useRouter();
  const regextag = /\/service-store\/adminstration\/detail\/*tag\/*/;
  const regexpolicy = /\/service-store\/adminstration\/detail\/policy\/*/;
  const regexlanguage = /\/service-store\/adminstration\/detail\/language\/*/;
  const regexcategory = /\/service-store\/adminstration\/detail\/category\/*/;
  return (
    <Card className="tw-w-3/12 tw-ml-0 tw-z-50" shadow="sm" padding="lg">
      <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
        <h2 className="tw-text-lg">Menu</h2>
      </Card.Section>
      <div className="tw-overflow-y-auto tw-py-1 tw-px-1  tw-rounded tw-z-0">
        <ul className="tw-space-y-2">
          <li>
            <Link href="/service-store/adminstration/policy">
              <a
                className={`tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal 
            tw-text-gray-900 tw-rounded-lg hover:tw-no-underline ${
              router.pathname === '/service-store/adminstration/policy' ||
              router.pathname === '/service-store/adminstration/new-policy' ||
              router.pathname.match(regexpolicy)
                ? ' tw-bg-[#e2e8f0]'
                : ''
            }`}
              >
                <IconLicense />
                <span className="tw-ml-0">Terms and Policy</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/service-store/adminstration/service-tags">
              <a
                className={`tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal 
            tw-text-gray-900 tw-rounded-lg hover:tw-no-underline  ${
              router.pathname === '/service-store/adminstration/service-tags' ||
              router.pathname === '/service-store/adminstration/new-tag' ||
              router.pathname.match(regextag)
                ? ' tw-bg-[#e2e8f0]'
                : ''
            }`}
              >
                <IconTags />
                <span className="tw-ml-0">Service Tags</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/service-store/adminstration/service-category">
              <a
                className={`tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal 
            tw-text-gray-900 tw-rounded-lg hover:tw-no-underline${
              router.pathname ===
                '/service-store/adminstration/service-category' ||
              router.pathname === '/service-store/adminstration/new-category' ||
              router.pathname.match(regexcategory)
                ? ' tw-bg-[#e2e8f0]'
                : ''
            } `}
              >
                <IconLayoutGrid />
                <span className="tw-ml-0">Service Category</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/service-store/adminstration/supported-languages">
              <a
                className={`tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal 
            tw-text-gray-900 tw-rounded-lg hover:tw-no-underline  ${
              router.pathname === '/service-store/adminstration/supported-languages' ||
              router.pathname === '/service-store/adminstration/new-language' ||
              router.pathname.match(regexlanguage)
                ? ' tw-bg-[#e2e8f0]'
                : ''
            }`}
              >
                <IconLanguage />
                <span className="tw-ml-0">Supported Languages</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default AdminstrationSideBar;
