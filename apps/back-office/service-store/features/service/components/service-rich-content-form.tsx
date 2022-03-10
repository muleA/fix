import { Accordion, Group, Text, Divider } from '@mantine/core';
import { Button } from 'react-bootstrap';
import { IconShieldCheck, IconFileUpload } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AccordionControlButton from './accordion-control-button'
const ServiceRichContentForm = () => {
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>Rich Contents(Medias) for the Service </Text>
          <Text size="sm" color="dimmed" weight={400}>
            Add Medias(audio/video/image/files)
          </Text>
        </div>
      </Group>
    </>
  );
  return (
    <Accordion disableIconRotation offsetIcon={false} iconPosition="right"
    icon={<AccordionControlButton/>}
      className="tw-bg-white tw-mt-4"
      styles={{
        itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
      }}
    >
      <Accordion.Item label={<AccordionLabel />}>
        <fieldset className="form-fieldset">
        <div className="mb-3">
                <label className="form-label required">Media Type(audio/video/image)</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="media type"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">Caption Text to the Media</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="caption"
                  autoComplete="off"
                />
              </div>
          <div className="mb-3">
            <label className="form-label required">
add source file(url) to the media
            </label>

            <input
              className="tw-block tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg 
tw-border tw-border-gray-300 
tw-cursor-pointer dark:tw-text-gray-400 focus:tw-outline-none focus:tw-border-transparent 
dark:tw-bg-gray-700
 dark:tw-border-gray-600 dark:tw-placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div
              className="tw-mt-1 tw-text-sm tw-text-gray-500 dark:tw-text-gray-300"
              id="user_avatar_help"
            ></div>

            {/*  */}
            <Button className="bg-primary ">
              <IconFileUpload />
              upload
            </Button>
          </div>
        </fieldset>
      </Accordion.Item>
    </Accordion>
  );
};

export default ServiceRichContentForm;
