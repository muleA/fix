import React, { useEffect, useReducer, useState } from 'react';
import {
  Container,
  Nav,
  NavDropdown,
  Spinner,
  Dropdown,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from 'react-bootstrap';
import {
  IconBell,
  IconHelp,
  IconMenu2,
  IconPlus,
  IconSearch,
  IconUser,
  IconLayoutGrid,
  IconX,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RootState } from '../shared/store/app.store';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../shared/store/slices/locale/locale-slice';

interface Menu {
  name: string;
  href: string;
  active: boolean;
}
interface Props {
  navigation: Menu[];
}

function Header(props: Props) {
  const [covidInfo, setCovidInfo] = useState(true);
  const [serviceShow, setServiceShow] = useState(false);
  const locale = useSelector((state: RootState) => state.localeReducer.locale);
  const languages = useSelector(
    (state: RootState) => state.localeReducer.language
  );
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale,()=>console.log('language changed'));
  }, [i18n, locale]);
  return (
    <div className="">
      <div className="flex items-center bg-white px-3 h-11">
        <div>
          <div className="position-relative flex items-stretch ">
            <div className="">
              <Image
                alt="logo"
                src={'/../public/assets/img/eserviceLogo.png'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <strong className="text-brand nav-brand align-middle">
              <h2>eService</h2>
            </strong>
          </div>
          <div className="flex items-center">
            <div
              onMouseEnter={() => setServiceShow(true)}
              onMouseLeave={() => setServiceShow(false)}
            >
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="border-0"
                size='sm'
              >
             Federal
              </Dropdown.Toggle>
              <Dropdown.Menu show={serviceShow}>
                <Dropdown.Header>Regions</Dropdown.Header>
                <Dropdown.Item eventKey="2">Afar</Dropdown.Item>
                <Dropdown.Item eventKey="3">Amhara</Dropdown.Item>
                <Dropdown.Item eventKey="3">Oromia</Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>
        </div>
        <div className="flex col-sm-6 container">
          <InputGroup className="px-3 self-end">
            <Dropdown className="col-sm-1 px-3">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="border-end-0 border-3 border-primary btn-pill border"
              >
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FormControl
              placeholder="Search here"
              aria-label="Search here"
              aria-describedby="basic-addon2"
              as={'input'}
              className="border-start-1 border-3 border-primary border"
            />
            <Button
              variant="brand"
              className="bg-primary btn-pill text-white"
              size="sm"
              id="button-addon2"
            >
              <IconSearch size={'lg'} />
            </Button>
          </InputGroup>
        </div>
        <div className="justify-content-end container flex px-3 ">
          <div className="flex items-stretch">
            <div className="self-center">
              <IconHelp
                fontVariant={'light'}
                className=" text-dark bg-opacity-25"
              />
            </div>
            <div className="position-relative ml-2 self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell  text-dark bg-opacity-25"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
              </svg>
              <span
                aria-setsize={10}
                className="badge badge-pill bg-red position-absolute ms-2 start-100 translate-middle border-light top-0 border p-2"
              >
                6+
              </span>
            </div>
          </div>
          <div className="ml-7">
            <Dropdown className="flex self-center border-0">
              <Dropdown.Toggle
                variant="light"
                className="text-dark border-0"
                id="dropdown-basic"
              >
                Hi Ahadu Mekonnen
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="self-center">
            <IconMenu2 />
          </div>
        </div>
      </div>
      <div
        className="text-dark border-top border-bottom mt-3  flex  items-center bg-white px-3"
        style={{ height: '40px' }}
      >
        <div className="container-fluid flex justify-start">
          {props.navigation.map((menu) => {
            return (
              <Link href={menu.href} key={menu.name}>
                <a className="ml-3 text-primary">
                  <strong>{menu.name}</strong>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="container-fluid flex justify-end ">
          <div className="self-center">
            <Dropdown className="">
              <Dropdown.Toggle
                className="text-dark border-0"
                variant="light"
                id="dropdown-basic"
              >
                { languages.map((lng)=>{
                 if(lng.locale === locale)
                 return(lng.name);
                })
                }
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.map((lng) => {
                  return (
                    <Dropdown.Item
                      onClick={() => dispatch(setLocale(lng.locale))}
                      key={lng.locale}
                    >
                      {lng.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      {covidInfo && (
        <div className="w-100 mb-3 flex  h-10 justify-between bg-indigo-900  opacity-75">
          <div className=" container-fluid text-white   flex justify-center  self-center">
            <div> Here is something that you might like to know.</div>
          </div>
          <div className="">
            <div>
              <IconX className='text-white' onClick={() => setCovidInfo(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
