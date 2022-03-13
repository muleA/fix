export default function ServiceCategoryForm() {
  return (
    <>
      <fieldset className="form-fieldset">
        <div className="mb-3">
          <label className="form-label required">Name</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="name"
            />
        </div>
        <div className="mb-3">
          <label className="form-label required">Code</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="code"
            />
        </div>
        <div className="mb-3">
          <label className="form-label required"> Description</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="code"
            />
        </div>
      </fieldset>
    </>
  );
}
