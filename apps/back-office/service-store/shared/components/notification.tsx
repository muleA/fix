import React, { useEffect, useState } from 'react';
import { IconCircleCheck, IconAlertTriangle } from '@tabler/icons';

export type Props = {
  message: string;
  show: boolean;
  onClose: () => void;
  type: 'danger' | 'success' | 'info';
};
export default function Notification(props: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(props.show);
  useEffect(() => {
    setTimeout(() => setIsVisible(false), 7000);
  }, []);
  const handleClose = () => {
    props.onClose();
  };

  {
    return (
      <>
        {isVisible && (
          <div className="fixed-bottom d-flex justify-content-end">
            <div
              className={`alert alert-${props.type} alert-important alert-dismissible`}
              role="alert"
            >
              <div className="d-flex">
                <div>
                  <strong className="me-auto">
                    {props.type === 'success' ? (
                      <IconCircleCheck className="icon-md text-white" />
                    ) : (
                      <IconAlertTriangle className="icon-md text-white" />
                    )}
                  </strong>
                </div>
                <div>
                  <h4 className="alert-title font-bold text-white"></h4>
                  <div className="text-white">{props.message}</div>
                </div>
              </div>
              <a
                className="btn-close"
                onClick={handleClose}
                data-bs-dismiss="alert"
                aria-label="close"
              ></a>
            </div>
          </div>
        )}
      </>
    );
  }
  return null;
}
