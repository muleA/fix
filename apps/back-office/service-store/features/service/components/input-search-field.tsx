import { IconSearch } from '@tabler/icons';
import { Input, Tooltip } from '@mantine/core';

export default function InputSearchFiled() {
  const rightSection = (
    <Tooltip label="search services " position="top" placement="end">
      <IconSearch/>
    </Tooltip>
  );

  return <Input placeholder="search services" rightSection={rightSection} />;
}


