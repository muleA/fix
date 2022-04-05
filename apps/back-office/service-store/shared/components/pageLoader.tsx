import ReactLoading from 'react-loading';
export default function PageLoader() {
  return (
    <>
      <ReactLoading
        className="tw-z-50 tw-absolute tw-top-1/2 tw-left-1/2 
                  -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transform"
        type={'spokes'}
        color={'#1d2861'}
        height={'10%'}
        width={'10%'}
      />
    </>
  );
}
