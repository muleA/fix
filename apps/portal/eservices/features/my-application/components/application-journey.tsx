import React from 'react';
import { Badge, Button, Container, ListGroup } from 'react-bootstrap';
import { List } from '@mantine/core';
import Link from 'next/link';
import { IconChevronRight, IconCircles } from '@tabler/icons';
import {
  Group,
  ThemeIcon,
  Text,
  SimpleGrid,
  Accordion,
  useAccordionState,
  useMantineTheme,
} from '@mantine/core';
import {
  IconCircleCheck,
  IconStepInto,
  IconClock,
  IconCoin,
} from '@tabler/icons';

function ApplicationJourney() {
  const [state, handlers] = useAccordionState({ total: 4, initialItem: 0 });
  const theme = useMantineTheme();
  const breakpoints = [{ maxWidth: 'sm' as const, cols: 1 }];

  return (
    <div className="lg:tw-flex md:tw-flex lg:tw-space-x-10 md:tw-space-x-7 tw-mt-3 tw-mb-3">
      <div className="lg:tw-h-screen md:tw-h-screen sm:tw-w-full xs:tw-w-full xs:tw-container-fluid  tw-borderd lg:tw-w-1/4 md:tw-w-1/4 sm:tw-container tw-mb-3 tw-p-3">
        <div className="tw-flex tw-justify-center tw-items-center tw-bordered tw-m-2 ">
          Related Services
        </div>
        <ListGroup as="ul" className="tw-space-y-3 tw-w-full tw-ml-3 tw-mt-3">
          <Link href={'/'}>
            <a className="tw-border-l-4 tw-border-l-yellow-400 hover:tw-shadow">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between border-0  align-items-start tw-h-10 group"
              >
                <div className="ms-2 me-auto align-self-center ">
                  Cras justo odio
                </div>
              </ListGroup.Item>
            </a>
          </Link>
          <Link href={''}>
            <a className="tw-border-l-4 tw-border-l-rose-400 hover:tw-shadow">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between border-0 align-items-start tw-h-10 group"
              >
                <div className="ms-2 me-auto align-self-center">Cras justo odio</div>
              </ListGroup.Item>
            </a>
          </Link>
          <Link href={'/'}>
            <a className="tw-border-l-4 tw-border-l-green-400 hover:tw-shadow">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between border-0 align-items-start tw-h-10 group"
              >
                <div className="ms-2 me-auto align-self-center">Cras justo odio</div>
              </ListGroup.Item>
            </a>
          </Link>
        </ListGroup>
      </div>
      <div className="lg:tw-container md:tw-container sm:tw-container xs:tw-container-fluid   tw-mx-auto tw-pl-3 tw-pr-3 tw-shadow  md:tw-w-full">
        <div className='tw-mt-5'>
          <strong>Discription</strong>
        </div>
        <div className="tw-text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus cras
          arcu lacus ultrices sem id id scelerisque habitant. Sit egestas
          bibendum venenatis fermentum vel. At sit mauris nisi vulputate. Mattis
          venenatis urna, neque dictum dui facilisis. Maecenas netus nibh diam
          sed faucibus sollicitudin ut ac. Quisque sed sed commodo orci
          dignissim sit cursus sed eget. In enim imperdiet mauris in pretium
          facilisi faucibus vestibulum donec. Rhoncus tortor massa, fames
          curabitur vel nulla mattis congue diam. Sit nunc, aliquet purus massa
          cursus nibh augue amet gravida. Pharetra nulla phasellus id quis.
          Venenatis sed nisi, bibendum id lacus sapien. Dignissim mattis vel
          pharetra venenatis, pretium risus. Massa tempor turpis aliquam lectus.
          In interdum sit faucibus metus. Tellus in urna cras eget suspendisse
          odio. Viverra dui, dapibus id rhoncus. Elit laoreet aenean gravida
          tellus cursus erat non. Sed nunc molestie suspendisse mauris. Enim
          vestibulum senectus faucibus quis lorem integer proin. Neque id tempor
          proin nulla. Consequat feugiat nec facilisi in orci, elementum et at
          sodales. Ipsum odio porta libero adipiscing quis. Tristique nullam
          ultricies eget lacus arcu cras malesuada commodo, turpis. Commodo
          volutpat leo vel velit erat. Sed mattis dictum enim quis sit mi. Read
          More
        </div>
        <div className="tw-mt-10">
          <Accordion
            state={state}
            onChange={handlers.setState}
            disableIconRotation
          >
            <Accordion.Item
              label="Procedure"
              icon={<IconStepInto color={theme.colors.blue[6]} />}
            >
              <div className="tw-flex tw-text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                morbi amet nisl lorem sed suspendisse nisl cras in. Dolor,
                gravida lacinia consectetur urna. Viverra diam ornare tincidunt
                est amet. Elit sit egestas ut porttitor in. Volutpat libero
                elementum diam tristique nibh sapien et non pulvinar. Rhoncus
                diam nulla tempus eu. Aenean faucibus vel odio nullam
                scelerisque duis ante. Ullamcorper nulla habitasse quam nisl
                cursus at non massa amet. Leo, eget vel dui suscipit facilisis
                malesuada ultrices. Consectetur commodo pellentesque aliquet
                amet pretium vel ultricies elementum ipsum. Cras faucibus eget
                orci donec neque..
              </div>
            </Accordion.Item>
            <Accordion.Item
              label="Time"
              icon={<IconClock color={theme.colors.red[6]} />}
            >
              <div className="tw-text-justify">
                Dui id eget in ipsum lorem sit tincidunt mi. Orci sed leo lacus,
                eu velit proin. Nisi, eget nec tellus massa, mattis placerat
                phasellus. Proin bibendum est commodo, tristique nullam. Turpis
                ut in gravida faucibus morbi eu. Sit dictum dignissim dignissim
                donec dis orci sagittis pellentesque. Ut elit augue egestas
                risus odio neque suspendisse. Sagittis non hac vel nisi, cursus
                aliquet pellentesque sed. Venenatis eget interdum varius enim,
                pretium. Sollicitudin pellentesque ut ac aliquet in aliquam. Nam
                interdum fringilla blandit at bibendum volutpat. Amet non et
                auctor ac ipsum faucibus. Pharetra, ac viverra dolor morbi lorem
                risus faucibus
              </div>
            </Accordion.Item>
            <Accordion.Item
              label="Cost"
              icon={<IconCoin color={theme.colors.teal[6]} />}
            >
              <div className="tw-text-justify">
                Cum vitae in nunc fringilla nunc auctor turpis nulla. Imperdiet
                rhoncus amet pellentesque aenean. Sapien justo, tellus mauris,
                dis ornare libero. Tellus in praesent mauris, diam. Risus at
                ipsum quam ullamcorper aliquam vitae. Maecenas non nunc, commodo
                cras cursus tristique consequat, nunc felis. Mauris consectetur
                dictum odio adipiscing bibendum quis enim malesuada cras.
                Imperdiet ornare egestas quam ut aliquam euismod varius.
                Malesuada justo amet nisl sit scelerisque dictumst.
              </div>
            </Accordion.Item>
            <Accordion.Item
              label="Dependency and Pre Requists"
              icon={<IconCircles color={theme.colors.pink[6]} />}
            >
              <div className="tw-text-justify">None</div>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className=" lg:tw-flex tw-w-full lg:tw-self-end lg:tw-mt-3">
          <div className="lg:tw-flex lg:tw-self-end lg:tw-justify-between lg:tw-w-full">
            <div className="lg:tw-space-x-2 tw-self-center">
              <Link href={'/'}>
                <a>Wiki source</a>
              </Link>
              {' -'}
              <Link href={'/'}>
                <a>FAQ</a>
              </Link>
            </div>
            <div className="lg:tw-space-x-2">
              <Button>Agree and continue</Button> <Button>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationJourney;
