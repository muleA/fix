import React from 'react';
import Link from 'next/link';
import { IconChevronRight, IconList } from '@tabler/icons';
import { Pagination, Select, Tooltip } from '@mantine/core';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardStatProps from '../../../models/dashboard/dashboard-stat-card';
export default function DashboardStatCard(props:DashboardStatProps) {

const [perPage, setPerPage] = useState<string>('5');
  return (
    <>
 <div className="md:tw-w-[32%] tw-m-3">
      <div className="tw-bg-white tw-w-full tw-flex tw-p-5">
        <div className="tw-w-10 tw-h-10 tw-mr-2">
          <props.Icon className="tw-flex" size={32} />
        </div>
        <div>
          <h2 className="tw-text-xl">{props.count} &nbsp;{props.countHeading} </h2>
          <Link href={props.headingLink}>
            <a className="tw-text-xs">{props.subHeading}</a>
          </Link>
        </div>
      </div>
      <div className="tw-bg-white tw-mt-4 tw-p-3 tw-w-full">
        <div className="table-responsive">
          <Table responsive="sm" hover className="table-vcenter table">
            <thead>
              <tr className="tw-bg-[#e6e7e9] ">
                <th className="tw-font-bold" > {props.tableHeading}</th>
                <th className="w-1"></th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((name) => (
                <tr key={name}className="visibility-hoverable-container">
                  <td>{name}</td>
                  <td className='hoverable-visibility-content'> 
                    <Tooltip
                      withArrow
                      wrapLines
                      width={220}
                      label="this arrow will redirect to the detail of this item"
                    >
                      {' '}
                      <Link href={props.tableLink}>
                        <a
                          className="tw-block bg-primary tw-text-white hover:tw-text-white
                     tw-p-1 tw-rounded hover:opacity-50"
                        >
                          <IconChevronRight />
                        </a>
                      </Link>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="tw-mt-2 tw-mr-1 tw-flex tw-items-center md:tw-items-end ">
          <div className="">
            <Pagination
              total={5}
              radius="xs"
              size="sm"
              styles={{
                item: { color: '#1d2861', borderWidth: 0, fontSize: '12px' },
                active: { color: '#1d2861', fontWeight: 'bold' },
              }}
            />
            </div>

            <div className="tw-w-1/4">
            <Select
              size="xs"
              value={perPage}
              onChange={setPerPage}
              data={[
                { value: '5', label: '5 / page' },
                { value: '10', label: '10 / page' },
                { value: '20', label: '20 / page' },
                { value: '30', label: '30 / page' },
                { value: '40', label: '40 / page' },
              ]}
            />
          </div>
          </div>

        
        </div>
      </div>
    </>
  );
}
