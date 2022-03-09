import { Accordion, Group, Text, MultiSelect } from '@mantine/core';
import {Button} from 'react-bootstrap'
import {IconShieldCheck} from '@tabler/icons'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const RelatedServiceForm = () => {

    const AccordionLabel = () => (
        <>
            <Group noWrap>
                <div>
                    <Text>Related Services</Text>
                    <Text size="sm" color="dimmed" weight={400}>
                        Add Related Service
                    </Text>
                </div>
            </Group>
        </>
    );

    return (
        <Accordion iconPosition="right"  className='tw-bg-white tw-mt-4'
            styles={{
                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
            }}
        >
            <Accordion.Item label={<AccordionLabel />}>
               
                    <fieldset className="form-fieldset">
  <div className="mb-3">
    <label className="form-label required">Related Services</label>
  </div>
  <MultiSelect
  placeholder="Pick language"
  data={[
    { value: 'English', label: 'English' },
    { value: 'Amharic', label: 'Amharic' },
    { value: 'Affan Oromo', label: 'Affan Oromo' },
    { value: 'Tigrigna', label: 'Tigirgna' },
    {value:'somaligna',label:'somaligna'}
  ]}
/>
<div>
    <Button className="bg-primary "><IconShieldCheck/>save</Button>
</div>

</fieldset>
               


          

              
                   
            

            </Accordion.Item>
        </Accordion>

    );
}

export default RelatedServiceForm;