import { useState, useEffect } from 'react';
import { Card, Tooltip } from '@mantine/core';
import { IconX, IconDeviceFloppy } from '@tabler/icons';
import { useAppDispatch } from '../../../shared/hooks/redux.hook';
import { setSideView } from '../store/slice/organization.slice';
import RichTextEditor from '../../../shared/components/RichTextEditor';
import FileUpload from '../../../shared/components/FileUpload';
import { useForm } from "react-hook-form";


const Note = () => {

    const dispatch = useAppDispatch();
    const [textEditorValue, setTextEditorValue] = useState<string>('');
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setValue("note", textEditorValue);
    }, [textEditorValue]);

    return (
        <Card className='tw-ml-4 tw-w-6/12' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-base'>
                    Note
                </h2>
                <Tooltip
                    withArrow
                    wrapLines
                    label="Close"
                    className='tw-mr-2'
                >
                    <IconX className='tw-flex tw-cursor-pointer' onClick={() => dispatch(setSideView(''))} size={16} />
                </Tooltip>
            </Card.Section>

            <Card.Section className='tw-p-4'>
                <RichTextEditor value={textEditorValue}
                    onChange={setTextEditorValue}
                    controls={[
                        ['bold', 'italic', 'underline', 'unorderedList', 'orderedList']
                    ]}
                    styles={{
                        root: {
                            'ul': {
                                listStyleType: "disc"
                            },
                            'ol': {
                                listStyleType: "decimal"
                            },
                            '.quill': {
                                height: "200px"
                            },
                            '.ql-editor': {
                                height: "100%",
                                overflowY: "scroll"
                            }
                        }
                    }}
                />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='tw-flex tw-justify-between tw-items-start'>
                        <input type="text" {...register("note", { required: true })} hidden={true}
                        />
                        <FileUpload register={register} />
                        <button type='submit' className='tw-mt-4 btn btn-primary tw-bg-[#1d2861]' disabled={textEditorValue == '<p><br></p>' ? true : false}>
                            <IconDeviceFloppy />
                            Save
                        </button>
                    </div>
                </form>

            </Card.Section>

        </Card>

    );

}

export default Note;