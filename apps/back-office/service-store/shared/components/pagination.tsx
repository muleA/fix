import {
  Button,
  ButtonGroup,
  ButtonToolbar,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Ipagination from '../../shared/models/pagination';
import { IconArrowBarRight, IconArrowBarLeft } from '@tabler/icons';
export default function MakePagination({
  page = 1,
  pageSize = 1,
  totalCount = 0,
  onPageChange,
  onPageSizeChange,
  pageSizes = [5, 10, 20, 50, 100],
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const onFirstHandler = () => {
    onPageChange(1);
  };

  const onPrevHandler = () => {
    onPageChange(page - 1);
  };

  const onNextHandler = () => {
    onPageChange(page + 1);
  };

  const onLastHandler = () => {
    onPageChange(totalPages);
  };
  if (totalCount === 0) {
    return null;
  }

  return (
    <>
      <div className="container ml-auto mb-4">
        <ButtonToolbar
          aria-label="Toolbar with button groups "
          className="justify-content-center h-32"
        >
          <ButtonGroup className="me-2" aria-label="First group">
            <Button
              variant="primary"
              aria-label="Paginate to the first page"
              disabled={!canPrev}
              onClick={onFirstHandler}
            >
              <IconArrowBarLeft size={20} />
            </Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button
              variant="primary"
              aria-label="Paginate back"
              disabled={!canPrev}
              onClick={onPrevHandler}
            >
              <IconArrowBarLeft size={20} />
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <div className="tw-rounded-full tw-border-2 border-solid tw-border-indigo-600 px-4 py-2  ">
              {page} of {totalPages}
            </div>
          </ButtonGroup>
          <ButtonGroup className="mr-4">
            <Button
              variant="primary"
              aria-label="Paginate forward"
              disabled={!canNext}
              onClick={onNextHandler}
            >
              <IconArrowBarRight size={20} />
            </Button>
          </ButtonGroup>

          <ButtonGroup className="ml-2">
            <Form.Select
              aria-label="select pages"
              className="w-min-w border-indigo-500/100"
              value={pageSize}
              onChange={onPageSizeChange}
            >
              {pageSizes.map((items) => (
                <option key={items} value={items}>
                  {items}/page
                </option>
              ))}
            </Form.Select>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </>
  );
}
