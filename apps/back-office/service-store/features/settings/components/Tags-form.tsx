export default function ServiceTagsForm() {
  return (
    <>
      <fieldset className="form-fieldset">
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="Description"
            />
          </div>
        </div>
      </fieldset>
    </>
  );
}
