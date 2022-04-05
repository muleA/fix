import { Tooltip } from '@mantine/core';
import { IconUpload, IconPaperclip, IconTrash } from '@tabler/icons';
import { useEffect, useRef, useState } from 'react';

type FileUploadProps = {
    register: any;
};

const FileUpload = (props: FileUploadProps) => {
    const [fileCount, setFileCount] =
        useState<{ index: number; value: string; status: "Added" | "Removed" }[]>([]);
    const ref = useRef([]);



    const addFileInput = () => {
        if (fileCount.length == 0) {
            setFileCount([...fileCount, { index: 0, value: '', status: "Added" }]);
        } else {
            setFileCount([...fileCount, { index: fileCount.length, value: '', status: "Added" }]);
        }


    }

    useEffect(() => {
        if (fileCount.length > 0) {
            ref.current = [...ref.current.slice(0)];
            ref.current[fileCount.length - 1].click();

        }
    }, [fileCount.length]);

    return (
        <div>
            <button type={"button"} className='tw-mt-4 btn' onClick={addFileInput}>
                <IconUpload />
                Add files
            </button>
            <ul className='tw-mt-2'>
                {fileCount.map((item) => (
                    <div key={item.index} >
                        {item.status == "Added" &&
                            <>
                                < input type="file" hidden={true}
                                    {...props.register(`files.${item.index}`, {
                                        shouldUnregister: true,
                                        onChange: (event) => setFileCount([...fileCount.slice(0, item.index), { index: item.index, value: event.target.files[0].name, status: "Added" }, ...fileCount.slice(item.index + 1)])
                                    })}
                                    ref={(el) => ref.current[item.index] = el}
                                />
                                {item.value != "" &&
                                    <li className='tw-flex tw-items-center tw-pr-2 hover:tw-bg-gray-200 visibility-hoverable-container'>
                                        <IconPaperclip className='tw-flex tw-mr-2' size={14} />
                                        <Tooltip
                                            wrapLines
                                            position='bottom'
                                            placement='start'
                                            transition="fade"
                                            transitionDuration={800}
                                            exitTransitionDuration={0}
                                            label={item.value}
                                        >
                                            <span className='tw-mr-2'> {item.value.length > 12 ? `${item.value.substring(0, 8)}...` : item.value} </span>
                                        </Tooltip>

                                        <Tooltip
                                            wrapLines
                                            position='bottom'
                                            placement='start'
                                            transition="fade"
                                            transitionDuration={800}
                                            exitTransitionDuration={0}
                                            label="Remove file"
                                        >
                                            <IconTrash className='tw-flex hover:tw-cursor-pointer hoverable-visibility-content' size={14} onClick={() => setFileCount([...fileCount.slice(0, item.index), { index: item.index, value: '', status: "Removed" }, ...fileCount.slice(item.index + 1)])} />
                                        </Tooltip>
                                    </li>
                                }
                            </>
                        }
                    </div>

                ))}

            </ul>
        </div>
    );

}

export default FileUpload;