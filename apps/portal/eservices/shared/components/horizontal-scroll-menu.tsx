import { IconArrowBigLeftLines, IconArrowBigRightLines } from '@tabler/icons';
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
      className={`z-25 flex w-10 justify-center bg-indigo-900 text-white shadow  ${
        isFirstItemVisible ? 'hidden' : ''
      }`}
    >
      <IconArrowBigLeftLines
        className={` flex self-center `}
        onClick={() => scrollPrev()}
      >
        Left
      </IconArrowBigLeftLines>
    </div>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className={`z-25 flex w-10 justify-center bg-indigo-900 text-white shadow ${
        isLastItemVisible ? 'hidden' : ''
      }`}
    >
      <IconArrowBigRightLines
        className={` flex h-full self-center  `}
        onClick={() => scrollNext()}
      >
        Right
      </IconArrowBigRightLines>
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
      >
        <div
          onClick={() => router.push(menus.href)}
          className={`hover:active flex h-16 items-center justify-center hover:bg-indigo-900 hover:text-white ${
            selected ? 'bg-indigo-900 text-white active ' : ''
          }`}
        >
          <div className='flex justify-center'>{menus.name}</div>
          <div className="flex triangle self-center"></div>
        </div>
      </div>
      
    </>
  );
}

export default Menus;
