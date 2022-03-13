export default function ServiceLanguageForm() {
  return (
    <>
      <fieldset className="form-fieldset">
      <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="name"
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
      </fieldset>
    </>
  );
}
