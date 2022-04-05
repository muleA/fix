import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import { route } from 'next/dist/server/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));
interface Menu {
  name: string;
  href: string;
  selected: boolean;
}
interface Props {
  navigation: Menu[];
}
function Menus(props: Props) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const router = useRouter();

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : (currentSelected = [id])
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {props.navigation.map((menu) => {
        return (
          <Menu
            itemId={menu.name} // NOTE: itemId is required for track items
            menus={menu}
            key={menu.name}
            onClick={handleClick(menu.name)}
            selected={isItemSelected(menu.name)}
          />
        );
      })}
    </ScrollMenu>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      className={`tw-rounded-full tw-self-center tw-absolute  tw-left-4 tw-z-25 tw-flex tw-w-8 tw-h-8 tw-justify-center tw-bg-neutral-700 tw-text-white tw-shadow  ${
        isFirstItemVisible ? 'tw-hidden' : ''
      }`}
    >
      <IconChevronLeft
        className={` tw-flex tw-self-center `}
        onClick={() => scrollPrev()}
      >
        Left
      </IconChevronLeft>
    </div>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className={`tw-rounded-full tw-self-center tw-absolute tw-right-4 tw-z-25 tw-flex tw-w-8 tw-h-8 tw-justify-center tw-items-center tw-bg-neutral-700 tw-text-white tw-shadow ${
        isLastItemVisible ? 'tw-hidden' : ''
      }`}
    >
      <IconChevronRight
        className={` tw-flex  tw-self-center  `}
        onClick={() => scrollNext()}
      >
        Right
      </IconChevronRight>
    </div>
  );
}

function Menu({ onClick, selected, menus, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: '160px',
        }}
        tabIndex={0}
        className='tw-rounded-lg'
      >
        <div
          onClick={() => router.push(menus.href)}
          className={`hover:active hover:tw-bg-gray-700 tw-flex tw-h-16 tw-items-center tw-justify-center hover:tw-text-white ${
            selected ? 'tw-bg-gray-700 tw-text-white active ' : ''
          }`}
        >
          <div className='tw-flex tw-justify-center tw-font-serif '>{menus.name}</div>
          <div className="tw-flex triangle tw-self-center"></div>
        </div>
      </div>
      
    </>
  );
}

export default Menus;
